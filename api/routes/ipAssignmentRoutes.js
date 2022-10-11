'use strict';
module.exports = function(app) {
  var controller = require('../controllers/ipAssignmentController');

  // IP Assignment Routes
  app.route('/ip').get((req, res) => {
    res.send('TDx IP Assignment API' + process.env.BEID)
  })
  app.route('/ip')
    .post(controller.ipAssignmentController);
};