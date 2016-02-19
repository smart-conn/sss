(function(app) {

  app.webServicesConfig = webServicesConfig;

  function webServicesConfig(nga, admin) {

    var webServices = admin.getEntity('web_services');
    var products = admin.getEntity('products');

    webServices.creationView()
      .fields([
        nga.field('name'),
        nga.field('code')
      ]);

    webServices.showView()
      .fields([
        nga.field('name'),
        nga.field('code')
      ]);

    webServices.listView()
      .fields([
        nga.field('name'),
        nga.field('code'),
        nga.field('products', 'reference')
          .targetEntity(products)
          .targetField(nga.field('name')),
        nga.field('publish', 'boolean')
      ])
      .listActions(['edit', 'delete']);

    webServices.editionView()
      .fields([
        nga.field('name'),
        nga.field('code'),
        nga.field('products', 'reference')
          .targetEntity(products)
          .targetField(nga.field('name')),
        nga.field('api_specs', 'json'),
        nga.field('publish', 'boolean')
      ]);

    return webServices;
  };

})(window.app || (window.app = {}))
