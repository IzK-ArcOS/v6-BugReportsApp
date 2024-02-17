<script lang="ts">
  import { sleep } from "$ts/util";
  import { LocalReportData } from "$types/bugrep";
  import { Runtime } from "../ts/runtime";
  import Report from "./Sidebar/Report.svelte";

  export let runtime: Runtime;

  const { store } = runtime;

  let reports: LocalReportData[] = [];

  store.subscribe(async (v) => {
    if (!v) return;

    reports = [];
    await sleep();
    reports = v;
  });
</script>

<div class="sidebar">
  {#each reports as report}
    <Report {report} {runtime} />
  {/each}
</div>
