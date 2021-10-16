// create server
const express = require('express');
const app = express();

// import path
const path = require('path');
// set templates views directory
app.set("views", path.join(__dirname, "views"));
// use static directory
app.use(express.static(path.join(__dirname, 'public')));
// for dotenv using  
require('dotenv').config({ path: ".env" });
// for getting data from forms
app.use(express.urlencoded({ extended: true }));
// means that json will be used in the whole project 
app.use(express.json());


// ! Handlebars configuration start
// import handlebars sections
const express_handlebars_sections = require('express-handlebars-sections');
// import handlebars module
const exphbs = require('express-handlebars');
//Sets handlebars configurations
const hbs = exphbs.create({
   layoutsDir: __dirname + '/views/layouts',
   partialsDir: __dirname + '/views/partials',
   extname: "hbs",
   defaultLayout: "base",     // default ist: views/layouts/<dateiName>
   // instance level -> global helper functions -> they are all available everywhere in the program
   helpers: {           // helpers kann man auch in controllers mitgeben als objekt (können dort auch überschrieben werden)
      // eq Beispiel im template: {{#if (eq v1 v2)}} mache etwas {{/if}}
      eq: (v1, v2) => v1 === v2,
      ne: (v1, v2) => v1 !== v2,
      lt: (v1, v2) => v1 < v2,
      gt: (v1, v2) => v1 > v2,
      lte: (v1, v2) => v1 <= v2,
      gte: (v1, v2) => v1 >= v2,
      and() {
         return Array.prototype.every.call(arguments, Boolean);
      },
      or() {
         return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
      },
      ph: "Programmierhilfe.de",           // globale variable -> ansonsten im controller die daten mitgeben
   }
});
express_handlebars_sections(hbs);
app.engine("hbs", hbs.engine);
// set out app to use handlebars engine
app.set("view engine", "hbs");
// ! Handlebars configuration end

// TODO Code starts here



// routes
const openRouter = require('./routes/open.js');
app.use(openRouter);




// TODO Code ends here

// Page Not Found --> Immer ans Ende setzen
const errorController = require('./controllers/error.js');
app.use(errorController.get404);

// server listen on port process.env.PORT (dotENV)
app.listen(process.env.PORT || "5000", () => {
   console.log("Server läuft auf Port: " + process.env.PORT);
});