const Place = require("../models/placeModel")

// @desc    Get Places
// @route   GET api/places
// @access  Private
const getPlaces = async (req, res) => {
  const places = await Place.find()

  res.status(200).json(places)
}

// @desc    Get single place
// @route   GET api/places/:id
// @access  Private
const getSpecificPlace = async (req, res) => {
  const place = await Place.findById(req.params.id)

  res.status(200).json(place)
}

// @desc    Set Places
// @route   POST api/places
// @access  Private
// const setPlaces = async (req, res) => {
//   const place = await Place.create({
//     name: req.body.name,
//     category: req.body.category,
//     location: {
//       lat: req.body.lat,
//       lng: req.body.lng,
//     },
//   })

//   res.status(200).json(place)
// }

module.exports = {
  getPlaces,
  getSpecificPlace,
}
