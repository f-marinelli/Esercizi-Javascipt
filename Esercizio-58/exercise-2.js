const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32,
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const person = persons.find((person) => person.id === id);
      if (person) resolve(person);
      if (!person) reject(new Error('id mancante'));
    }, 1000);
  });
}

fetchPersonById(2).then((person) => console.log(person));
fetchPersonById(5).then((person) => console.log(person));
