document.addEventListener('DOMContentLoaded', init);

function init() {
    var tramData,
        timetable;

    riot.compile(function() {
        timetable = riot.mount('#timetable')[0];
    });

    fetch('/api')
        .then(function (response) { return response.json();})
        .then(function (body) {
            timetable.update(body);
        });
}
