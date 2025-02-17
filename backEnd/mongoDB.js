//
//Ig4NaHMa6Ghe03v1
//zhydanilbisnes
//

//mongodb://+srvzhydanilbisnes:Ig4NaHMa6Ghe03v1@ForStudentByStudent.mongodb.net/adminconst { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Или MongoDB Atlas URI
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Подключено к MongoDB!");

    const db = client.db("mydatabase");
    return db;
  } catch (error) {
    console.error("❌ Ошибка подключения:", error);
  }
}

connectDB();