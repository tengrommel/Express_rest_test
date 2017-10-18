const express = require('express')
const router = express.Router()

const app = express()

app.get('/repeat/:word', (req, res)=>{
    const {word} = req.params
    // const word = req.params.word
    // if `(typeof word === 'string'){
    //     res
    //         .status(400)
    //         .send("Error: Parameter submitted is not a string...")
    // }`
    res
        .status(200)
        .set('Content-Type', 'application/text')
        .send(`${word} ${word}`)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is listen on port ${port}`)
})