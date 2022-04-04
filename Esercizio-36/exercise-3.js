class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj) {
    return new this(...Object.values(obj));
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi',
};

const person = Person.fromObject(obj);
console.log(person instanceof Person);
console.log(`${person.firstName} ${person.lastName}`);
