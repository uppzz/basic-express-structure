exports.get404 = (req, res, next) => {
   res.status(404).render('404', {
      pageTitle: 'Page Not Found',
      layout: '',          // soll kein layout haben
   });
};
