<script>
 import TodayIcon from '../../../icons/TodayIcon.svelte';
 import TomorrowIcon from '../../../icons/TomorrowIcon.svelte';
 import NextWeekIcon from '../../../icons/NextWeekIcon.svelte';
 import LeftCaret from '../../../icons/LeftCaret.svelte';
 import RightCaret from '../../../icons/RightCaret.svelte';
 import { time, today, tomorrow, dayAfterTomorrow } from '../../../../stores.js';
 import { startOfMonth, addDays, addMonths, getDaysInMonth, format, getDay } from 'date-fns';

 function createDays(month) {
   var days = [];
   for (var i = 0; i < month.numDays; i++) {
     var date = addDays(month.date, i);
     days.push({
       ofMonth: i + 1,
       date: date,
       day: getDay(date)
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

 let months = createMonths(60);

</script>

<style>
 .month::-webkit-scrollbar {
   display: none;
 }

 .border {
   border: 1px solid #ddd;
 }

 input, p {
   font-size: 14px;
 }

 .quick-opt {
   padding: 4px 10px;
   line-height: 24px;
 }

 .abbrv {
   color: gray;
   font-size: 13px;
 }

 .icon {
   color: gray;
   margin-right: 10px;
 }

 .day-col {
   font-size: 10px;
   line-height: 24px;
   color: gray;
 }

 .header {
   font-size: 13px;
   padding: 4px 10px 0px 16px;
 }

 .month-abbrv-container {
   padding: 4px 10px 0px 16px;
 }

 .month-abbrv {
   border-bottom: 1px solid #ddd;
   font-size: 12px;
 }

 .control {
   width: 26px;
   height: 26px;
   color: gray;
 }

 .outline-circle {
   width: 8px;
   height: 8px;
   border-radius: 4px;
   border: 1px solid gray;
   margin: 8px auto;
 }

 .day-cols, .days {
   padding: 4px 10px 0px 12px;
 }

 .s-day {
   color: gray;
 }

</style>

<div class="border w-56 bg-white">
  <div class="w-full border-b">
    <input type="text"
           placeholder="Type a due date"
           class="w-full p-2">
  </div>
  <div class="w-full">
    <button class="quick-opt flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <div class="icon"><TodayIcon /></div>
        <p>Today</p>
      </div>
      <p class="abbrv">{$today}</p>
    </button>
    <button class="quick-opt flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <div class="icon"><TomorrowIcon /></div>
        <p>Tomorrow</p>
      </div>
      <p class="abbrv">{$tomorrow}</p>
    </button>
    <button class="quick-opt flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <div class="icon"><NextWeekIcon /></div>
        <p>Next week</p>
      </div>
      <p class="abbrv">{$dayAfterTomorrow}</p>
    </button>
  </div>
  <div class="border-t">
    <div class="flex flex-col">
      <div class="header flex flex-row justify-between">
        <div class="flex items-center">
          <p class="font-bold">Oct 2019</p>
        </div>
        <div class="controls">
          <button class="control"><LeftCaret /></button>
          <button class="control">
            <div class="outline-circle"></div>
          </button>
          <button class="control"><RightCaret /></button>
        </div>
      </div>
      <div class="day-cols flex flex-row w-full">
        <div class="day-col w-1/7 text-center">S</div>
        <div class="day-col w-1/7 text-center">M</div>
        <div class="day-col w-1/7 text-center">T</div>
        <div class="day-col w-1/7 text-center">W</div>
        <div class="day-col w-1/7 text-center">T</div>
        <div class="day-col w-1/7 text-center">F</div>
        <div class="day-col w-1/7 text-center">S</div>
      </div>
    </div>
    <div class="month flex flex-col w-full h-32 overflow-y-auto">
      {#each months as month}
        <div class="month-abbrv-container">
          <p class="month-abbrv text-left font-bold">{month.abrv}</p>
        </div>
        <div class="days flex flex-row w-full flex-wrap">
          {#each month.days as day}
            <button class="w-1/7 text-center">
              <p class="{day.day === 0 || day.day === 6 ? 's-day' : ''}">{day.ofMonth}</p>
            </button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="w-full border-t">
    <p>+ Add time</p>
  </div>
</div>
