const { Model } = require('objection');

class Tenant extends Model {
  static get tableName() {
    return 'tenants';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['tenant_id','tenant_name','phone'],

      properties: {
        id: { type: 'integer' },
        tenant_name: { type: 'string', maxLength: 255 },
        address: { type: 'object' },
        city: { type: 'string', maxLength: 255 },
        state: { type: 'string', maxLength: 255 },
        country: { type: 'string', maxLength: 255 },
        zip_code: { type: 'string', maxLength: 255 },
        phone: { type: 'string', maxLength: 255 },
        web_url: { type: 'string', maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    const User = require('./User');

    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'tenants.id',
          to: 'users.tenant_id',
        },
      },
    };
  }

}

module.exports = Tenant;
