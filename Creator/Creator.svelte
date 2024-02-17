<script lang="ts">
  import Fields from "./Components/Fields.svelte";
  import Toolbar from "./Components/Toolbar.svelte";
  import { CreatorRuntime } from "./ts/runtime";
  import "./css/main.css";

  export let runtime: CreatorRuntime;
</script>

<Fields {runtime} />
<Toolbar {runtime} />
