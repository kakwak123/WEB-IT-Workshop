const express = require('express')

const app = express();

const authorRouter = require('./routes/authorRouter.js')


app.get('/', (req, res) => {
    res.send('<h1>Library System</h1>')
})

app.use('/author-management', authorRouter)

app.listen(3001, () => {
    console.log('The library app is listening on port 3001!')
})