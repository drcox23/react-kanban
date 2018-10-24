exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([knex('tasks').del()
    .then(() => {
      return knex('users').del()
    })
    .then(() => {
      return knex('boards').del()
    })
    .then(() => {
      return knex('users').insert([{
          name: "Bob Marley"
        },
        {
          name: "Elvis Pressley"
        },
        {
          name: "Russel Wilson"
        },
        {
          name: "Mookie Betts"
        },
        {
          name: "Doug"
        }
      ])
    })
    .then(() => {
      // Inserts seed entries
      return knex('tasks').insert([{
          title: 'UI Fix',
          details: "The UI needs a fixin",
          priority: "Low",
          status: "In Queue",
          createdBy_UserID: 2,
          assignedTo_UserID: 4
        },
        {
          title: 'Database Update',
          details: "Database is old, an update is required",
          priority: "High",
          status: "In Progress",
          createdBy_UserID: 1,
          assignedTo_UserID: 5
        },
        {
          title: 'Wireframe - Home Page',
          details: "A homepage wireframe is required before dev can begin",
          priority: "Medium",
          status: "Done",
          createdBy_UserID: 3,
          assignedTo_UserID: 3
        }
      ]);
    })
    .then(() => {
      return knex('boards').insert([{
          title: "In Queue"
        },
        {
          title: "In Progress"
        },
        {
          title: "Done"
        }
      ])
    })
  ]);
};