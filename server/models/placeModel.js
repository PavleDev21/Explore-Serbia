const mongoose = require("mongoose")

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: String,
  images: {
    type: [String],
  },
  things_td: String,
  location: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
})

module.exports = mongoose.model("Place", PlaceSchema)
