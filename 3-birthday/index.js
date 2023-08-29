"use strict";

const validBirthday = "2000-08-20";
const invalidBirthday = "2009-08-30";

function validateAge(dateString, ageRestriction) {
  const birthday = new Date(dateString);
  const today = new Date();

  const ageLimit = new Date();
  ageLimit.setFullYear(today.getFullYear() - ageRestriction);

  return birthday <= ageLimit;
}

console.log(validateAge(validBirthday, 14));
console.log(validateAge(invalidBirthday, 14));
