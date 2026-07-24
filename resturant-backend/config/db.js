const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://ratulpolley450_db_user:kejNyEpYl3Orgt6q@ac-qzokxhb-shard-00-00.0lyakz0.mongodb.net:27017,ac-qzokxhb-shard-00-01.0lyakz0.mongodb.net:27017,ac-qzokxhb-shard-00-02.0lyakz0.mongodb.net:27017/?ssl=true&replicaSet=atlas-s24h6c-shard-0&authSource=admin&appName=Cluster0");

    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌");
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;