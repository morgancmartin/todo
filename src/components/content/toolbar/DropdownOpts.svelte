<script>
  import Dropdown from './Dropdown.svelte'
  import { projects, labels, filters } from '../../../stores.js'
</script>

<div class="flex flex-col w-full h-24">
  <Dropdown title={'Projects'} count={$projects.length}>
    {#each $projects as project (project.name)}
    <li class="w-4/5">
      <button class="flex flex-row items-center w-full content-start">
        <div class="w-1/5">
          <div class="rounded-full h-2 w-2 flex bg-{project.color}-500 ml-1"></div>
        </div>
        <p class="w-4/5 text-left">{project.name}</p>
      </button>
    </li>
    {/each}
  </Dropdown>
  <Dropdown title={'Labels'} count={$labels.length}>
    {#each $labels as label (label.name)}
    <li class="w-4/5">
      <button class="flex flex-row items-center w-full content-start">
        <div class="w-1/5">
          <div class="rounded-full h-2 w-2 flex bg-{label.color}-500 ml-1"></div>
        </div>
        <p class="w-4/5 ">{label.name}</p>
      </button>
    </li>
    {/each}
  </Dropdown>
  <Dropdown title={'Filters'} count={$filters.length}>
    {#each $filters as filter (filter.name)}
    <li class="w-4/5">
      <button class="flex flex-row items-center w-full content-start">
        <div class="w-1/5">
          <div class="rounded-full h-2 w-2 flex bg-{filter.color}-500 ml-1"></div>
        </div>
        <p class="w-4/5 ">{filter.name}</p>
      </button>
    </li>
    {/each}
  </Dropdown>
</div>
