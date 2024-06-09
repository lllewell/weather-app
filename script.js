const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', function (event){
    event.preventDefault();

    const q = queryInput.value.trim();
    

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + q + '&appid=9e50b50ffff8484602ef079e171d8347&units=imperial')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('SEARCH');
        console.log(data);

        for (let result of data.list) {
            const columnEl = document.createElement('div');
            const dateEl = document.createElement('div');
            const iconEl = document.createElement('div');
            const tempEl = document.createElement('div');
            const windSpeedEl = document.createElement('div');
            const humidityEl = document.createElement('div');
  
            columnEl.className = 'col-12';
            dateEl.className = 'card p-3 m-3';
            dateEl.textContent = result.dt_txt;
            iconEl.textContent = result.weather.icon;

            columnEl.appendChild(dateEl);
            dateEl.appendChild(iconEl);
            resultsList.appendChild(columnEl);
        }
    })
    .catch(function (err) {
        console.log(err);
    });
});