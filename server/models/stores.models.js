const mongoose = require('mongoose');

const StoresSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, 'Store name required'],
        minlength: [3, 'Store name must be at least 3 characters long']
    },
    storeNumber: {
        type: Number,
        required: [true, 'Number required'],
        min: [1, 'Number must be greater than 10']
    },
    storeStatus: {
        type: Boolean
    }
}, {timestamps: true});

module.exports.Stores = mongoose.model('Stores', StoresSchema);