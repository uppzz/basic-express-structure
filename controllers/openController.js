// getIndex wird nur ausgeführt, wenn isTrue true ist.
// * in routes ist festgelegt, dass isTrue vor getIndex aufgerufen wird
exports.isTrue = (req, res, next) => {
   try {
      // !1 -> false    1 -> true 
      if (1) {
         console.log("It is true");
         next();
      } 
   } catch (error) {
      console.log(error);
   }
}

exports.getIndex = (req, res, next) => {
   res.render("open/index", {
      layout: "base",            // default  Boolean false    auch möglich
      helper: {},                // können hier auch individuel überschrieben werden
      pageTitle: "Programmierhilfe.de",
      erfundeneVariable: req.erfundeneVariable
   });
};
