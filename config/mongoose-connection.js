const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to DB");
} catch(err){
    console.log(err.message);
    process.exit(1); //we use process.exit to stop the further program if there is any issue.
  }
}

module.exports = connectDb;