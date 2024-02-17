import { AppRuntime } from "$ts/apps";
import { sendReport } from "$ts/bugrep";
import { Process } from "$ts/process";
import { createErrorDialog } from "$ts/process/error";
import { ProcessStack } from "$ts/stores/process";
import { Store } from "$ts/writable";
import { App, AppMutator } from "$types/app";
import DataPrivacy from "../DataPrivacy.svelte";

export class CreatorRuntime extends AppRuntime {
  public Title = Store<string>("");
  public Body = Store<string>("");
  public IncludeUserData = Store<boolean>(false);
  public IncludeApi = Store<boolean>(true);
  public Loading = Store<boolean>(false);

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);
  }

  public async Send() {
    const title = this.Title.get();
    const body = this.Body.get();

    if (!title || !body) return;

    this.Loading.set(true);

    const id = await sendReport({
      title,
      body,
      includeUserData: this.IncludeUserData.get(),
      includeApi: this.IncludeApi.get(),
    });

    ProcessStack.dispatch.dispatchToPid(this.process.parentPid, "open-report", id);

    this.closeApp();

    this.Loading.set(false);
  }

  public DataPrivacy() {
    createErrorDialog(
      {
        title: "Please keep in mind",
        component: DataPrivacy,
        buttons: [
          { caption: "Decline", action: () => this.closeApp() },
          { caption: "I Agree", action() {}, suggested: true },
        ],
        sound: "arcos.dialog.info",
      },
      this.pid,
      true
    );
  }
}
