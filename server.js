var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    routes = require('./api/routes/ipAssignmentRoutes'); //importing route
routes(app); //register the route
if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'))  // set static folder 
    
    app.get('*', (req, res)=> {     
      res.sendFile(path.resolve(__dirname, 'client', 'build',         
                    'index.html' )); 
    })
    app.get('*', (req, res)=> {     
      res.sendFile(path.resolve(__dirname, 'client', 'build',         
                    'index.html' )); 
    })
  }
app.listen(port, function(err) {
    console.log('IP Assignment RESTful API server started on port: ' + port);
})
