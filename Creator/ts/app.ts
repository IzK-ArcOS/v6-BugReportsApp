import { BugReportIcon } from "$ts/images/general";
import { App } from "$types/app";
import CreatorSvelte from "../Creator.svelte";
import { CreatorRuntime } from "./runtime";

export const Creator: App = {
  metadata: {
    name: "Submit Bug Report",
    description: "View data of a report",
    icon: BugReportIcon,
    author: "The ArcOS Team",
    version: "1.0.0",
  },
  runtime: CreatorRuntime,
  content: CreatorSvelte,
  id: "Creator",
  size: { w: 650, h: 500 },
  minSize: { w: 650, h: 500 },
  maxSize: { w: 650, h: 500 },
  pos: { x: 150, y: 100 },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    resizable: false,
    headless: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
};
