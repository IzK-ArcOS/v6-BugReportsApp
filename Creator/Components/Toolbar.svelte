<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ARCOS_MODE } from "$ts/metadata";
  import { isDesktop } from "$ts/metadata/desktop";
  import { CreatorRuntime } from "../ts/runtime";

  export let runtime: CreatorRuntime;

  const { Loading, Title, Body } = runtime;

  function privacy() {
    runtime.DataPrivacy();
  }

  function exit() {
    runtime.closeApp();
  }

  function send() {
    runtime.Send();
  }
</script>

<div class="toolbar">
  <p class="version">
    ArcOS {ArcOSVersion}-{ARCOS_MODE} - {isDesktop() ? "desktop" : "browser"}
  </p>
  <div class="buttons">
    <button on:click={privacy} disabled={$Loading}>Data Privacy</button>
    <button on:click={exit} disabled={$Loading}>Cancel</button>
    <button class="suggested" on:click={send} disabled={$Loading || !$Title || !$Body}>
      Submit Report
    </button>
  </div>
</div>
