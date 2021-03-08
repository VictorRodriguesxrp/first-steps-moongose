const express = require('express');
const routes = express.Router();

const ArticleController = require('./controllers/ArticleController')

routes.get('/articles', ArticleController.index);
routes.post('/articles', ArticleController.create);
routes.put('/articles/:_id', ArticleController.update);
routes.delete('/articles/:_id', ArticleController.delete);

module.exports = routes;