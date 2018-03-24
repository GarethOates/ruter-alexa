var fetch   = require('node-fetch'),
    moment  = require('moment'),

    baseUrl = 'https://reisapi.ruter.no/',
    path    = 'StopVisit/GetDepartures/3010011?transporttypes=metro&linenames=',

    _line;

exports.getLatestTramTimes = (line) => {
    _line = line;

    return fetch(baseUrl + path + line)
        .then((response) => response.json())
        .then(getAllJourneyData);
};

function getAllJourneyData(response) {
    const journeys = [];

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

    return journeys;
}