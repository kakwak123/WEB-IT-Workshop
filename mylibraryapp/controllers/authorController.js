const authors = require('../models/author.js')
const bp =

const getAllAuthors = (req, res) => {
    res.send(authors)
}

const getAuthorByID = (req, res) => {
    const author = authors.find(author => author.id === req.params.id)

    if (author){
        res.send(author) // send back the author details}
    }
    else{
        res.send([])
        
    }

}
const postAuthorDetail = (req, res) => {
    // const id = req.body.id;
    // const first_name = req.body.first_name;
    // const last_name = req.body.last_name;
    res.send(req.body)
}


module.exports = {
    getAllAuthors,
    getAuthorByID,
    postAuthorDetail
}