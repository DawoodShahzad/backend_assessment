const { User } = require('../db/models');
const { Tenant } = require('../db/models');

const processMessage = async (kafkaMessage) => {

	//Start working here
	console.log(kafkaMessage);

	// Example: Insert message data into User table
	const { dataType, data } = parsedMessage;
	if (dataType === 'user') {
	  try {
		await User.query().insert(data);
	  } catch (error) {
		console.error('Error inserting data into User table:', error);
	  }
	} else if (dataType === 'tenant') {
	  try {
		await Tenant.query().insert(data);
	  } catch (error) {
		console.error('Error inserting data into Tenant table:', error);
	  }
	}
  }

module.exports = { processMessage };

