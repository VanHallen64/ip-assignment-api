'use strict';
module.exports = function(app) {
  var controller = require('../controllers/ipAssignmentController');

  // IP Assignment Routes
  app.route('/').get((req, res) => {
    res.send('TDx IP Assignment API')
  })
  app.route('/ip')
    .post(controller.ipAssignmentController);
};