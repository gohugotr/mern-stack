import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

//const PORT = 8080;
const PORT = process.env.PORT
const app = express()

// const serverFonksiyonu = () => {
//     console.log(`Server ${PORT} üzerinden yayında.`);
// }

// app.listen(PORT, serverFonksiyonu);

app.listen(PORT, () => console.log(`Server ${PORT} üzerinden yayında`))
