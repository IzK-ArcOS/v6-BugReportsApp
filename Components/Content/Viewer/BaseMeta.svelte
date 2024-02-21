<script lang="ts">
  import InfoBlock from "$state/Desktop/Components/ProcessRenderer/Window/InfoBlock.svelte";
  import InfoRow from "$state/Desktop/Components/ProcessRenderer/Window/InfoBlock/InfoRow.svelte";
  import Segment from "$state/Desktop/Components/ProcessRenderer/Window/InfoBlock/Row/Segment.svelte";
  import { Logo } from "$ts/branding";
  import { WarningIcon } from "$ts/images/dialog";
  import { Report } from "$types/bugrep";
  import dayjs from "dayjs";

  export let report: Report;
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Created By">
      {report.author}
    </Segment>
    <Segment title="Date">
      {dayjs(report.created_at).format("MMMM D YYYY")}
    </Segment>
    <Segment title="Time">
      {dayjs(report.created_at).format("h:mm A")}
    </Segment>
    <Segment title="Server">
      {report.api || "Unknown"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="User Agent">
      {report.useragent || "No user agent provided"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Client">
      {report.frontend || "Unknown"}
    </Segment>
    <Segment title="Vite">
      {report.metaenv.MODE}
    </Segment>
    <Segment title="Desktop">
      {report.desktop ? "Yes" : "No"}
    </Segment>
    <Segment title="Mode" className="mode">
      <span>{report.mode_file}</span>
      <img src={Logo(report.mode_file)} alt="" />
    </Segment>
    <Segment right title="Version" className="version">
      <span>{report.version}</span>
      {#if !report.version.startsWith("6.")}
        <img src={WarningIcon} alt="" />
      {/if}
    </Segment>
  </InfoRow>
</InfoBlock>
