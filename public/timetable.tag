<timetable>
    <section if={data}>
        <article>
            <h2>Platform 1</h2>

            <div if={data.platformOne.lineOne}>
                <h3>17 { data.platformOne.lineOne[0].destination}</h3>

                <ul>
                    <li each={journey in data.platformOne.lineOne}>
                        <span class="timeUntil">{journey.timeUntil}</span>
                        <span class="arrivalTime">{journey.arrivalTime}</span>
                    </li>
                </ul>
            </div>

            <div if={data.platformOne.lineTwo}>
                <h3>18 { data.platformOne.lineTwo[0].destination}</h3>

                <ul>
                    <li each={journey in data.platformOne.lineTwo}>
                        <span class="timeUntil">{journey.timeUntil}</span>
                        <span class="arrivalTime">{journey.arrivalTime}</span>
                    </li>
                </ul>
            </div>
        </article>
    </section>

    <script>
        this.data = this.opts.data;
    </script>

</timetable>
