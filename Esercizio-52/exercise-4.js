const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filter = Object.entries(person)
  .filter((entry) => typeof entry[1] === 'number')
  .map((el) => el[0]);

const json = JSON.stringify(person, filter);

console.log(json); // Should return: { id: 1, age: 25 }
