exports.up = function (knex) {
    return knex.schema.createTable('tenants', function (table) {
      table.increments('id').primary();
      table.string('tenant_name', 255).notNullable();
      table.json('address');
      table.string('city', 255);
      table.string('state', 255);
      table.string('country', 255);
      table.string('zip_code', 255);
      table.string('phone', 255);
      table.string('web_url', 255);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tenants');
  };