const express = require('express');
const cors = require('cors')
const items = require('./items');

const app = express()
const port = process.env.PORT || 5100


app.use(express.json()) 

app.use(cors())

app.get('/', (req,res)=> {
    res.send('Welcome to our online grocery store API')
})

app.get('/items', (req,res) => {
    res.send(items)
})


app.listen(port, console.log(`Server running on Port ${port}`))