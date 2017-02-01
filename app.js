var ruterService = require('./ruterService.js'),
    express      = require('express'),
    app          = express();

app.get('/api', function (req, res) {
    ruterService.getLatestTramTimes().then((data) => {
        res.send({
            'stop': 'Stensgata',
            'data': data
        });
    });
});

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
