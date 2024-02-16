<script lang="ts">
  import { Runtime } from "$apps/BugReports/ts/runtime";
  import { FileIcon } from "$ts/images/filesystem";
  import { ArcAppMimeIcon } from "$ts/images/mime";
  import { LocalReportData } from "$types/bugrep";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  export let runtime: Runtime;
  export let report: LocalReportData;

  const { Selected } = runtime;

  let timestamp;

  onMount(() => {
    timestamp = dayjs(report.timestamp).format("D MMM YYYY, HH:mm:ss");
  });

  function open() {
    runtime.openReport(report.id);
  }
</script>

<button on:click={open} class:active={$Selected == report.id}>
  <img src={ArcAppMimeIcon} alt="" />
  <span>{timestamp}</span>
</button>
