<script lang="ts">
  import { Report } from "$types/bugrep";
  import AdditionalMeta from "./Viewer/AdditionalMeta.svelte";
  import BaseMeta from "./Viewer/BaseMeta.svelte";
  import Header from "./Viewer/Header.svelte";
  import LegacyNotice from "./Viewer/LegacyNotice.svelte";

  export let report: Report;
</script>

<Header {report} />
<BaseMeta {report} />
<AdditionalMeta {report} />
{#if !report.version.startsWith("6.")}
  <LegacyNotice />
{/if}
