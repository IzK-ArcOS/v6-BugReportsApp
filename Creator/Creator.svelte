<script lang="ts">
  import Fields from "./Components/Fields.svelte";
  import Toolbar from "./Components/Toolbar.svelte";
  import "./css/main.css";
  import { CreatorRuntime } from "./ts/runtime";

  export let runtime: CreatorRuntime;
</script>

<Fields {runtime} />
<Toolbar {runtime} />
