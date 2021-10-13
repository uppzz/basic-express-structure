exports.getIndex = (req, res, next) => {
   res.render("pages/index", {
      layout: "base",
      pageTitle: "Programmierhilfe.de"
   })
}

