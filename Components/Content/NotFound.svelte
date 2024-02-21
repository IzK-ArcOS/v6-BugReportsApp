<script lang="ts">
  import { ErrorIcon } from "$ts/images/dialog";

  export let id: string;
</script>

<div class="not-found">
  <img src={ErrorIcon} alt="" />
  <h1>Not Found</h1>
  <p>Report <code>{id}</code> does not exist on the Reports server!</p>
</div>
