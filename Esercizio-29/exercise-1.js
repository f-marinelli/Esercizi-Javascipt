function adultFilter(persons) {
  const buf = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) buf.push(persons[i]);
  }
  return buf;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 },
];

const adults = adultFilter(persons);

// const adults = persons.filter((el) => el.age >= 18);

console.log(persons);
console.log(adults);
