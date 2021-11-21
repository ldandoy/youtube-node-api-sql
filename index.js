
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const sequelize = require('./utils/database')
const ProductModel = require('./models/product')
const CategoryModel = require('./models/category')

CategoryModel.hasMany(ProductModel)

/*sequelize
  .sync({force: true})
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })*/

const productsRoutes = require('./routes/products')

const app = express()
const port = 5000

app.use(morgan('combined'))
app.use(bodyParser.json())

app.use('/api/products', productsRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

