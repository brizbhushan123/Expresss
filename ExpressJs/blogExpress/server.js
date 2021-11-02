const express = require('express')
var exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000
var passport = require("passport");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var expressValidator = require('express-validator');


app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({  
  secret: 'mycode',
  resave: true, 
  saveUninitialized: true
}));
//SESSION FLASH
app.use(flash());

app.use((req, res, next)=>{
  //console.log(req);
  res.locals.message = req.session.message
  res.locals.errors = req.session.errors;
  delete req.session.message
  next()
})
app.engine('hbs', exphbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))
app.use('/admin', require(path.join(__dirname, 'routes/admin.js')))


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})