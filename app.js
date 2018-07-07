var ruterService = require('./ruterService.js'),
    express      = require('express'),
    app          = express();

app.get('/api/:lines', function (req, res) {
    var lines = req.params.lines;

    ruterService.getLatestTramTimes(lines).then((data) => {
        res.send(data);
    });
});

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
