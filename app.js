var ruterService = require('./ruterService.js'),
    path         = require('path'),
    express      = require('express'),
    app          = express();

app.get('/api/:lines', function (req, res) {
    var lines = req.params.lines;

    ruterService.getLatestTramTimes(lines).then((data) => {
        res.send({
            'stop': 'Stensgata',
            'data': data
        });
    });
});

app.use(express.static(path.join(__dirname + '/public')));

app.get('/:lines', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
