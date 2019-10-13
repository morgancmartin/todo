<script>
 import Plus from '../../icons/Plus.svelte';

 let hovering;

 let plusHoverClasses = 'bg-gray-800 text-white';

 /* let isOpen = false; */
 let isOpen = true;

 function toggle() { isOpen = !isOpen; }
</script>

<style>
 p, input {
   font-size: 14px;
 }

 .input-box {
   border: 1px solid #ddd;
   border-radius: 3px;
 }

 .border-l {
   border-left: 1px solid #ddd;
 }

 .add-task {
   padding: 6px 12px 7px 12px;
   background-color: #3d3d3d;
   font-size: 13px;
   border-radius: 3px;
 }

 .cancel {
   font-size: 13px;
   color: #555;
 }
</style>

{#if !isOpen}
<button class="flex flex-row items-center cursor-pointer"
        on:click={toggle}
        on:mouseenter={e => hovering = true }
        on:mouseleave={e => hovering = false }>
  <div class="flex rounded-full h-4 w-4 items-center justify-center {hovering ? plusHoverClasses : ''} ">
    <Plus class="ml-6" />
  </div>
  <p class="ml-4 mt-1 {hovering ? '' : 'text-gray-700'}">
    Add Task
  </p>
</button>
{:else if isOpen}
<div class="flex flex-col w-full">
  <div class="flex flex-row input-box">
    <input
      class="w-9/12 p-2"
      type="text"
      placeholder="e.g. Buy gift tomorrow at 6pm p1 #Errands">
    <button class="w-3/12 flex items-center text-gray-600 border-l">
      <p class="ml-2">Schedule</p>
    </button>
  </div>
  <div class="flex flex-row w-full pt-2">
    <button class="add-task text-white font-bold">
      Add Task
    </button>
    <button class="cancel ml-2" on:click={toggle}>
      Cancel
    </button>
  </div>
</div>
{/if}
