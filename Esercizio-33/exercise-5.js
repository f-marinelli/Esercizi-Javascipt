function firstUncompletedNote(notes) {
  let uncNote;

  notes.forEach((note) =>
    note.todos.forEach((todo) => {
      if (Object.values(todo).includes(false) && !uncNote) uncNote = note;
    })
  );

  //  Soluzione 2
  // while (!uncNote) {
  //   for (let j = 0; j < notes.length; j++) {
  //     for (let i = 0; i < notes[j].todos.length; i++) {
  //       if (notes[j].todos[i].done === false) {
  //         uncNote = notes[j];
  //         break;
  //       }
  //     }
  //     if (uncNote) break;
  //   }
  // }

  return uncNote;
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true,
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true,
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true,
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false,
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true,
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false,
      },
    ],
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true,
      },
      {
        id: 2,
        name: 'Avatar',
        done: true,
      },
      {
        id: 3,
        name: 'Titanic',
        done: false,
      },
    ],
  },
];

const noteInProgress = firstUncompletedNote(notes);
// console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);
