import { AppRuntime } from "$ts/apps";
import { Process } from "$ts/process";
import { Store } from "$ts/writable";
import { App, AppMutator } from "$types/app";

export class DataViewRuntime extends AppRuntime {
  public Body = Store<string>("");

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    const args = process.args;
    const body = args[0];

    if (body && typeof body == "string") this.Body.set(body);
  }
}
