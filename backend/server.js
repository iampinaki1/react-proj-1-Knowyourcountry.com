import express from "express";
import dotenv from "dotenv";
import connect from "./db.js";
import mongoose from "mongoose";
import cors from 'cors'
const app = express();
dotenv.config();
app.use(cors())
const animeReviewSchema = new mongoose.Schema(
  {
    animename: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);
const AnimeReview = mongoose.model("AnimeReview", animeReviewSchema);

app.post("/api/Rating", async (req, res) => {
 
try {
    await AnimeReview.create(req.body.anime)
  
    res.json({msg:"recieved"});
} catch (error) { console.log(error)
  
}
});
app.get("/api/Rating", async (req, res)=>{
try {
     const list= await AnimeReview.find()
     res.json(list)
} catch (error) {
  console.log(error)
}
  })
 app.use( (req, res) => {
  res.status(404).send('path not found');
});
const port = process.env.PORT || 3000;
await connect();
app.listen(port, () => {
  console.log(`server started ${port}`);
});
