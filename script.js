const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const q = queryInput.value.trim();

    // API is still only for 5 days at 3 hour intervals, need to figure out how to get the five day forecast
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + q + '&appid=b4b4f7d3e6c6628438377015d4c26f2e&units=imperial')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('SEARCH');
            console.log(data);

            // for (let list of data.list) {
            for (let i = 0; i < data.list.length; i = i + 8) {
                const list = data.list[i];
                const columnEl = document.createElement('div');
                const cardEl = document.createElement('div');
                const dateEl = document.createElement('h3');
                const iconEl = document.createElement('img');
                // const iconElurl = 'https://openweathermap.org/img/wn/10d@2x.png'
                const tempEl = document.createElement('p');
                const windSpeedEl = document.createElement('p');
                const humidityEl = document.createElement('p');
                // History aside and button aren't showing up on page, need to troubleshoot
                const historyButton = document.createElement('button');
                const historyAside = document.createElement('aside');

                columnEl.className = 'col-6';
                cardEl.className = 'card p-3 m-3';
                historyAside.className = 'col-4 p-2 m-2';
                dateEl.textContent = dayjs(list.dt_txt).format('MM/DD/YYYY');
                iconEl = list.weather.icon;
                tempEl.textContent = ('Temp: ' + list.main.temp + '°F');
                windSpeedEl.textContent = ('Wind Speed: ' + list.wind.speed + 'mph');
                humidityEl.textContent = ('Humidity: ' + list.main.humidity + '%');
                historyButton.textContent = q;
                historyAside.textContent = historyButton;

                columnEl.appendChild(cardEl);
                columnEl.appendChild(historyAside);
                cardEl.appendChild(dateEl);
                // Icon not showing up for some reason
                cardEl.appendChild(iconEl);
                cardEl.appendChild(tempEl);
                cardEl.appendChild(windSpeedEl);
                cardEl.appendChild(humidityEl);
                resultsList.appendChild(cardEl);
                historyAside.appendChild(historyButton);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
});