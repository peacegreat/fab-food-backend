import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nanbyenlazwan:Grea77mind@cluster0.uhpidww.mongodb.net/backend-fabapp').then(()=> console.log('DB Connected'));
}