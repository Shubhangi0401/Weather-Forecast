class Weather {

    constructor() {
        this.key = '7a6fb09b5d5a337a5a9bef6bf00a14d1';
    }

    async getDetails(city) {

        const pageResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a6fb09b5d5a337a5a9bef6bf00a14d1&units=metric`);

        if (pageResponse.status !== 200) {
            return {
                type: 'error',
                data: pageResponse
            }
        } else {
            const resultData = await pageResponse.json();
            return {
                type: 'success',
                data: resultData
            }
            
        }
    }
}

