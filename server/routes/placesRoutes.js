const express = require("express")
const router = express.Router()
const {
  getPlaces,
  getSpecificPlace,
} = require("../controllers/placeController")

router.get("/", getPlaces)

router.get("/:id", getSpecificPlace)

module.exports = router
