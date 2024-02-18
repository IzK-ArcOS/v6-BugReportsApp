<script lang="ts">
  import ApiReveal from "$lib/Components/ApiReveal.svelte";
  import InfoBlock from "$state/Desktop/Components/ProcessRenderer/Window/InfoBlock.svelte";
  import InfoRow from "$state/Desktop/Components/ProcessRenderer/Window/InfoBlock/InfoRow.svelte";
  import Segment from "$state/Desktop/Components/ProcessRenderer/Window/InfoBlock/Row/Segment.svelte";
  import { Report } from "$types/bugrep";

  export let report: Report;
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Provided User Data">
      {report.userdata ? "Yes" : "No"}
    </Segment>
    <Segment title="Provided Server">
      {report.api ? "Yes" : "No"}
    </Segment>
    <Segment title="Report ID">
      <ApiReveal api={report.id} />
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Resolved">
      {report.resolved ? "Yes!" : "No..."}
    </Segment>
    <Segment title="Closed">
      {report.closed ? "Yes" : "No"}
    </Segment>
    <Segment title="Issue ID">
      {report.issueid}
    </Segment>
  </InfoRow>
</InfoBlock>
