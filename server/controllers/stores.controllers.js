const { Stores } = require('../models/stores.models');


// Create a controller to POST a new item
module.exports.addStore = ( req, res ) => {
    const { storeName, storeNumber, storeStatus } = req.body;
    Stores.create({
        storeName,
        storeNumber,
        storeStatus
    })
    .then( store => res.json( store ))
    .catch( err => res.status(400).json( err ) );
}

// Creating a controller to GET all items
module.exports.getAllStores = ( req, res ) => {
    Stores.find( {} )
    .then( stores => res.json( stores ) )
    .catch( err => res.json( err ) );
}

// Create a controller to GET one item
module.exports.getOneStore = ( req, res ) => {
    Stores.findOne( { _id: req.params.id } )
        .then( store => res.json( store ) )
        .catch( err => res.json( err ) )
}

// Create a controller to UPDATE one item
module.exports.updateStore = ( req, res ) => {
    Stores.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
        .then( updateStore => res.json( updateStore ) )
        .catch( err => res.status(400).json( err ) );
}


// Create a controller to DELETE one item
module.exports.deleteStore = ( req, res ) => {
    Stores.deleteOne( { _id: req.params.id } )
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch( err => res.json(err));
}

