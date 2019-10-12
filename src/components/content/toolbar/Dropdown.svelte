<script>
 import { slide } from 'svelte/transition';
 import { quintOut } from 'svelte/easing';
 import Plus from '../../icons/Plus.svelte';

 export let title = "";
 export let count = 0;

 let isOpen = false;

 function open() { isOpen = !isOpen; };
</script>

<style>
 .chevron {
   transform: rotate(-90deg);
   transition-property: transform;
   transition-duration: .2s;
 }

 .chevron.open {
   transform: rotate(0deg);
 }
</style>

<div class="flex flex-col w-full">
  <header class="flex w-4/5 justify-between">
    <button
      type="button"
      class="flex w-4/5"
      on:click={open}>
      <div
        class="h-full w-1/5 self-center">
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          class="chevron {isOpen ? 'open' : ''}">
          <g
            transform="translate(-266, -17)"
            fill="#777777">
            <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545
                     L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727
                     C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909
                     274.0144,27.9809091 280,22.7581818" />
          </g>
        </svg>
      </div>
      <p class="w-4/5 text-left">
        {title}
      </p>
    </button>
    <aside class="flex w-1/5 items-center content-center">
      <Plus />
    </aside>
  </header>

  {#if isOpen && count}
  <ul
    class="w-4/5"
    transition:slide="{{duration: 80}}">
    <slot></slot>
  </ul>
  {:else if isOpen}
  <p transition:slide="{{duration: 80}}">
    Your list of {title} will appear here
  </p>
  {/if}
</div>
