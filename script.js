const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', function (event){
    event.preventDefault();

    const q = queryInput.value.trim();
    

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + q + '&appid=b4b4f7d3e6c6628438377015d4c26f2e&units=imperial&cnt=5')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('SEARCH');
        console.log(data);

        for (let list of data.list) {
            const columnEl = document.createElement('div');
            const cardEl = document.createElement('div');
            const dateEl = document.createElement('h3');
            const iconEl = document.createElement('img');
            const tempEl = document.createElement('p');
            const windSpeedEl = document.createElement('p');
            const humidityEl = document.createElement('p');
  
            columnEl.className = 'col-6';
            cardEl.className = 'card p-3 m-3';
            dateEl.textContent = list.dt_txt;
            iconEl.textContent = list.weather.icon;
            tempEl.textContent = list.main.temp;
            windSpeedEl.textContent = list.wind.speed;
            humidityEl.textContent = list.main.humidity;

            columnEl.appendChild(cardEl);
            cardEl.appendChild(dateEl);
            cardEl.appendChild(iconEl);
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