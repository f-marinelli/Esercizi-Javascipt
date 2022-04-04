function sumUntil(maxValue) {
  let output = '';
  let sum = 0;

  for (let counter = 1; counter <= maxValue; counter++) {
    sum += counter;
    output += `${counter}`;
    if (counter === maxValue) break;
    output += ' + ';
  }

  output += ` = ${sum}`;

  return output;
}

console.log(sumUntil(5));
