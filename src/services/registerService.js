const createNewUser = require("../repositories/createNewUser.js")
const findByEmail = require("../repositories/findByEmail.js")

const registerService = async (email, password) => {
  const verifyUser = await findByEmail(email)
  if (verifyUser) throw new Error("This user aready exist!")

  const isCreated = await createNewUser(email, password)
  if (!isCreated) throw new Error("Error to create new user!")
  return {
    message: "User Successfully Created!",
  }
}

module.exports = registerService
