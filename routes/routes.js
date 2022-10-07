const express = require('express');
const Model = require('../models/models')
const Router = express.Router();

// GET ALL API
Router.get('/getAll', async (req, res) => {
    try { 
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// GET BY ID API
Router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

// POST API
Router.post('/post', async (req, res) => {
    const data = new Model({
        Firstname: req.body.Firstname,
        Age: req.body.Age,
        Lastname: req.body.Lastname
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(501).json({message: error.message})
    }
})

// Patch API
Router.patch('/patch/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;
        const options = { new: true}

        const result = await Model.findByIdAndUpdate(
            id, dataToUpdate, options
        )

        res.send(result)
    } catch (error) {
        res.status(501).json({message: error.message})
    }
})

// DELETE API
Router.delete('/delete/:id', async (req, res) => {
    try {
       await Model.findByIdAndDelete(req.params.id)
        res.send(`${req.params.id} has been Deleted`)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
})

module.exports = Router;