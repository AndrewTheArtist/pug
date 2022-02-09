const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.urlencoded())

app.use('/', function (req, res) {
    let Email = req.body.email
    let message = null
    if (req.body.email) {
        if (Email.includes("@") && Email.includes(".")) {
            message = "This email is valid"
        } else {
            message = "This is not a valid Email"
        }
    }
    res.render('index', {
        title: 'Hey',
        message
    })
})



app.listen(4000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Connection has been established on port 4000')
    }
})