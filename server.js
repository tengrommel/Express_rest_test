const express = require('express')
const router = express.Router()

const app = express()

app.get('/repeat/:word', (req, res)=>{
    const {word} = req.params
    // const word = req.params.word
    res.send(`${word} ${word}`)
})

app.listen(3000, ()=>{
    console.log("Server is listen on port 3000")
})