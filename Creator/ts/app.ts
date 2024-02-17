import { ComponentIcon } from "$ts/images/general";
import { App } from "$types/app";
import CreatorSvelte from "../Creator.svelte";
import { CreatorRuntime } from "./runtime";

export const Creator: App = {
  metadata: {
    name: "Data Viewer",
    description: "View data of a report",
    icon: ComponentIcon,
    author: "The ArcOS Team",
    version: "1.0.0",
  },
  runtime: CreatorRuntime,
  content: CreatorSvelte,
  id: "Creator",
  size: { w: 650, h: 500 },
  minSize: { w: 650, h: 500 },
  maxSize: { w: 650, h: 500 },
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
