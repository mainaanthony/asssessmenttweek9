const jwt = require('jsonwebtoken')
require('dotenv').config()

const tokenGenerator = async(data)=>{

    return jwt.sign(data, process.env.SECRET , {expiresIn: '1hr'});
}


function tokenVerifier(){

return jwt.verify(token, process.env.SECRET)

}


module.exports = {tokenGenerator, tokenVerifier}