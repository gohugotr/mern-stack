import express from 'express';

const PORT = 8080;

const app = express();

const serverFonksiyonu = () => {
    console.log(`Server ${PORT} üzerinde başlatıldı.`);
}

app.listen(PORT, serverFonksiyonu);
