const express = require('express')

const router = express.Router()



// router.get('/', (req, res) => {
//    // res.end('HELLO IT`S ME')
//    res.render('page')
// })



const studs = [
   { id: 1, name: 'Alexander', surname: 'Volkov' },
   { id: 2, name: 'Serhey', surname: 'Koval' },
   { id: 3, name: 'Pavel', surname: 'Volkov' }
]

router.get('/stud/:id', (req, res) => {
   const id = Number(req.params.id);
   const stud = studs.find((item) => item.id === id)

   console.log('stud', stud)
   // res.end('HELLO IT`S ME')
   res.render('page', { name: stud.name })
})

module.exports = router;