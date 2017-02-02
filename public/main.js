document.addEventListener('DOMContentLoaded', init);

function init() {
    var lines = getUrlParameter('lines');

    riot.compile(function() {
        timetable = riot.mount('#timetable')[0];
        getData(lines);
    });

    setInterval(function() { getData(lines) }, 30000);
}

function getData(lines) {
    if (lines) {
        fetch('/api/' + lines)
            .then(function (response) { return response.json();})
            .then(function (body) {
                timetable.update(body);
            }
        );
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
