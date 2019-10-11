import { writable } from 'svelte/store';
import moment from 'moment';

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(0)
  };
}
// export const count = createCount(0);

function createReadable(init) {
  const { subscribe, set, update } = writable(init);

  return {
    subscribe,
  };
};

function createWritable(init) {
  const { subscribe, set, update } = writable(init);

  return {
    subscribe,
    set,
    update
  };
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

export const tasks = createReadable([
  {description: "Order contacts", date: moment().format() }
]);
