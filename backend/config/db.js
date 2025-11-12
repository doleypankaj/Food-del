import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pankaj:pankaj123@cluster0.cawu4t8.mongodb.net/food-del').then(()=>console.log("DB Connected"));   
}