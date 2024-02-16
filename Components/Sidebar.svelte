<script lang="ts">
  import { Runtime } from "../ts/runtime";
  import Report from "./Sidebar/Report.svelte";

  export let runtime: Runtime;

  const { store } = runtime;
</script>

<div class="sidebar">
  {#each $store as report}
    <Report {report} {runtime} />
  {/each}
</div>
