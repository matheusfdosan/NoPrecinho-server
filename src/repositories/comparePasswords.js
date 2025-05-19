const bcrypt = require("bcrypt")

const comparePasswords = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}

module.exports = comparePasswords
