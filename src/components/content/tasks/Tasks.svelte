<script>
 import { selectedView } from '../../../stores.js';

 console.log("selected: ", $selectedView);
</script>

<div class="flex w-2/3 h-full">
  <p>{$selectedView.title}</p>
</div>
