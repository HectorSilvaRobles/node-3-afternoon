require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env

const product_controller = require('./product_controller')

const app = express()
app.use(express.json())

const {create, get_one, get_all, update, deleteProduct} = product_controller

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
})
.catch(err => console.log('sorry it failed'))

app.post('/api/products', create)
app.get('/api/products', get_all)
app.get('/api/product/:id', get_one)
app.put('/api/product/:id', update)
app.delete('/api/product/:id', deleteProduct)



app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))