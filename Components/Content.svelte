<script lang="ts">
  import Titlebar from "$state/Desktop/Components/ProcessRenderer/Window/Titlebar.svelte";
  import { Runtime } from "../ts/runtime";
  import Toolbar from "./Content/Toolbar.svelte";

  export let runtime: Runtime;

  const { Selected, Report } = runtime;
</script>

<div class="content">
  <Titlebar pid={runtime.pid} app={runtime.appMutator}>
    <Toolbar {runtime} />
  </Titlebar>
  <div class="bottom">
    {#if $Report}
      {$Selected}
      {$Report.title}
    {/if}
  </div>
</div>
