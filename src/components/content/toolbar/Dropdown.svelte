<script>
 import { slide } from 'svelte/transition';
 import { quintOut } from 'svelte/easing';
 import Plus from '../../icons/Plus.svelte';
 import RightCaret from '../../icons/RightCaret.svelte';

 export let title = "";
 export let count = 0;

 let isOpen = false;

 function open() { isOpen = !isOpen; };
</script>

<style>
 .dropdown {
   padding: 5px 16px 5px 5px;
 }

 .chevron {
   transform: rotate(0deg);
   transition-property: transform;
   transition-duration: .4s;
 }

 .chevron.open {
   transform: rotate(90deg);
 }

 p {
   font-size: 14px;
   color: #333;
 }

 header {
   border-bottom: 1px solid #f1f1f1;
 }
</style>

<div class="dropdown flex flex-col w-full">
  <header class="flex justify-between">
    <button
      type="button"
      class="flex w-4/5"
      on:click={open}>
      <div
        class="h-full self-center chevron {isOpen ? 'open' : ''}">
        <RightCaret />
      </div>
      <p class="ml-2 text-left font-bold">
        {title}
      </p>
    </button>
    <aside class="flex w-1/5 items-center content-center">
      <button>
        <Plus />
      </button>
    </aside>
  </header>

  {#if isOpen && count}
  <ul
    class="pl-1 mt-4 w-4/5"
    transition:slide="{{duration: 400}}">
    <slot></slot>
  </ul>
  {:else if isOpen}
  <p transition:slide="{{duration: 400}}">
    Your list of {title} will appear here
  </p>
  {/if}
</div>
