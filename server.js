const express = require('express')
const router = express.Router()

const app = express()

app.get('/repeat/:word', (req, res)=>{
    const {word} = req.params
    // const word = req.params.word
    res.send(`${word} ${word}`)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is listen on port ${port}`)
})