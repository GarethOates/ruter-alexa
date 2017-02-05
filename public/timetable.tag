<timetable>
    <header>
        <h1 if={stop}>{stop}</h1>
    </header>

    <section if={data}>
        <article>
            <h2>Platform 1</h2>

            <div class="panel panel-default" if={data.platformOne.lineOne.length}>
                <div class="panel-heading">
                    17 { data.platformOne.lineOne[0].destination}
                </div>
                <table class="table">
                    <tr each={journey in data.platformOne.lineOne}>
                        <td class="timeUntil">{journey.timeUntil}</td>
                        <td class="arrivalTime">{journey.arrivalTime}</td>
                    </tr>
                </table>
            </div>

            <div if={data.platformOne.lineTwo.length > 0}>
                <h3>18 { data.platformOne.lineTwo[0].destination}</h3>

                <ul>
                    <li each={journey in data.platformOne.lineTwo}>
                        <span class="timeUntil">{journey.timeUntil}</span>
                        <span class="arrivalTime">{journey.arrivalTime}</span>
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <h2>Platform 2</h2>

            <div if={data.platformTwo.lineOne.length > 0}>
            <h3>17 { data.platformTwo.lineOne[0].destination }</h3>
                <ul>
                    <li each={journey in data.platformTwo.lineOne}>
                        <span class="timeUntil">{journey.timeUntil}</span>
                        <span class="arrivalTime">{journey.arrivalTime}</span>
                    </li>
                </ul>
            </div>

            <div if={data.platformTwo.lineTwo.length > 0}>
            <h3>18 { data.platformTwo.lineTwo[0].destination }</h3>

                <ul>
                    <li each={journey in data.platformTwo.lineTwo}>
                        <span class="timeUntil">{journey.timeUntil}</span>
                        <span class="arrivalTime">{journey.arrivalTime}</span>
                    </li>
                </ul>
            </div>
        </article>

    </section>

    <script>

        this.data = this.opts.data;
        this.stop = this.opts.stop;

    </script>

</timetable>
