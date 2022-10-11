'use strict';
module.exports = function(app) {
  var controller = require('../controllers/ipAssignmentController');

  // IP Assignment Routes
  app.route('/ip')
    .post(controller.ipAssignmentController);
};