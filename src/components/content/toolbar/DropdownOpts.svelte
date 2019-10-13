<script>
  import Dropdown from './Dropdown.svelte'
  import { projects, labels, filters } from '../../../stores.js'
</script>

<style>
 p {
   font-size: 14px;
   color: #333;
 }
</style>

<div class="flex flex-col w-full h-24">
  <Dropdown title={'Projects'} count={$projects.length}>
    {#each $projects as project (project.name)}
    <li class="w-4/5">
      <button class="h-8 flex flex-row items-center w-full content-start">
        <div class="h-4 w-4 flex items-center justify-center">
          <div class="rounded-full h-2 w-2 flex bg-{project.color}-500"></div>
        </div>
        <p class="ml-3 text-left">{project.name}</p>
      </button>
    </li>
    {/each}
  </Dropdown>
  <Dropdown title={'Labels'} count={$labels.length}>
    {#each $labels as label (label.name)}
    <li class="w-4/5">
      <button class="h-8 flex flex-row items-center w-full content-start">
        <div class="h-4 w-4 flex items-center justify-center">
          <div class="rounded-full h-2 w-2 flex bg-{label.color}-500"></div>
        </div>
        <p class="ml-3">{label.name}</p>
      </button>
    </li>
    {/each}
  </Dropdown>
  <Dropdown title={'Filters'} count={$filters.length}>
    {#each $filters as filter (filter.name)}
    <li class="w-4/5">
      <button class="h-8 flex flex-row items-center w-full content-start">
        <div class="h-4 w-4 flex items-center justify-center">
          <div class="rounded-full h-2 w-2 flex bg-{filter.color}-500"></div>
        </div>
        <p class="ml-3">{filter.name}</p>
      </button>
    </li>
    {/each}
  </Dropdown>
</div>
