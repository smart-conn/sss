(function(app) {

  app.productsConfig = productsConfig;

  function productsConfig(nga, admin) {

    var products = admin.getEntity('products');

    products.creationView()
      .fields([
        nga.field('name'),
        nga.field('code')
      ]);

    products.showView()
      .fields([
        nga.field('name'),
        nga.field('code')
      ])

    products.listView()
      .fields([
        nga.field('name'),
        nga.field('code')
      ])
      .listActions(['edit', 'delete']);

    products.editionView()
      .fields([
        nga.field('name'),
        nga.field('code')
      ]);

    return products;
  };

})(window.app || (window.app = {}))
