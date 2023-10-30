const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

// Use the cors middleware to enable CORS
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/places", require("./routes/placesRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
