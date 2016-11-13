var PORT = 3000 || process.env.PORT;
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var mongoose = require('mongoose');
var db = "mongodb://localhost/testapp";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan')
var path = require('path');
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', mainRouter);
app.use('/api', apiRouter);

mongoose.connect(db, function(err) {
    if (err) {
        return err;
    } else {
        console.log('Successfully connected to ' + db)
    }
});
app.set('views', __dirname + '/client2/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname + 'client2')));

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});