const get404 = (req, res, next) => {
   res.status(404).render('pages/404', {
      pageTitle: 'Page Not Found',
      layout: '',          // soll kein layout haben
   });
};
export default get404;