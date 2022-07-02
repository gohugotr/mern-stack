import express from 'express';

const PORT = 8080;
const app = express();

// const serverFonksiyonu = () => {
//     console.log(`Server ${PORT} üzerinden yayında.`);
// }

// app.listen(PORT, serverFonksiyonu);

app.listen(PORT, () => console.log(`Server ${PORT} üzerinden yayında`))
