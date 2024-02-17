import { ComponentIcon } from "$ts/images/general";
import { App } from "$types/app";
import DataViewSvelte from "../DataView.svelte";
import { DataViewRuntime } from "./runtime";

export const DataViewer: App = {
  metadata: {
    name: "Data Viewer",
    description: "View data of a report",
    icon: ComponentIcon,
    author: "The ArcOS Team",
    version: "1.0.0",
  },
  runtime: DataViewRuntime,
  content: DataViewSvelte,
  id: "DataViewer",
  size: { w: 800, h: 550 },
  minSize: { w: 800, h: 550 },
  maxSize: { w: 800, h: 550 },
  pos: { x: 0, y: 0 },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    resizable: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  isOverlay: true,
};
