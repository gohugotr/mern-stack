export const getNotlar = (request, response) => {
  response.status(200).json({ Mesaj: `Controller GET Notlar` })
}

export const setNotlar = (request, response) => {
  response.status(200).json({ Mesaj: `Controller POST Notlar` })
}

export const updateNotlar = (req, res) => {
  res.status(200).json({ Mesaj: `Controller PUT Notlar ${req.params.id} Nolu ID` })
}

export const deleteNotlar = (req, res) => {
  res.status(200).json({ Mesaj: `Controller DELETE Notlar ${req.params.id} Nolu ID` })
}
