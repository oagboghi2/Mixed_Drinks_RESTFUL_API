const promise = require('bluebird');
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/drinks';
const db = pgp(connectionString);


var options = {
  //Initialization options
  promiseLib: promise
};

function getIngredientsList(req, res, next){
  console.log("test");
  db.any('SELECT * FROM drinks')
  .then(function(data){
    res.status(200).json({
      status: 'success',
      data: data
    });
  })
  .catch(function(data){
    return next(err);
  });
}

function getCocktailsList(req, res, next){
  var id = parseInt(req.params.id);
  db.any('SELECT * FROM cocktails')
  .then(function(data){
    res.status(200).json({
      status: 'success',
      data: data
    });
  })
  .catch(function(data){
    return next(err);
  });
}

function getIngredientsAdd(req, res, next){
  db.none('INSERT INTO drinks(ingredient_id,ingredient_name)'+'VALUES (${ingredient_id}, ${ingredient_name})', req.body)
  .then(function(data){
    res.status(200).json({
      status: 'success',
      data: data,
      message: "Ingreidient successfully added"
    });
  })
  .catch(function(err){
    return next(err);
  });
}

function getCocktailsAdd(req, res, next){
  let {ingred,cocktails_name} = req.body
  ingred = JSON.parse(ingred);
  console.log("test", req.body);
  // console.log(Array.isArray(ingred))
  //res.json({})
  db.none('INSERT INTO cocktails(cocktails_name, ingredient_ids) VALUES ($1, $2)', [cocktails_name, ingred])
  .then(function(data){
    console.log("test 2 " + data);
    res.status(200).json({
      status: 'success',
      data: data,
      message: "Cocktail successfully added"
    });
  })
  .catch(function(err){
    return next(err);
  });
}


module.exports = {
  getIngredientsList: getIngredientsList,
  getCocktailsList: getCocktailsList,
  getIngredientsAdd: getIngredientsAdd,
  getCocktailsAdd: getCocktailsAdd
};
