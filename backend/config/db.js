const mongoose = require('mongoose');

const mongoAltasURI ="mongodb+srv://test123:test123@devconnector-8a5we.mongodb.net/node-angular?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    console.log(mongoAltasURI);
    await mongoose.connect(mongoAltasURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...'+mongoAltasURI);
  } catch (err) {
    console.error(err.message);
    //Exit Process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;
