export function rollD6(die, sides) {
  let rolls = [];
  for (var i = 0; i < die; i++) {
    rolls.push(Math.floor((Math.random() * sides) + 1));
  }
  const sumArr = (accumulator, currentValue) => accumulator + currentValue;
  const total = rolls.reduce(sumArr);
  const result = {
    total: total,
    rolls: rolls
  }
  return result;
}

export function rollFudgeDice(num) {
  let rolls = [];
  for (var i = 0; i < num; i++) {
    rolls.push(Math.floor((Math.random() * 3) - 1));
  }
  const sumArr = (accumulator, currentValue) => accumulator + currentValue;
  const total = rolls.reduce(sumArr);
  const result = {
    total: total,
    rolls: rolls
  }
  return result;
}
