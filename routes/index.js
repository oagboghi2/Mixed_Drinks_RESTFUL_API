var express = require('express');
var router = express.Router();

var db = require('../database.js');

router.get('/api/ingredients/list', db.getIngredientsList);
router.get('/api/cocktails/list', db.getCocktailsList);
//router.get('/api/cocktails/:id', db.getCocktails);
router.post('/api/ingredients/add', db.getIngredientsAdd);
router.post('/api/cocktails/add', db.getCocktailsAdd);

module.exports = router;
