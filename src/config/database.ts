import mongoose from 'mongoose';

export const connectDB = (URI: string) => {

    mongoose.connect(URI).then(() => {
        console.log("Database connected Successfully")
    }).catch((err) => {
        console.log(`Error: ${err}`)
    })
}