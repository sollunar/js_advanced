"use-strict";

const DICE_TYPES = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d16: 16,
  d20: 20,
  d21: "dsfsd",
};

function throwDice(diceType) {
  const dice = DICE_TYPES[diceType];

  if (!dice) {
    throw new Error(
      `ArgumentError: Invalid dice type\nAvaliable dice types: ${Object.keys(
        DICE_TYPES
      ).join(",")}`
    );
  }

  if (isNaN(parseInt(dice))) {
    throw new Error(
      `ArgumentError: Function only accepts numbers\nReceived: ${typeof diceType}`
    );
  }

  return Math.floor(Math.random() * dice + 1);
}

console.log(throwDice("d20"));
console.log(throwDice("bla-blah"));
console.log(throwDice(100));
