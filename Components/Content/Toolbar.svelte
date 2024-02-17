<script lang="ts">
  import { Runtime } from "$apps/BugReports/ts/runtime";

  export let runtime: Runtime;

  const { Report, Selected, HasOverlay } = runtime;

  function remove() {
    runtime.removeReport();
  }

  function body() {
    runtime.ViewData($Report.body);
  }

  function log() {
    runtime.ViewData($Report.log);
  }

  function userdata() {
    runtime.ViewData(JSON.stringify($Report.userdata, null, 4));
  }

  function report() {
    runtime.CreateReport();
  }
</script>

<div class="toolbar">
  <button class="material-icons-round" disabled={!$Selected || $HasOverlay} on:click={remove}
    >clear_all</button
  >
  <div class="sep" />
  <div class="group">
    <button
      class="material-icons-round"
      disabled={!$Report || !$Report.body || $HasOverlay}
      on:click={body}
    >
      message
    </button>
    <button
      class="material-icons-round"
      disabled={!$Report || !$Report.log || $HasOverlay}
      on:click={log}
    >
      info_outline
    </button>
    <button
      class="material-icons-round"
      disabled={!$Report || !$Report.userdata || $HasOverlay}
      on:click={userdata}
    >
      account_tree
    </button>
  </div>
  <div class="sep" />
  <div class="group">
    <button class="suggested" disabled={$HasOverlay} on:click={report}>Report Bug</button>
  </div>
  <div class="sep" />
</div>
