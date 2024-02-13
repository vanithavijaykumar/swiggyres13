// const bodyParser=require('body-parser')
// const express=require('express')
// const mongoose=require('mongoose')

// const {Restaurants}=require('./Schema.cjs')

// const app=express()
// app.use(bodyParser.json())

// async function connectToDb()
// {
//     try{
//         await mongoose.connect('mongodb+srv://vanitha_13:vanitha_13@cluster0.a44bzup.mongodb.net/?retryWrites=true&w=majority')
//         console.log('DB Connection established :)')
//         const port=8000

//         app.listen(port,function()
// {
//     console.log(`Listening on port ${port}`)
// })
       
//     }
//     catch(error)
//     {
//         console.log(error)
//         console.log('couldn\'t establish connection :(')
// }
// }
// connectToDb()

// app.post('/add-restaurant',async function(request,response){
//     try{
//         await Restaurants.create({
//             "areaName":request.body.areaName,
//             "avgRating":request.body.avgRating,
//             "costForTwo":request.body.costForTwo,
//             "cuisines":request.body.cuisines,
//             "name":request.body.name
//         })
//         response.json({
//             "status" : "success"
//         })
//     }catch(error){
//         console.log('not restaurant added')
//     }
// })


const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
const{Restaurants,Users}=require('./Schema.cjs')

const app=express()
app.use(bodyParser.json())
app.use(cors())

async function connectToDb(){
    try{
        await mongoose.connect('mongodb+srv://vanitha_13:vanitha_13@cluster0.a44bzup.mongodb.net/swiggy?retryWrites=true&w=majority')
        console.log('connection established')
        const port=process.env.PORT || 8000
        app.listen(port,function(){
            console.log('listening')
})
    }catch(error){
        console.log('cant connect')
    }
}connectToDb()

app.post('/add-restaurant',async function(request,response){
    try{
        await Restaurants.create({
            "areaName":request.body.areaName,
            "avgRating":request.body.avgRating,
            "costForTwo":request.body.costForTwo,
            "cuisines":request.body.cuisines,
            "name":request.body.name
        })
        response.json({
            "status" : "success"
        })
    }catch(error){
        console.log('not restaurant added')
    }
})

app.get('/get-restaurant-details',async function(request,response)
{
    try{
        const restaurantDetails=await Restaurants.find()
        response.status(200).json(restaurantDetails)
    }
    catch(error)
    {
        response.status(500).json({
            "status":"Failure",
            "message":"could not fetch details",
            "error":error
        })
    }
})



app.post('/create-new-user', async function(request, response) {
    try {
         await Users.create({
             "userName" : request.body.userName,
             "email" : request.body.email,
             "password" : request.body.password,
             "contact":request.body.contact
         })
         response.status(201).json({
         "status" : "success",
         "message":"Created Successfully"
         })
    } catch(error) {
         response.status(500).json({
             "status" : "Failure",
             "message":"internal server error"
         })
    }
 })
 
 app.post('/validate-user', async function(request, response) {
 try{
     const user =await Users.findOne({
         "email":request.body.email,
         "password":request.body.password
     })
     if(user)
     {
         response.status(200).json({
             "message":"Valid User"
         })
 
     }
     else{
         response.status(401).json({
             "message":"Invalid user"
         })
     }
 }catch(error){
     response.status(500).json({
         "message":"Internal Server Error"
     })
 }
 })