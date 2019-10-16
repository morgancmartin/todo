<script>
 import InboxIcon from '../../icons/InboxIcon.svelte';
 import TodayIcon from '../../icons/TodayIcon.svelte';
 import NextIcon from '../../icons/NextIcon.svelte';
 import { views, selectedView } from '../../../stores.js';

 function isSelectedView(view) { return view === $selectedView; };
</script>

<style>
 p {
   font-size: 14px;
   color: #333;
 }

 button {
   min-height: 24px;
   padding: 5px 16px 5px 5px;
 }

 div {
   color: #555;
 }
</style>

<div class="container flex flex-col w-full">
  {#each $views as view (view.name)}
    <button class="flex w-full items-center"
            class:bg-white={view === $selectedView}
            on:click="{e => $selectedView = view}">
      {#if view.name === 'inbox'}
        <div>
          <InboxIcon />
        </div>
      {:else if view.name === 'today'}
        <div>
          <TodayIcon />
        </div>
      {:else if view.name === 'next-7-days'}
        <div>
          <NextIcon />
        </div>
      {/if}
      <p class="flex ml-2"
         class:font-bold={view === $selectedView}>
        {view.title}
      </p>
    </button>
  {/each}
</div>
