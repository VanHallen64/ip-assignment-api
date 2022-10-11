var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    routes = require('./api/routes/ipAssignmentRoutes'); //importing route
routes(app); //register the route

app.listen(port, function(err) {
    console.log('IP Assignment RESTful API server started on port: ' + port);
})
