import { request, response } from 'express'
import asyncHandler from 'express-async-handler'

import notModel from '../models/notModel.js'

export const getNotlar = asyncHandler(async (request, response) => {
  //response.status(200).json({ Mesaj: `Controller GET Notlar` })
    const notlar = await notModel.find()

    response.status(200).json(notlar)
})

export const setNotlar = asyncHandler(async (request, response) => {
  // //console.log(request.body);

  // // Hata Yakalama. !request.body.Mesaj ifadesinde Mesaj büyük küçük harf duyarlıdır.
  // if (!request.body.Mesaj) {
  //   //response.status(400).json({ Mesaj: 'Lütfen body alanına Mesaj giriniz.' })
  //   response.status(400)
  //   throw new Error('Lütfen body alanına Mesaj giriniz.')
  // }

  // response.status(200).json({ Mesaj: `Controller POST Notlar` })
  if(!request.body.baslik || !request.body.aciklama){
    response.status(400)
    throw new Error('Lütfen başlık ve açıklama alanlarını giriniz')
  }

  const not = await notModel.create({
      baslik:request.body.baslik,
      aciklama: request.body.aciklama,
      oncelik: request.body.oncelik
  })

  response.status(200).json(not)

})

export const updateNotlar = asyncHandler(async (req, res) => {
  //res.status(200).json({ Mesaj: `Controller PUT Notlar ${req.params.id} Nolu ID` })

  // Önce id sayesinde tek bir notu buluyoruz. Daha sonra bu notun verisini değiştirebiliriz.
  const not = await notModel.findById(req.params.id)

  //Not bulunamazsa hata mesajı veriyoruz
  if (!not) {
    res.status(400)
    throw new Error(`${req.params.id} id'sine sahip Not bulunamadı`)
  }

  // Not bulunduysa body kısmında güncelleme yapıyoruz
  // {new: true} paramtresiyle güncellenmiş olan kaydı getiriyoruz.
  const guncelle = await notModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

  // Son olarak, kullanıcıya güncellenmiş Not bilgisini gösteriyoruz.
  res.status(200).json(guncelle)
})

export const deleteNotlar = asyncHandler(async (req, res) => {
  //res.status(200).json({ Mesaj: `Controller DELETE Notlar ${req.params.id} Nolu ID` })
  const not = await notModel.findById(req.params.id)
  const notlar = await notModel.find()

  if(!not){
    res.status(400)
    throw new Error(` id'sine sahip Not bulunamadı`)
  }

  await not.remove()

  res.status(200).json(notlar)
})
