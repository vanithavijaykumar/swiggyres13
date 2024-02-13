// const mongoose=require ("mongoose")
// const resSchema=new mongoose.Schema({
//     areaName:
//     {
//         type:String,
//         require:true,
//         unique:true
//     },
//     avgRating:
//     {
//         type:Number,
//         require:true
//     },
//     costForTwo:{
//         type:String
//     },
//     cuisines:
//     {
//         type:Array
//     },
//     name:
//     {
//         type:String,
//         require:true
//     },
// },{versionKey:false})

// const Restaurants=mongoose.model('ResDetails',resSchema)

// module.exports={Restaurants}



const mongoose=require("mongoose")
const RestaurantsSchema=new mongoose.Schema({
    areaName:{
        type:String,
    },
    avgRating:{
        type:Number,
    },
    costForTwo:{
        type:String,
    },
    cuisines:{
        type:Array,
    },
    name:{
        type:String,
    }
})


const Restaurants=mongoose.model('RestaurantsList',RestaurantsSchema)

const userSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    email:
    {
        type:String
    },

    password:
    {
        type:String
    },
    contact:
    {
        type:String
    }
})

const Users=mongoose.model('UserDetail',userSchema)

module.exports={Restaurants,Users}