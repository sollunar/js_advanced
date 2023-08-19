const diceTypes = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d16: 16,
  d20: 20,
};

function throwDice(diceType) {
  return Math.floor(Math.random() * diceType + 1);
}

console.log(throwDice(diceTypes.d20));


