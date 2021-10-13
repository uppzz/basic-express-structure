const getIndex = (req, res, next) => {
   res.render("pages/index", {
      layout: "base",            // von handlebars: default ist base aber falls man ein anderes 
      // layout angeben möchte, kann man es hier tun
      pageTitle: "Programmierhilfe.de",
   });
};
export default getIndex 
