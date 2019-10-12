<script>
 import Plus from '../../icons/Plus.svelte';

 let hovering;

 let plusHoverClasses = 'bg-gray-800 text-white';
</script>
<div class="flex flex-row items-center cursor-pointer"
     on:mouseenter={e => hovering = true }
     on:mouseleave={e => hovering = false }>
  <div class="flex rounded-full h-4 w-4 items-center justify-center {hovering ? plusHoverClasses : ''} ">
    <Plus class="ml-6" />
  </div>
  <p class="ml-4 {hovering ? '' : 'text-gray-700'}">Add Task</p>
</div>
