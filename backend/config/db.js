import mongoose from 'mongoose'

export const baglan = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Bağlandı => ${conn.connection.name}`)
  } catch (error) {
    console.log(error)
    process.exit(1) // Çıkış yapmak için
  }
}
