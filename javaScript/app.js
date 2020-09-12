// 7a6fb09b5d5a337a5a9bef6bf00a14d1
const weather = new Weather;
const ui = new UI;

const searchCity = document.getElementById('btn');
const inputCity = document.getElementById('weather');
const reset = document.getElementById('btn2');

searchCity.addEventListener('click', () => {

    if (inputCity.value !== '') {

        weather.getDetails(inputCity.value)
            .then(data => {
                if (data.type === 'error') {
                    ui.showError('City Not Found, Enter a Valid Name !');
                } else if(data.type === 'success') {
                    ui.showData(data.data);
                }
            });
    } else {
        ui.showError('Please Enter a City');
    }
});

reset.addEventListener('click', () => {
    location.reload();
});
