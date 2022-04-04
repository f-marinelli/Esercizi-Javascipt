const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const { id } = person;

const personInfo = {
  id,
  ...person,
};

console.log(id, personInfo);
