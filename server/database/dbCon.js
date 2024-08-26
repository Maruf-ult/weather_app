import mongoose from "mongoose";

const dtaBase = async ()=>{
      try {
         await mongoose.connect('mongodb://localhost:27017/weather_app')
         console.log(`database connected successfully`);
      } catch (error) {
          console.log(error);
      }
}

export default dtaBase;