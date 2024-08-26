import mongoose from "mongoose";

const  user = new mongoose.Schema({
      city:{
           type:String,
           required:true
      },
      weather:String,
      temp:Number,
      humidity:Number,
      windspeed:Number
})

const userData =  mongoose.model("weather_data",user);

export default userData;