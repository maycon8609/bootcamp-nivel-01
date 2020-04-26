const { Router } = require('express');
const routes = new Router();

const ProductController = require('./app/controllers/ProductsController');

routes.get('/projects', ProductController.index);
routes.post('/project', ProductController.store);
routes.put('/project/:id', ProductController.update);
routes.delete('/project/:id', ProductController.delete);

module.exports = routes;
