'use strict';

var Client = require('react-engine/lib/client');

require('./views/home.jsx', {glob: true});

var options = {
  viewResolver: function(viewName) {
    return require('./views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options);
});