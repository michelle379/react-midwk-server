const router = require('express').Router();
let Product= require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id = Number(req.body.id);
    const category = req.body.category;
    const name = req.body.name;
    const location = req.body.location;
    const time = req.body.time;
    const store_avatar = req.body.store_avatar;
    const image = req.body.image;
    const price = Number(req.body.price);
    const currency = req.body.currency;
    const company = req.body.company;
    const hour = req.body.hour;
    const MoreInfo = req.body.MoreInfo;

  const newProduct = new Product({
    id,
    category,
    name,
    location,
    time,
    store_avatar,
    image,
    price,
    currency,
    company,
    hour,
    MoreInfo
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        product.id = Number(req.body.id);
        product.category = req.body.category;
        product.name = req.body.name;
        product.location = req.body.location;
        product.time = req.body.time;
        product.store_avatar = req.body.store_avatar;
        product.image = req.body.image;
        product.price = Number(req.body.price);
        product.currency = req.body.currency;
        product.company = req.body.company;
        product.hour = req.body.hour;
        product.MoreInfo = req.body.MoreInfo;

        product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;