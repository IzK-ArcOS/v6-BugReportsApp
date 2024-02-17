<script lang="ts">
  import { Report } from "$types/bugrep";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  export let report: Report;

  let ts = "on 1 January 1970 at 12:00:00";

  onMount(() => {
    ts = dayjs(report.created_at).format("[on] D MMMM YYYY [at] H:mm:ss");
  });
</script>

<div class="header">
  <h1>{report.title}</h1>
  <p class="subtitle">Submitted by {report.author} {ts}</p>
</div>
