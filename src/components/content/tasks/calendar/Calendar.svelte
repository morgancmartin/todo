<script>
 import { createEventDispatcher } from 'svelte';
 import TodayIcon from '../../../icons/TodayIcon.svelte';
 import TomorrowIcon from '../../../icons/TomorrowIcon.svelte';
 import NextWeekIcon from '../../../icons/NextWeekIcon.svelte';
 import LeftCaret from '../../../icons/LeftCaret.svelte';
 import RightCaret from '../../../icons/RightCaret.svelte';
 import { time, today, tomorrow } from '../../../../stores.js';
 import {
   startOfMonth,
   addDays,
   addMonths,
   getDaysInMonth,
   format,
   getDay,
   isSameWeek,
   isSameDay,
   isBefore
 } from 'date-fns';

 let dispatch = createEventDispatcher();

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
   var firstDay = days[0];
   for (var i = 0; i < firstDay.day; i++) {
     days.unshift({isSpacer: true});
   }
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

 function dayClass(day, time) {
   if (isSameDay(day.date, time)) {
     return  'cur-day font-bold';
   } else if (isBefore(day.date, time)) {
     return 'text-gray-400';
   } else if (day.day === 0 || day.day === 6) {
     return 's-day';
   }
 };

 function setDay(day) {
   dispatch("newDay", { day: day });
 };

 function setTime(time) {
   dispatch("newTime", { day: day });
 };

 function setCurMonth(month) {
   curMonth = `${month.abrv} ${month.year}`;
 };

 let dayAbbrvs = ["S", "M", "T", "W", "T", "F", "S"];

 let months = createMonths(60);
 var firstMonth = months[0];

 while (firstMonth.days[0].isSpacer || !isSameWeek(firstMonth.days[0].date, $time)) {
   firstMonth.days.shift();
 };

 let curMonth;

 let monthContainer = null;
 let monthEls = {};
 setCurMonth(firstMonth);

 function updateCurMonth() {
   Object.keys(monthEls).forEach(monthIndex => {
     let el = monthEls[monthIndex];
     let month = months[monthIndex];
     let containerY = monthContainer.getBoundingClientRect().y;
     let aboveCutoff = month.aboveCutoff;
     let elY = el.getBoundingClientRect().y;
     month.aboveCutoff = containerY > elY;
     if (month.aboveCutoff && !aboveCutoff) {
       setCurMonth(month);
     } else if (aboveCutoff && !month.aboveCutoff) {
       setCurMonth(months[monthIndex - 1]);
     }
   });
 };

</script>

<style>
 .month-container::-webkit-scrollbar {
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

 .control:hover {
   background: #EAE8E8;
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

 .add-time {
   font-size: 13px;
   color: #3d3d3d;
 }

 .quick-opt > div > p {
   font-size: 13px;
 }

 .cur-day {
   color: #d8422d;
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
      <p class="abbrv">Mon</p>
    </button>
  </div>
  <div class="border-t">
    <div class="flex flex-col">
      <div class="header flex flex-row justify-between">
        <div class="flex items-center">
          <p class="font-bold">{curMonth}</p>
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
        {#each dayAbbrvs as dayAbbrv}
          <div class="day-col w-1/7 text-center">{dayAbbrv}</div>
        {/each}
      </div>
    </div>
    <div bind:this={monthContainer}
         on:scroll={updateCurMonth}
         class="month-container flex flex-col w-full h-32 overflow-y-auto">
      {#each months as month, monthIndex}
        {#if monthIndex}
          <div bind:this={monthEls[monthIndex]}
               class="month-abbrv-container">
            <p class="month-abbrv text-left font-bold">{month.abrv}</p>
          </div>
        {/if}
        <div class="days flex flex-row w-full flex-wrap">
          {#each month.days as day}
            {#if day.isSpacer}
              <div class="w-1/7"></div>
            {:else}
              <button class="w-1/7 text-center"
                      on:click|stopPropagation={e => setDay(day)}>
                <p class="{dayClass(day, $time)}">{day.ofMonth}</p>
              </button>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="w-full flex justify-start p-2 border-t">
    <button class="add-time font-bold ml-2">
      <p>+ Add time</p>
    </button>
  </div>
</div>
