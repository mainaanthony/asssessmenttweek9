const express = require('express')

require('dotenv').config()
const app = express()
const ejs = require("ejs")
app.set("View engine", "ejs");
const createMarkup =   require("./utils/createMarkUp")
const {messageOptions, sendMail} = require("./utils/Mail") 
app.use(express.static("public"))

app.use(express.json())

//I COMMENTED THIS IN MIDDLEWARE
app.get('/', (req, res)=>{
     res.send("Ok")
    
})




// app.get('/',(req, res, next)=>{
//     let cont = true 
   
   
//    if(cont){
//      next()
//      console.log("logged in successfully from the middleware")
//    }else{
//      res.send("Validation error")
//    }
// }, 



// (req, res)=>{
//      res.send("Ok")
    
// })





app.post("mail", async (req, res)=>{
     const {to, name, subject, text} = req.body

     try{
          let html = await createMarkup("views/sendReport.ejs", {name, text})
          let mOptions = messageOptions({to, subject, text, html})

         let  results = await sendMail(mOptions)
         
         res.json(results)

     }catch(error){
          console,log(error)
     }
})



const router = require('./routes/booksRoute');

const port = process.env.PORT || 4000
//I COMMENTED THIS IN MIDDLEWARE
 app.use('/', router)


// app.use("*",(req,res, next)=>{
   
//      const error = new Error("Route not found")
//      next({
//           status:404,
//           message: error
//      })
     
// })

app.use((error, req, res, next)=>{
     res.status(error.status).json(error.message.message)
})




app.listen(port, ()=>console.log(`Server on port ${port}`))