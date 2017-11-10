//dependencies/////////////////////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleware///////////////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));


//routes/////////////////////////////////////////////////

const mainRoutes = require("./routes/index.js");
app.use(mainRoutes);

app.get('/', function(req, res, next){
  res.send("Hello world")
})

/////// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .json({
      status: 'error',
        message: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//port/////////////////////////////////////////////////
app.listen(3000, function(){
  console.log("The Backend is in another castle");
})
