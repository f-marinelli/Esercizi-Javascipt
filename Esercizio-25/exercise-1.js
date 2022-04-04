const person = {
  get firstName() {
    return this.nome;
  },

  set firstName(firstName) {
    return (this.nome = firstName);
  },

  get lastName() {
    return this.cognome;
  },

  set lastName(lastName) {
    return (this.cognome = lastName);
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = { ...person };
john.firstName = 'John';
john.lastName = 'Doe';

const simon = { ...person };
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
