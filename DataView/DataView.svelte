<script lang="ts">
  import { DataViewRuntime } from "./ts/runtime";
  import "./css/main.css";

  export let runtime: DataViewRuntime;

  const { Body } = runtime;

  function closeThis() {
    runtime.closeApp();
  }
</script>

<textarea value={$Body} readonly spellcheck="false"></textarea>
<div class="toolbar">
  <button class="suggested" on:click={closeThis}>Close</button>
</div>
