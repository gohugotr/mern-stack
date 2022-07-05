import express, { request } from 'express'
import dotenv from 'dotenv'

dotenv.config()

//const PORT = 8080;
const PORT = process.env.PORT
const app = express()

// app.get('/api/notlar',(request,response) => {
//     //response.send('Notlar')
//     //response.json({Mesaj: 'Notlar'}) // Burada json nesne alıyor.

//     const not = {
//         ad: 'İlk Not',
//         icerik: 'İlk içeriğimizdi',
//         oncelik: 3
//     }
//     //response.json(not)
//     response.status(200).json(not)
// })
// const serverFonksiyonu = () => {
//     console.log(`Server ${PORT} üzerinden yayında.`);
// }

// app.listen(PORT, serverFonksiyonu);
import notlarRota from './routes/notRoute.js'
import { hataYakala } from './middlewares/errorMiddlewares.js'
import { baglan } from './config/db.js'

// Body verisini alma için
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/notlar', notlarRota)

app.use(hataYakala)

baglan() // mongoose ile db bağlantısı yapıldı.
app.listen(PORT, () => console.log(`Server ${PORT} üzerinden yayında`))
