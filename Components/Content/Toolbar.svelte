<script lang="ts">
  import { Runtime } from "$apps/BugReports/ts/runtime";

  export let runtime: Runtime;
</script>

<div class="toolbar">
  <button class="material-icons-round">clear_all</button>
  <div class="sep" />
  <div class="group">
    <button class="material-icons-round">message</button>
    <button class="material-icons-round">info_outline</button>
    <button class="material-icons-round">account_tree</button>
  </div>
  <div class="sep" />
  <div class="group">
    <button class="material-icons-round">refresh</button>
    <button class="suggested">Report Bug</button>
  </div>
  <div class="sep" />
</div>
