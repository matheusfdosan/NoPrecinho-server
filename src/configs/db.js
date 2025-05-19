const mongoose = require("mongoose")
const fp = require("fastify-plugin")
const { MONGODB } = require("../../envVariables")

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB Connected!")
  } catch (error) {
    console.error("Error to connect Mongo database!")
  }
}

module.exports = fp(connectDB)
