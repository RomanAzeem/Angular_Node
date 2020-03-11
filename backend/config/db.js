const mongoose = require('mongoose');
const config = require('/config');
const db = config.get('mongoAltasURI');

const connectDB = async () => {
  try {
    console.log(db);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...'+db);
  } catch (err) {
    console.error(err.message);
    //Exit Process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;
