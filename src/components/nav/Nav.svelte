<script>
 import TodoistIcon from '../icons/TodoistIcon.svelte';

 export let menuItems = [];
</script>

<style>
 nav {
   padding: 0.6rem;
 }
</style>

<nav class="flex items-center justify-center flex-wrap bg-primaryGrey">
  <div class="w-7/12">
    <div class="flex items-center flex-shrink-0 text-white ml-1">
      <button>
        <TodoistIcon />
      </button>
    </div>
  </div>
</nav>
