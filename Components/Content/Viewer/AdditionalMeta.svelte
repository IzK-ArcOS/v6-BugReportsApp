<script lang="ts">
  import ApiReveal from "$lib/Components/ApiReveal.svelte";
  import { Report } from "$types/bugrep";

  export let report: Report;
</script>

<div class="metadata">
  <div class="row">
    <div class="segment">
      <p class="caption">Provided User Data</p>
      <p class="value">{report.userdata ? "Yes" : "No"}</p>
    </div>
    <div class="segment">
      <p class="caption">Provided Server</p>
      <p class="value">{report.api ? "Yes" : "No"}</p>
    </div>
    <div class="segment">
      <p class="caption">Report ID</p>
      <p class="value"><ApiReveal api={report.id} /></p>
    </div>
  </div>
  <div class="row">
    <div class="segment">
      <p class="caption">Resolved</p>
      <p class="value">{report.resolved ? "Yes!" : "No..."}</p>
    </div>
    <div class="segment">
      <p class="caption">Closed</p>
      <p class="value">{report.closed ? "Yes" : "No"}</p>
    </div>
    <div class="segment">
      <p class="caption">Issue ID</p>
      <p class="value">{report.issueid}</p>
    </div>
  </div>
</div>
