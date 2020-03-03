const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

const hashPassword = password => {
  return bcrypt.hashSync(password, salt)
}

const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}


module.exports = {
  hashPassword,
  verifyPassword
}
