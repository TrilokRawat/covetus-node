const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const cat = require('../model/category');
const Product = require('../model/product');
const auth = require('../middleware/auth')


router.get('/category',auth, async (req, res) => {
    try {
        let category =  await cat.find({})
        res.send({error: false, data: category})
    } catch (error) {
        console.log(error)
        res.status(400).send({error: 'Something went wrong', data: []})
    }
})

router.get('/', auth, async (req, res) => {
    // let id  = req.params.id;
    let query = req.query;
    console.log(query)
    try {
        let product =  await Product.find({category: query.cat_id });
        res.send({error: false, data: product})
    } catch (error) {
        res.status(400).send({error: 'Something went wrong', data: []})
    }
})

router.get('/:id', auth, async (req, res) => {
    let id  = req.params.id;
    try {
        let product =  await Product.find({_id:id })
        res.send({error: false, data: product})
    } catch (error) {
        res.status(400).send({error: 'Something went wrong', data: []})
    }
})

router.post('/', auth, async (req, res) => {
      const product = new Product(req.body)
    try {
        await product.save()
        res.send({error: false, data: product})
    } catch (error) {
        res.status(400).send({error: 'Something went wrong', data: []})
    }
})

// router.post('/cat', async (req, res) => {
//         const catData = new cat(req.body)
//     try {
//         await catData.save()
//         res.send({error: false, data: catData})
//     } catch (error) {
//         console.log(error);
//         res.status(400).send({error: 'Something went wrong', data: []})
//     }
// })

module.exports = router;