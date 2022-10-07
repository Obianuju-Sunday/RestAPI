const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Firstname: {
        required: true,
        type: String,
    },
    Age: {
        required: true,
        type: Number,
    },
    Lastname: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema);