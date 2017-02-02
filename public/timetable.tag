<timetable>
    <article if={data}>
        <h1 if={stop}>{stop}</h1>

        <section>
            <h2>Platform 1</h2>
            <h3>17 { data.platformOne.lineOne[0].destination}</h3>

            <ul>
                <li each={journey in data.platformOne.lineOne}>
                    <span class="timeUntil">{journey.timeUntil}</span>
                    <span class="arrivalTime">{journey.arrivalTime}</span>
                </li>
            </ul>

            <h3>18 { data.platformOne.lineTwo[0].destination}</h3>

            <ul>
                <li each={journey in data.platformOne.lineTwo}>
                    <span class="timeUntil">{journey.timeUntil}</span>
                    <span class="arrivalTime">{journey.arrivalTime}</span>
                </li>
            </ul>
        </section>

        <section>
            <h2>Platform 2</h2>
            <h3>17 { data.platformTwo.lineOne[0].destination }</h3>

            <ul>
                <li each={journey in data.platformTwo.lineOne}>
                    <span class="timeUntil">{journey.timeUntil}</span>
                    <span class="arrivalTime">{journey.arrivalTime}</span>
                </li>
            </ul>

            <h3>18 { data.platformTwo.lineTwo[0].destination }</h3>

            <ul>
                <li each={journey in data.platformTwo.lineTwo}>
                    <span class="timeUntil">{journey.timeUntil}</span>
                    <span class="arrivalTime">{journey.arrivalTime}</span>
                </li>
            </ul>
        </section>

    </article>

    <style>
        ul {
            margin         : 0;
            padding        : 0;
            list-style-type: none;
        }

        ul li {
            display        : inline;
            text-decoration: none;
            padding        : .2em 1em;
        }

        li:first-child .arrivalTime {
            display: none;
        }

        li:not(:first-child) .timeUntil {
            display: none;
        }

    </style>

    <script>

        this.data = this.opts.data;
        this.stop = this.opts.stop;

    </script>

</timetable>
