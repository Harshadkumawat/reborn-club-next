import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the game."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description."],
  },
  
  image: {
    type: String, 
    required: true,
  },
  
  gallery: {
    type: [String], 
    default: [],
  },
  
  video: {
    type: String, 
    default: "",
  },
  category: {
    type: String,
    enum: ["Classic", "Team Building", "Outdoor"],
    default: "Classic",
  },
}, { timestamps: true });

export default mongoose.models.Game || mongoose.model("Game", GameSchema);