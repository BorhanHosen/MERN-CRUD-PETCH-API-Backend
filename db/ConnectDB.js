import mongoose from "mongoose";

const ConnectDB = async (DATABASE_URI) => {
  try {
    const DB_OPTIONS = {
      dbName: "MERN_CRUD_Application",
    };
    await mongoose.connect(DATABASE_URI, DB_OPTIONS);
    console.log("Connected Successfully!");
  } catch (error) {
    console.log(error);
  }
};
export default ConnectDB;
