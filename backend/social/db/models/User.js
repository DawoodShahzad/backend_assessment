const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'first_name', 'last_name', 'tenant_id', 'department','employee_id'],

      properties: {
        user_id: { type: 'integer' },
        first_name: { type: 'string', maxLength: 255 },
        last_name: { type: 'string', maxLength: 255 },
        department: { type: 'string', maxLength: 255 },
        designation: { type: 'string', maxLength: 255 },
        tenant_id: { type: 'integer' },
        image_url: { type: 'string', maxLength: 255 },
        city: { type: 'string', maxLength: 255 },
        country: { type: 'string', maxLength: 255 },
        bio: { type: 'string', maxLength: 255 },
        social_links: { type: 'object' },
        employee_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    const Tenant = require('./Tenant');

    return {
      tenant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Tenant,
        join: {
          from: 'users.tenant_id',
          to: 'tenants.id',
        },
      },
    };
  }

}

module.exports = User;
