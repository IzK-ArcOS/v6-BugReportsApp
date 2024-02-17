import { spawnOverlay } from "$ts/apps";
import { AppRuntime } from "$ts/apps/runtime";
import { getReport } from "$ts/bugrep";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import { Process } from "$ts/process";
import { createErrorDialog } from "$ts/process/error";
import { getAppPreference, setAppPreference } from "$ts/server/user/pref";
import { ProcessStack } from "$ts/stores/process";
import { UserDataStore } from "$ts/stores/user";
import { Store } from "$ts/writable";
import type { App, AppMutator } from "$types/app";
import { LocalReportData, Report } from "$types/bugrep";
import { Creator } from "../Creator/ts/app";
import { DataViewer } from "../DataView/ts/app";

export class Runtime extends AppRuntime {
  public Report = Store<Report>();
  public Selected = Store<string>();
  public store = Store<LocalReportData[]>([]);
  public Loading = Store<boolean>(false);
  public HasOverlay = Store<boolean>(false);

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.setStoreListener();
    this.update();

    if (!this.store.get().length) this.CreateReport();
  }

  public update() {
    const reports = (getAppPreference("Reporting", "reports") as LocalReportData[]) || [];

    this.store.set(reports.sort((a, b) => b.timestamp - a.timestamp));

    if (!this.Selected.get() && reports[0]) this.openReport(reports[0].id);
  }

  public setStoreListener() {
    UserDataStore.subscribe(() => this.update());
  }

  public async openReport(id: string) {
    const current = this.Selected.get();

    if (current == id) return;

    this.Selected.set(id);
    this.Report.set(null);

    this.Loading.set(true);

    const report = await getReport(id);

    this.Loading.set(false);

    if (!report) return this.NotFound(id);

    this.Report.set({ ...report, id });
  }

  public NotFound(id: string) {
    createErrorDialog(
      {
        title: "Can't find report",
        message: `It doesn't appear that the Bug Report with ID <code>${id}</code> exists on the Reports server. It might have been deleted by an ArcOS Team Member. Do you want to remove it from the list?`,
        buttons: [
          {
            caption: "Keep it",
            action() {},
          },
          {
            caption: "Remove from list",
            action: () => {
              this.removeReport(id);
            },
            suggested: true,
          },
        ],
        image: ErrorIcon,
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }

  public removeReport(id?: string) {
    const reports = this.store.get();
    const report = this.Report.get();

    id ||= report.id;

    if (!id) return;

    const result = reports.filter((report) => report.id != id);

    createErrorDialog(
      {
        title: "Remove report?",
        message:
          "Are you sure you want to remove this report from your account? This won't delete it from the Reports server if it still exists.",

        buttons: [
          { caption: "Cancel", action() {} },
          {
            caption: "Remove",
            action: () => {
              setAppPreference("Reporting", "reports", result);

              if (!id) {
                this.Report.set(null);
                this.Selected.set(null);
              }
            },
            suggested: true,
          },
        ],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  public async ViewData(body: string) {
    if (this.HasOverlay.get()) return;

    const proc = await spawnOverlay(DataViewer, this.pid, [body]);

    if (typeof proc === "string") return;

    this.HasOverlay.set(true);

    const subscriber = ProcessStack.processes.subscribe(() => {
      if (!ProcessStack.isPid(proc.pid, true)) {
        this.HasOverlay.set(false);

        subscriber();
      }
    });
  }

  public async CreateReport() {
    if (this.HasOverlay.get()) return;

    const proc = await spawnOverlay(Creator, this.pid);

    if (typeof proc === "string") return;

    this.HasOverlay.set(true);

    const subscriber = ProcessStack.processes.subscribe(() => {
      if (!ProcessStack.isPid(proc.pid, true)) {
        this.HasOverlay.set(false);

        subscriber();
      }
    });
  }
}
