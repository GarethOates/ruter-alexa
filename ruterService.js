var fetch   = require('node-fetch'),
    moment  = require('moment'),

    baseUrl = 'https://reisapi.ruter.no/',
    path    = 'StopVisit/GetDepartures/3010313?transporttypes=tram&linenames=17,18';

exports.getLatestTramTimes = () => {
    return fetch(baseUrl + path)
        .then(res => { return res.json(); })
        .then(getAllJourneyData)
        .then(filterJourneyData);
};

function getAllJourneyData(response) {
    var journeys = [];

    response.forEach(item => {
        var rawData      = item.MonitoredVehicleJourney,
            date         = new Date(rawData.MonitoredCall.AimedArrivalTime);
            timeArriving = moment(date),
            difference   = moment(timeArriving).fromNow(true).replace('ute', ''),

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

function filterJourneyData(journeys) {
    if (journeys.length === 0) {
        return;
    }

    return journeys
}
