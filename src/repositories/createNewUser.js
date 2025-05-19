const User = require("../model/User.js")

module.exports = async (email, password) => {
  const newUser = User.create({ email, password })
  return newUser
}
