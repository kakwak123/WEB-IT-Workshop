const express = require('express')

const authorRouter = express.Router()



const authorController = require('../controllers/authorController.js')

authorRouter.get('/', (req,res) => authorController.getAllAuthors(req, res))
authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req, res))
authorRouter.post('/', (req, res) => authorController.postAuthorDetail(req, res))

module.exports = authorRouter