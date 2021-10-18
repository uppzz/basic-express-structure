exports.getIndex = (req, res, next) => {
   res.render("pages/index", {
      layout: "base",            // default   "false" auch möglich
      helper: {},                // können hier auch individuel überschrieben werden
      pageTitle: "Programmierhilfe.de"
   });
};
