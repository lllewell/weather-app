const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', function (event){
    event.preventDefault();

    const q = queryInput.value.trim();
    
    // Get a error 401 for my API key, generated a new one and still getting that error
    fetch('https:/wwww.api.openweathermap.org/data/2.5/forecast?q=' + q + '&appid=9e50b50ffff8484602ef079e171d8347')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('SEARCH');
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
});