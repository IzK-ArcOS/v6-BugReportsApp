<script lang="ts">
  import Spinner from "$lib/Components/Spinner.svelte";
  import Titlebar from "$state/Desktop/Components/ProcessRenderer/Window/Titlebar.svelte";
  import { Runtime } from "../ts/runtime";
  import NotFound from "./Content/NotFound.svelte";
  import Toolbar from "./Content/Toolbar.svelte";
  import Viewer from "./Content/Viewer.svelte";

  export let runtime: Runtime;

  const { Report, Loading, Selected } = runtime;
</script>

<div class="content">
  <Titlebar pid={runtime.pid} app={runtime.appMutator}>
    <Toolbar {runtime} />
  </Titlebar>
  <div class="bottom">
    {#if !$Loading}
      {#if $Report}
        <Viewer report={$Report} />
      {:else if $Selected}
        <NotFound id={$Selected} />
      {/if}
    {:else}
      <div class="loading"><Spinner height={32} /></div>
    {/if}
  </div>
</div>
