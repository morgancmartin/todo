<script>
 import NewTask from './NewTask.svelte';
 import Task from './Task.svelte';
 import { tasks } from '../../../stores.js';
</script>

<style>
 p {
   color: #202020;
 }
</style>

<div>
  {#each $tasks as task (task.id)}
    <Task task={task} />
  {/each}
  <NewTask />
</div>
