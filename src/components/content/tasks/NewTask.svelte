<script>
 import Plus from '../../icons/Plus.svelte';
 import Calendar from './calendar/Calendar.svelte';
 import { tasks } from '../../../stores.js';

 function toggle() { isOpen = !isOpen; }
 function openCalendar() { calendarIsOpen = true; }

 function handleNewDay(event) {
   let day = event.detail.day;
   let month = event.detail.month;
   calendarIsOpen = false;
   console.log("got new day!", day, calendarIsOpen);
   calVal = `${month.abrv} ${day.ofMonth}`;
 };

 function handleNewTime(event) {
   let time = event.detail.time;
   console.log("got new time!", time);
 };

 function addTask() {
   tasks.addTask({description: taskDescription});
   taskDescription = "";
 };

 let hovering;

 /* let isOpen = false; */
 let isOpen = true;
 let calendarIsOpen = false;
 /* let calendarIsOpen = true; */

 let calVal;

 let taskDescription;

</script>

<style>
 p, input {
   font-size: 14px;
 }

 .input-box {
   border: 1px solid #ddd;
   border-radius: 3px;
 }

 .border-l {
   border-left: 1px solid #ddd;
 }

 .add-task {
   padding: 6px 12px 7px 12px;
   background-color: #3d3d3d;
   font-size: 13px;
   border-radius: 3px;
 }

 .cancel {
   font-size: 13px;
   color: #555;
 }

 .left-0 {
   top: -1px;
 }
</style>

{#if !isOpen}
  <button class="flex flex-row items-center cursor-pointer"
          on:click={toggle}
          on:mouseenter={e => hovering = true }
          on:mouseleave={e => hovering = false }>
    <div class="flex rounded-full h-4 w-4 items-center justify-center "
         class:bg-gray-800={hovering}
         class:text-white={hovering}>
      <Plus class="ml-6" />
    </div>
    <p class="ml-4 mt-1"
       class:text-gray-700={!hovering}>
      Add Task
    </p>
  </button>
{:else if isOpen}
  <div class="flex flex-col w-full">
    <div class="flex flex-row input-box">
      <input
        bind:value={taskDescription}
        class="w-9/12 p-2"
        type="text"
        placeholder="e.g. Buy gift tomorrow at 6pm p1 #Errands">
      <button class="w-3/12 flex items-center border-l relative"
              on:click={openCalendar}>
        <input bind:value={calVal}
               type="text"
               class="ml-2 w-full placeholder-gray-600"
               placeholder="Schedule">
        {#if calendarIsOpen}
          <div class="absolute left-0">
            <Calendar on:newDay={handleNewDay}
                      on:newTime={handleNewTime} />
          </div>
        {/if}
      </button>
    </div>
    <div class="flex flex-row w-full pt-2">
      <button class="add-task text-white font-bold"
              on:click={addTask}>
        Add Task
      </button>
      <button class="cancel ml-2" on:click={toggle}>
        Cancel
      </button>
    </div>
  </div>
{/if}

