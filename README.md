# MERN

**Kaynak :** [MongoDB ExpressJS React ve NodeJS ile Uygulama Geliştirmenin Temellerini Öğreniyorum](https://www.udemy.com/course/mern-stack-ile-uygulama-gelistirme-kursu-2022/)

- `npm init`
- `yarn add express mongoose dotenv colors`
- `yarn add -D nodemon`
- package.json düzenleme

```js script
  "type": "module", // const express = require('express'); yerine
                    // import express from 'express'; yazabiliriz.
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
  },
```

- Temel biçimde express server `yarn server` ile başlatılıyor.

```js script
import express from 'express'

const PORT = 8080
const app = express()

app.listen(PORT, () => console.log(`Server ${PORT} üzerinden yayında`))
```

- Dotenv paketiyle **.env** değişkenlerini kullanmak için Root dizinde `.env` dosyasını oluşturup içine `PORT=8080` yazıyoruz. Daha sonra `server.js` içinde gerekli düzenlemeyi yapmalıyız.

```js script
import dotenv.config() from 'dotenv'

dotenv.config()
const PORT = process.env.PORT
```

- Postman'dan kontrol için `localhost:8080` yazıp GET metodunu çalıştırabiliriz
- `server.js` içinde `app` için ***GET*** metodu oluşturuyoruz. İki parametre alıyor.

```js script
app.get('/api/notlar',(req, res) => {
    res.send('Notlar)
})
```

- Bundan sonra Postman'dan test için `localhost:8080/api/notlar` yazıp GET metodunu çalıştırabiliriz. 'Notlar' çıktısını verecektir.
- JSON olarak da gönderebiliriz

```js script
app.get('/api/notlar',(request, response) => {
    response.json({mesaj:'Notlar'}) // Burada json içine nesne alıyor.
})
```

- Çıktı şu şekilde olur.

```js script
{
    "Mesaj": "Notlar"
}
```

- **status** kodlarını kullanma yöntemi

```js script
    const not = {
        ad: 'İlk Not',
        icerik: 'İlk içeriğimizdi',
        oncelik: 3
    }
    response.status(200).json(not)
```
