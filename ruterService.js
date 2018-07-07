var fetch   = require('node-fetch'),
    moment  = require('moment'),

    baseUrl = 'https://reisapi.ruter.no/',
    stopId = '3011310',
    path    = 'StopVisit/GetDepartures/' + stopId + '?transporttypes=metro&linenames=';

module.exports.getLatestTramTimes = (line) => {
    _line = line;

    return fetch(baseUrl + path + line)
        .then((response) => response.json())
        .then(getAllJourneyData);
};

function getAllJourneyData(response) {
    const journeys = [];

    response.forEach(item => {
        let direction;
        let rawData = item.MonitoredVehicleJourney;
        let timeArriving = moment(new Date(rawData.MonitoredCall.ExpectedArrivalTime));
        let difference = moment(timeArriving).fromNow(true); //.replace('ute', '').replace('a', '1');

        if (rawData.DirectionRef === "1") {
            direction = "East"
        } else {
            direction = "West"
        }

        let journey = {
            'direction'  : direction,
            'destination': rawData.MonitoredCall.DestinationDisplay,
            'platform'   : rawData.DirectionRef,
            'timeUntil'  : difference
        };

        journeys.push(journey);
    });

    return {journeys};
}
