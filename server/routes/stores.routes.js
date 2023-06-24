const StoreController = require('../controllers/stores.controllers');

module.exports = (app) => {
    app.get('/api/stores/:id', StoreController.getOneStore);
    app.get('/api/stores', StoreController.getAllStores);
    app.post('/api/stores', StoreController.addStore);
    app.put('/api/stores/:id', StoreController.updateStore);
    app.delete('/api/stores/:id', StoreController.deleteStore);
}