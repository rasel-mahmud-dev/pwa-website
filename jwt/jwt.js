const jwt = require('jsonwebtoken')

const createToken = (id, email, expiresIn)=> {
  return jwt.sign({
      id: id,
      email: email,
    },
    process.env.SECRET, {expiresIn: expiresIn ? expiresIn : (24 * 30) + 'h'}
  )
}


const parseToken = (token)=> {
  return new Promise(async (resolve, reject)=>{
    try {
      if(token) {
        let d = await jwt.verify(token, process.env.SECRET)
        resolve(d)
      } else {
        reject(new Error("Token not found"))
      }
    } catch (ex){
      reject(ex)
    }
  })
}

const getToken = (req)=> {
  return req.headers["authorization"]
}

module.exports = {
  getToken,
  parseToken,
  createToken
}
