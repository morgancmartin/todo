<script>
 import { selectedView } from '../../../stores.js';
 import InboxTasks from './InboxTasks.svelte';
 import TodayTasks from './TodayTasks.svelte';
 import NextTasks from './NextTasks.svelte';
</script>

<div class="flex flex-col w-7/12 h-full bg-white pt-8">
  <h2 class="inline text-xl font-bold ml-1">
    {$selectedView.title}
  </h2>
  {#if $selectedView.name === 'inbox'}
  <InboxTasks />
  {:else if $selectedView.name === 'today'}
  <TodayTasks />
  {:else if $selectedView.name === 'next-7-days'}
  <NextTasks />
  {/if}
</div>
