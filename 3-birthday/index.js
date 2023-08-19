"use-strict";

const validBirthday = "2000-08-20";
const invalidBirthday = "2009-08-20";

function validateAge(dateString) {
  const birthday = new Date(dateString);
  const today = new Date();

  const yearsPassed = today.getFullYear() - birthday.getFullYear();

  const isBeforeBirthday =
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate());

  const age = isBeforeBirthday ? yearsPassed - 1 : yearsPassed;

  return age >= 14;
}

console.log(validateAge(validBirthday));
console.log(validateAge(invalidBirthday));
