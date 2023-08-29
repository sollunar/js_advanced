"use strict";

const validBirthday = "2000-08-20";
const invalidBirthday = "2009-08-31";

function validateAge(dateString) {
  const birthday = new Date(dateString).getTime();
  const today = new Date().getTime();

  const ageInMillis = today - birthday;
  const fourteenYearsInMillis = 441797328000;

  return ageInMillis > fourteenYearsInMillis;
}

console.log(validateAge(validBirthday));
console.log(validateAge(invalidBirthday));
