
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('greeting_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('greeting_table').insert([
        {greeting: 'Welcome to your Dockerized Express/React full-stack app!'}
      ]);
    });
};
