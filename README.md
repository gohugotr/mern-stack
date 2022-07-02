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

- 