const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const port = 3000

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('pages/home.html')
})

app.get('/contacts', (req, res) => {
    res.render('pages/contact.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})