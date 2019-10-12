<script>
 import InboxIcon from '../../icons/InboxIcon.svelte';
 import TodayIcon from '../../icons/TodayIcon.svelte';
 import NextIcon from '../../icons/NextIcon.svelte';
 import { views, selectedView } from '../../../stores.js';

 function isSelectedView(view) { return view === $selectedView; };
</script>

<div class="flex flex-col w-full h-24">
  {#each $views as view (view.name)}
  <button class="flex h-1/3 w-full {view === $selectedView ? 'bg-white' : ''}"
          on:click="{e => $selectedView = view}">
    {#if view.name === 'inbox'}
    <InboxIcon />
    {:else if view.name === 'today'}
    <TodayIcon />
    {:else if view.name === 'next-7-days'}
    <NextIcon />
    {/if}
    <p class="flex {view === $selectedView ? 'font-bold' : ''}">
      {view.title}
    </p>
  </button>
  {/each}
</div>
