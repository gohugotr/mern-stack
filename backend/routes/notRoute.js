import express from 'express'

const router = express.Router()

// router.get('/', (req, res) => {
//   res.status(200).json({ mesaj: 'Get notlar' })
// })

// router.post('/',(req,res) =>{
//   res.status(200).json({Mesaj: 'Post Notlar'})
// })

// router.put('/:id',(request,response) => {
//   response.status(200).json({Mesaj: `put metodu:  ${request.params.id} nolu id güncellendi`})
// })

// router.delete('/:id',(request, response) => {
//   response.status(200).json({Mesaj: `DELETE Metodu: ${request.params.id} nolu id silindi`})
// })

import { getNotlar, setNotlar, updateNotlar, deleteNotlar } from '../controller/notController.js'

// router.get('/', getNotlar)
// router.post('/', setNotlar)
// router.put('/:id', updateNotlar)
// router.delete('/:id', deleteNotlar)

// Zincirleme route tanımlama

router.route('/').get(getNotlar).post(setNotlar)
router.route('/:id').put(updateNotlar).delete(deleteNotlar)

export default router
