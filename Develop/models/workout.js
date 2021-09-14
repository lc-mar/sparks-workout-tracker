const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  
    exercises: [{
      type: {
        type: String,
        trim: true,
        required: "Enter type of workout"
      },

      title: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
      },

      weight: {
        type: Number,
        required: "Enter weight"
      },

      sets: {
        type: Number,
        required: "Enter total sets" 
      },

      reps: {
        type: Number,
        required: "Enter total reps"
      },

      duration: {
        type: Number,
        required: "Enter time in minutes"
        },
    }]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
