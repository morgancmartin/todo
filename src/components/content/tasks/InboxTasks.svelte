<script>
 import TaskList from './TaskList.svelte';
 import Calendar from './calendar/Calendar.svelte';
 import { inboxTasks } from '../../../stores.js';
</script>

<TaskList tasks={$inboxTasks} />
