<script>
 import { fade } from 'svelte/transition';
 import Checkmark from '../../icons/Checkmark.svelte';

 export let task;

 function enterCircle() { hoveringCircle = true; }
 function leaveCircle() { hoveringCircle = false; }

 let hoveringCircle;

</script>

<style>
 .container {
   border-bottom: 1px solid #f1f1f1;
 }

 .outline-circle {
   width: 18px;
   height: 18px;
   border-radius: 9px;
   border: 1px solid gray;
   transition-property: background;
   transition-duration: .3s;
   cursor: pointer;
 }

 .circle-hover {
   background: #EAE8E8;
 }

 .checkbox {
   opacity: 0;
   transition-property: opacity;
   transition-duration: .3s;
 }

 .checkbox-hover {
   opacity: 1;
 }

 p {
   font-size: 14px;
   line-height: 16px;
 }

</style>

<div class="container flex flex-row pt-2 pb-2 mb-1 items-center"
     out:fade|local={{duration: 200}}>
  <div class:circle-hover={hoveringCircle}
       class="flex flex-row items-center justify-center outline-circle"
       on:mouseenter={enterCircle}
       on:mouseleave={leaveCircle}
       on:click={task.complete}>
    <div class:checkbox-hover={hoveringCircle}
         class="checkbox">
      <Checkmark />
    </div>
  </div>
  <p class="ml-3 mt-1">
    {task.description}
  </p>
</div>
