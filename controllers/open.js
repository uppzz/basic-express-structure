exports.getIndex = (req, res, next) => {
   res.render("pages/index", {
      layout: "base",            // default   "false" auch möglich
      helper: {},
      pageTitle: "Programmierhilfe.de"
   });
};
