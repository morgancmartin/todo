<script>
 import TodayIcon from '../../../icons/TodayIcon.svelte';
 import TomorrowIcon from '../../../icons/TomorrowIcon.svelte';
 import NextWeekIcon from '../../../icons/NextWeekIcon.svelte';
 import LeftCaret from '../../../icons/LeftCaret.svelte';
 import RightCaret from '../../../icons/RightCaret.svelte';
 import { time, today, tomorrow, dayAfterTomorrow } from '../../../../stores.js';
 import { startOfMonth, addDays, addMonths, getDaysInMonth, format } from 'date-fns';

 function createDays(month) {
   var days = [];
   for (var i = 0; i < month.numDays; i++) {
     days.push({
       ofMonth: i + 1,
       date: addDays(month.date, i)
     });
   };
   return days;
 };

 function createMonths(total) {
   var months = [];
   var start = startOfMonth($time);
   for (var i = 0; i < total; i++) {
     var date = addMonths(start, i);
     var month = {
       date: date,
       numDays: getDaysInMonth(date),
       abrv: format(date, "MMM"),
       year: format(date, "yyy"),
     };
     month.days = createDays(month);
     months.push(month);
   };
   return months;
 };

 let borderColor = 'border-gray-600';
 let months = createMonths(60);

</script>

<style>
 .month::-webkit-scrollbar {
   display: none;
 }
</style>

<div class="border {borderColor} w-64">
  <div class="w-full">
    <input type="text" placeholder="Type a due date">
  </div>
  <div class="w-full">
    <button class="flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <TodayIcon />
        <p>Today</p>
      </div>
      <p>{$today}</p>
    </button>
    <button class="flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <TomorrowIcon />
        <p>Tomorrow</p>
      </div>
      <p>{$tomorrow}</p>
    </button>
    <button class="flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <NextWeekIcon />
        <p>Next week</p>
      </div>
      <p>{$dayAfterTomorrow}</p>
    </button>
  </div>
  <div class="border-t {borderColor}">
    <div class="flex flex-col">
      <div class="flex flex-row">
        <p class="font-bold">Oct 2019</p>
        <button><LeftCaret /></button>
        <button><RightCaret /></button>
      </div>
      <div class="flex flex-row w-full">
        <div class="w-1/7 text-center">S</div>
        <div class="w-1/7 text-center">M</div>
        <div class="w-1/7 text-center">T</div>
        <div class="w-1/7 text-center">W</div>
        <div class="w-1/7 text-center">T</div>
        <div class="w-1/7 text-center">F</div>
        <div class="w-1/7 text-center">S</div>
      </div>
    </div>
    <div class="month flex flex-col w-full h-32 overflow-y-auto">
      {#each months as month}
        <p class="font-bold">{month.abrv}</p>
        <div class="flex flex-row w-full flex-wrap">
          {#each month.days as day}
            <button class="w-1/7 text-center">
              <p class="">{day.ofMonth}</p>
            </button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="w-full border-t {borderColor}">
    <p>+ Add time</p>
  </div>
</div>
