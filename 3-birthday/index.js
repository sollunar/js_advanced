"use strict";

const validBirthday = "2000-08-20";
const invalidBirthday = "2009-08-31";

function isOverFourteen(dateString) {
  const birthday = new Date(dateString);
  const today = new Date();

  const fourteenYears = new Date(
    today.getFullYear() - 14,
    today.getMonth(),
    today.getDate(),
    today.getHours(),
    today.getMinutes()
  );

  return birthday.getTime() <= fourteenYears.getTime();
}

console.log(isOverFourteen(validBirthday));
console.log(isOverFourteen(invalidBirthday));
