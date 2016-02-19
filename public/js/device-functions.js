(function(app) {

  app.deviceFunctionsConfig = deviceFunctionsConfig;

  function deviceFunctionsConfig(nga, admin) {

    var deviceFunctions = admin.getEntity('device_functions');
    var products = admin.getEntity('products');

    deviceFunctions.creationView()
      .fields([
        nga.field('name')
      ]);

    deviceFunctions.showView()
      .fields([
        nga.field('name')
      ]);

    deviceFunctions.listView()
      .fields([
        nga.field('name'),
        nga.field('product', 'reference')
          .targetEntity(products)
          .targetField(nga.field('name'))
      ])
      .listActions(['edit', 'delete']);

    deviceFunctions.editionView()
      .fields([
        nga.field('name'),
        nga.field('product', 'reference')
          .targetEntity(products)
          .targetField(nga.field('name'))
      ]);

    return deviceFunctions;
  };

})(window.app || (window.app = {}))
