
exports.up = function(knex) {
    return knex.schema.createTable('greeting_table', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('greeting');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('greeting_table');
  };