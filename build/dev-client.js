var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');
require('eventsource-polyfill');

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
