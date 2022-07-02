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
