"use-strict";

const arr = [
  { id: 1, name: "Basil" },
  { id: 2, name: "Peter" },
  { id: 1, name: "Basil" },
  { id: 1, name: "John" },
  { id: 3, name: "Thomas" },
];

const deduplicatedArr = [];
const set = new Set();
for (const obj of arr) {
  const valuesArr = Object.values(obj);
  if (!set.has(valuesArr[0])) {
    set.add(valuesArr[0]);
    deduplicatedArr.push(obj);
  }
}

console.log(deduplicatedArr);
