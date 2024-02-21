<script lang="ts">
  import "./css/main.css";
  import { DataViewRuntime } from "./ts/runtime";

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
