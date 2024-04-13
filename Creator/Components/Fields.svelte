<script lang="ts">
  import { UserName } from "$ts/stores/user";
  import { CreatorRuntime } from "../ts/runtime";

  export let runtime: CreatorRuntime;

  const { IncludeUserData, IncludeApi, Body, Title } = runtime;
</script>

<div class="fields">
  <div class="field title">
    <p class="caption">Title</p>
    <div class="value">
      <!-- qkjx0pbf7x0fn6d, 13 apr 2024 -->
      <input type="text" placeholder="Short title to give us a summary" bind:value={$Title} />
    </div>
  </div>
  <div class="field include">
    <p class="caption">Include?</p>
    <div class="value">
      <div class="option">
        <span>Preferences</span>
        <input type="checkbox" bind:value={$IncludeUserData} disabled={!$UserName} />
      </div>
      <div class="option">
        <span>The Server</span>
        <input type="checkbox" bind:value={$IncludeApi} checked />
      </div>
    </div>
  </div>
  <textarea
    class="body"
    bind:value={$Body}
    placeholder="Report Body: Provide any particular information about the bug here."
  ></textarea>
  <div class="notice">
    Any information you provide in a bug report is treated as confidential and will never be shared
    to external parties. Select <b>Data Privacy</b> for more information.
  </div>
</div>
