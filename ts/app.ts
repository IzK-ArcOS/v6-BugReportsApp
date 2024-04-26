import { BugReportIcon } from "$ts/images/general";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

// Application Metadata
export const BugReports: App = {
  metadata: {
    name: "Bug Reports",
    description: "View and send ArcOS bug reports",
    author: "The ArcOS Team",
    version: "2.0.0",
    icon: BugReportIcon,
    appGroup: "support",
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "BugReports",
  size: { w: 840, h: 600 },
  minSize: { w: 840, h: 600 },
  maxSize: { w: 840, h: 600 },
  pos: { x: 100, y: 100 },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  glass: true,
  singleInstance: true,
};
