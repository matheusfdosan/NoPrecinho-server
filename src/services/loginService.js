const bcrypt = require("bcrypt")
const findByEmail = require("../repositories/findByEmail.js")
const comparePasswords = require("../repositories/comparePasswords.js")

const loginService = async (email, password) => {
  const user = await findByEmail(email)
  if (!user) throw new Error("This user don't exists!")

  const isValid = await comparePasswords(password, user.password)
  if (!isValid) throw new Error("Password is not valid!")

  return {
    acess: true,
    message: "Login successfully!",
    user: {
      id: user._id,
      email: user.email,
      password: user.password,
    },
  }
}

module.exports = loginService
