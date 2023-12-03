exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('department', 255);
      table.string('designation', 255);
      table.integer('tenant_id').unsigned().references('tenants.id').onDelete('CASCADE');
      table.string('image_url', 255);
      table.string('city', 255);
      table.string('country', 255);
      table.string('bio', 255);
      table.json('social_links');
      table.integer('employee_id');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
  };
