import { AppRuntime } from "$ts/apps/runtime";
import { getReport } from "$ts/bugrep";
import { ErrorIcon } from "$ts/images/dialog";
import { Process } from "$ts/process";
import { createErrorDialog } from "$ts/process/error";
import { getAppPreference } from "$ts/server/user/pref";
import { UserDataStore } from "$ts/stores/user";
import { Store } from "$ts/writable";
import type { App, AppMutator } from "$types/app";
import { LocalReportData, Report } from "$types/bugrep";

export class Runtime extends AppRuntime {
  public Report = Store<Report>();
  public Selected = Store<string>();
  public store = Store<LocalReportData[]>([]);

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.setStoreListener();
  }

  public setStoreListener() {
    UserDataStore.subscribe(() => {
      const reports = (getAppPreference("Reporting", "reports") as LocalReportData[]) || [];

      this.store.set(reports);
    });
  }

  public async openReport(id: string) {
    this.Selected.set(id);
    this.Report.set(null);

    const report = await getReport(id);

    if (!report) return this.NotFound(id);

    this.Report.set({ ...report, id });
  }

  public NotFound(id: string) {
    createErrorDialog(
      {
        title: "Can't find report",
        message: `It doesn't appear the Bug Report with ID <code>${id}</code> exists on the Reports server. It might have been deleted by an ArcOS Team Member. Do you want to remove it from the list?`,
        buttons: [
          {
            caption: "Keep it",
            action() {},
          },
          {
            caption: "Remove from list",
            action() {},
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
}
