let express = require('express');

const ProductModel = require('../models/product')

let router = express.Router();

router.get('/', async (req, res) => {
    products = await ProductModel.findAll()

    res.status(200).json(products);
})

router.get('/:productId', async (req, res) => {
    const { productId } = req.params
    product = await ProductModel.findByPk(productId)

    res.status(200).json(product);
})

router.post('/', async (req, res) => {
    const { name, price, categoryId} = req.body;

    const product = await ProductModel.create({
        name: name,
        price: price,
        categoryId: categoryId
    })

    res.status(200).json(product);
})

router.delete('/:productId', async (req, res) => {
    const { productId } = req.params
    product = await ProductModel.findByPk(productId)
    product.destroy()
    res.status(200).json({});
})

router.put('/:productId', async (req, res) => {
    const { productId } = req.params
    const { name, price, categoryId} = req.body;
    
    product = await ProductModel.findByPk(productId)
    product.set({
        name: name,
        price: price,
        categoryId: categoryId
    });
    await product.save();

    res.status(200).json(product);
})

module.exports = router;