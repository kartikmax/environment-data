import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
app.use(cors())
// const URI = process.env.MONGODB_URI
const URI = 'mongodb://localhost:27017/dashboardData'
// Connect to MongoDB


mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const Data = mongoose.model("Data", dataSchema, "chartData");

// Define a route to fetch data from MongoDB

app.get("/",  (req, res) => {
  res.send('hello world')
});

app.get("/data", async (req, res) => {
  try {

    const limit = parseInt(req.query.limit) ||10 ;

    const data = await Data.find().limit(limit);

    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
