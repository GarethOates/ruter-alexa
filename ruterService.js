var fetch   = require('node-fetch'),
    moment  = require('moment'),

    baseUrl = 'https://reisapi.ruter.no/',
    path    = 'StopVisit/GetDepartures/3010313?transporttypes=tram&linenames=',

    _lines;

exports.getLatestTramTimes = (lines) => {
    _lines = lines;

    return fetch(baseUrl + path + lines)
        .then(convertToJSON)
        .then(getAllJourneyData);
};

function getAllJourneyData(response) {
    var platformOneLineOne,
        platformOneLineTwo,
        platformTowLineOne,
        platformTwoLineTwo,
        journeys = [];

        lineOne = _lines.split(',')[0],
        lineTwo = _lines.split(',')[1];

    response.forEach(item => {
        var rawData      = item.MonitoredVehicleJourney,
            timeArriving = moment(new Date(rawData.MonitoredCall.ExpectedArrivalTime));
            difference   = moment(timeArriving).fromNow(true).replace('ute', '').replace('a', '1'),

            journey = {
                'line'       : rawData.LineRef,
                'color'      : '#' + item.Extensions.LineColour,
                'destination': rawData.MonitoredCall.DestinationDisplay,
                'platform'   : rawData.DirectionRef,
                'arrivalTime': timeArriving.format('HH:mm'),
                'timeUntil'  : difference
            };

        journeys.push(journey);
    });

    platformOneLineOne = journeys.filter(function (item) {
        return filterByPlatformAndLine(item, 1, lineOne);
    });

    platformOneLineTwo = journeys.filter(function (item) {
        return filterByPlatformAndLine(item, 1, lineTwo);
    });

    platformTowLineOne = journeys.filter(function (item) {
        return filterByPlatformAndLine(item, 2, lineOne);
    });

    platformTwoLineTwo = journeys.filter(function (item) {
        return filterByPlatformAndLine(item, 2, lineTwo);
    });


    journeys = {
        'platformOne' : {
            'lineOne' : platformOneLineOne,
            'lineTwo' : platformOneLineTwo
        },
        'platformTwo' : {
            'lineOne' : platformTowLineOne,
            'lineTwo' : platformTwoLineTwo
        }
    };

    return journeys;
}

function filterByPlatformAndLine (journey, platform, line) {
    var samePlatform = journey.platform === platform.toString(),
        sameLine     = journey.line === line.toString();

    return samePlatform && sameLine;
}

function convertToJSON(response) {
    return response.json();
}
