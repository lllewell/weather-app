const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const q = queryInput.value.trim();

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + q + '&appid=b4b4f7d3e6c6628438377015d4c26f2e&units=imperial')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('SEARCH');
            console.log(data);

            for (let i = 0; i < data.list.length; i = i + 8) {
                const list = data.list[i];
                const columnEl = document.createElement('div');
                const cardEl = document.createElement('div');
                const dateEl = document.createElement('h3');
                const imgEl = document.createElement('img');
                const iconEl = list.weather[0].icon;
                const tempEl = document.createElement('p');
                const windSpeedEl = document.createElement('p');
                const humidityEl = document.createElement('p');
            

                columnEl.className = 'col-4 justify-content-center';
                cardEl.className = 'card p-3 m-3 col-4 align-items-center';
                imgEl.className = 'imgEl';
                dateEl.textContent = dayjs(list.dt_txt).format('MM/DD/YYYY');
                imgEl.src = 'https://openweathermap.org/img/wn/' + iconEl + '@2x.png';
                tempEl.textContent = ('Temp: ' + list.main.temp + '°F');
                windSpeedEl.textContent = ('Wind Speed: ' + list.wind.speed + 'mph');
                humidityEl.textContent = ('Humidity: ' + list.main.humidity + '%');

                columnEl.appendChild(cardEl);
                columnEl.appendChild(imgEl);
                cardEl.appendChild(dateEl)
                // Icon not showing up for some reason
                cardEl.appendChild(imgEl);
                cardEl.appendChild(tempEl);
                cardEl.appendChild(windSpeedEl);
                cardEl.appendChild(humidityEl);
                resultsList.appendChild(cardEl);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
});