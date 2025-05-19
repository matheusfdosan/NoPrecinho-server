const User = require("../model/User.js")

const findByEmail = async (email) => {
  const foundUser = await User.findOne({ email })
  return foundUser
}

module.exports = findByEmail
