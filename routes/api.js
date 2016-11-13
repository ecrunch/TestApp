var express = require('express');
var router = express.Router();
var Model = require('../models/model.js');

router.get('/name', function(request, response) {
    Model.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.post('/name', function(request, response) {
    console.log('in api')
    var name = new Model(request.body);
    name.save(function(err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    });
});

router.delete('/name/:id', function(request, response) {
    var id = request.params.id;
    Model.remove({ _id: id }, function(err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

module.exports = router;