const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      cors = require('cors');

      var app = express()
      app.use(cors());
      app.use(bodyParser.json())


      app.use(express.static('./public'))

            var port = 3000


        app.listen(port, function() {

          console.log("listining on port " + port)

        })
