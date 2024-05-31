import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`Mongo Connected host ${connectionDB.connection.host}, ${connectionDB.connection.port},${connectionDB.connection.name},${connectionDB.connection.readyState} Successfully`);
  } catch (err) {
    console.log(`MONGODB CONNECTION ERROR`,err);
    process.exit(1);
  }
};
