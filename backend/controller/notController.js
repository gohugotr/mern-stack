import asyncHandler from 'express-async-handler'

export const getNotlar = asyncHandler(async (request, response) => {
  response.status(200).json({ Mesaj: `Controller GET Notlar` })
})

export const setNotlar = asyncHandler(async (request, response) => {
  //console.log(request.body);

  // Hata Yakalama. !request.body.Mesaj ifadesinde Mesaj büyük küçük harf duyarlıdır.
  if (!request.body.Mesaj) {
    //response.status(400).json({ Mesaj: 'Lütfen body alanına Mesaj giriniz.' })
    response.status(400)
    throw new Error('Lütfen body alanına Mesaj giriniz.')
  }

  response.status(200).json({ Mesaj: `Controller POST Notlar` })
})

export const updateNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ Mesaj: `Controller PUT Notlar ${req.params.id} Nolu ID` })
})

export const deleteNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ Mesaj: `Controller DELETE Notlar ${req.params.id} Nolu ID` })
})
