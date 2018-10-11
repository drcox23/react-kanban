exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([{
          title: 'UI Fix',
          details: "The UI needs a fixin",
          priority: "Low",
          status: "In Queue",
          createdBy: "Doug",
          assignedTo: "Bob"
        },
        {
          title: 'Database Update',
          details: "Database is old, an update is required",
          priority: "High",
          status: "In Progress",
          createdBy: "Doug",
          assignedTo: "Tiger"
        },
        {
          title: 'Wireframe - Home Page',
          details: "A homepage wireframe is required before dev can begin",
          priority: "Medium",
          status: "Done",
          createdBy: "Migos",
          assignedTo: "Drake"
        }
      ]);
    });
};