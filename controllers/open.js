exports.getIndex = (req, res, next) => {
   res.render("open/index", {
      layout: "base",            // default  Boolean false    auch möglich
      helper: {},                // können hier auch individuel überschrieben werden
      pageTitle: "Programmierhilfe.de",
      erfundeneVariable: req.erfundeneVariable
   });
};
