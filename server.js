const express = require('express')
const bodyParser = require('body-parser')
const { getAllContacts } = require('./database/database_utilities')
const apiRouter = require('./routes/api')
const app = express()

app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({extended: false}))
    // bodyParser
    // if HTTP method is POST, PUT, DELETE, then...
    // take the body of that request, parse it, and set req.body to the result

app.use('/api', apiRouter)

app.get('/repeat/:word', (req, res) => {
    const { word } = req.params
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

// { a: 5, b: "dog"}

app.post('/weave', (req, res) => {
    const { a, b } = req.body
    res
        .send(`${a} ${b} ${a} ${b}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listen on port ${port}`)
})