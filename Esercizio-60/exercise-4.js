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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO',
  },
  {
    id: 2,
    jobTitle: 'Project Manager',
  },
  {
    id: 3,
    jobTitle: 'Developer',
  },
];

const fetchPersonById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((person) => person.id === id);

      if (person) {
        return resolve(person);
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
};

const fetchJobById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = jobs.find((job) => job.id === id);

      if (person) {
        return resolve(person);
      }

      return reject(`Job with id: ${job} doesn't exist`);
    }, 1000);
  });
};

Promise.all([fetchPersonById(3), fetchJobById(1)])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
