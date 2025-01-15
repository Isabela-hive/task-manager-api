const mongoose = require('mongoose');
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      'Db is connected:',
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error('MongoDb connection error', err);
    process.exit(1);
  }
};
module.exports = connectDb;
