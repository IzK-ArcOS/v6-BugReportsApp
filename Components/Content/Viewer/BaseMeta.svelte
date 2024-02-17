<script lang="ts">
  import { Logo } from "$ts/branding";
  import { WarningIcon } from "$ts/images/dialog";
  import { Report } from "$types/bugrep";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  export let report: Report;
</script>

<div class="metadata">
  <div class="row">
    <div class="segment">
      <p class="caption">Created By</p>
      <p class="value">{report.author}</p>
    </div>
    <div class="segment">
      <p class="caption">Date</p>
      <p class="value">{dayjs(report.created_at).format("MMMM D YYYY")}</p>
    </div>
    <div class="segment">
      <p class="caption">Time</p>
      <p class="value">{dayjs(report.created_at).format("h:mm A")}</p>
    </div>
    <div class="segment">
      <p class="caption">Server</p>
      <p class="value">{report.api || "Unknown"}</p>
    </div>
  </div>
  <div class="row">
    <div class="segment">
      <p class="caption">User Agent</p>
      <p class="value">{report.useragent || "No user agent provided"}</p>
    </div>
  </div>
  <div class="row">
    <div class="segment">
      <p class="caption">Client</p>
      <p class="value">{report.frontend || "Unknown"}</p>
    </div>
    <div class="segment">
      <p class="caption">Vite</p>
      <p class="value">{report.metaenv.MODE}</p>
    </div>
    <div class="segment">
      <p class="caption">Desktop</p>
      <p class="value">{report.desktop ? "Yes" : "No"}</p>
    </div>
    <div class="segment mode">
      <p class="caption">Mode</p>
      <p class="value">
        <span>{report.mode_file}</span>
        <img src={Logo(report.mode_file)} alt="" />
      </p>
    </div>
    <div class="segment right version">
      <p class="caption">Version</p>
      <p class="value">
        <span>{report.version}</span>
        {#if !report.version.startsWith("6.")}
          <img src={WarningIcon} alt="" />
        {/if}
      </p>
    </div>
  </div>
</div>
