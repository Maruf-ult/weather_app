import mongoose from "mongoose";

const dtaBase = async ()=>{
      try {
  await mongoose.connect("mongodb+srv://marufapurbo911:34oZdfCBMCOvknMP@cluster0.v5vkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
         console.log(`database connected successfully`);
      } catch (error) {
          console.log(error);
      }
}

export default dtaBase;
