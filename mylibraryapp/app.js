const express = require('express')

const app = express();

const authorRouter = require('./routes/authorRouter.js')


app.get('/', (req, res) => {
    res.send('<h1>Library System</h1>')
})

app.use('/author-management', authorRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('The library app is running!')
})