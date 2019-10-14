import { readable, writable, derived } from 'svelte/store';
import { getDaysInMonth, getDay, format, addDays, addMonths } from 'date-fns';

function createReadable(init) {
  const { subscribe, set, update } = readable(init);

  return {
    subscribe,
  };
};

function createWritable(init, methods) {
  const { subscribe, set, update } = writable(init);

  return Object.assign({
    subscribe,
    set,
    update
  }, (methods || {}));
};

let viewsVal = [
  {name: "inbox", title: "Inbox"},
  {name: "today", title: "Today"},
  {name: "next-7-days", title: "Next 7 days"}
];

export const views = createReadable(viewsVal);

export const selectedView = createWritable(viewsVal[0]);

export const projects = createReadable([
  {name: "Personal", color: "orange"},
  {name: "Work", color: "blue"},
  {name: "Errands", color: "green"},
  {name: "Shopping", color: "gray"},
  {name: "Movies to watch", color: "pink"}
]);

export const labels = createReadable([]);

export const filters = createReadable([
  {name: "Assigned to me", color: "gray"},
  {name: "Assigned to others", color: "gray"},
  {name: "Priority 1", color: "blue"},
  {name: "Priority 2", color: "blue"},
  {name: "Priority 3", color: "blue"},
  {name: "Priority 4", color: "blue"},
  {name: "View all", color: "blue"},
  {name: "No due date", color: "blue"}
]);

export const tasks = createWritable([
  { description: "Order contacts", date: null, id: 0 }
], {
});

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const today = derived(time, $time => format($time, "E"));
export const tomorrow = derived(time, $time => format(addDays($time, 1), "E"));
