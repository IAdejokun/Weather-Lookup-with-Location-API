let getWeather = () => {
    let temperature = document.getElementById('temperature');
    let description = document.getElementById('description');
    let location = document.getElementById('location');
    let api =  "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "a962970e6012e7931301b2c1f93e3049"

   location.innerHTML = 'Locating. . .';

    let success = position => {
        console.log(position);
        let latitude = position.coords.latitude;
        let longitude =position.coords.longitude;

        let url = api + "?lat=" + latitude + "&lon=" + longitude +
                    "&appid=" + apiKey + "&units=metric";
    
         fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temperature.innerHTML = temp + "° C";
                location.innerHTML = data.name + " (" + latitude + "°, " + longitude + "°)";
                description.innerHTML = data.weather[0].main;
            });         
                }
    

    let error = () => location.innerHTML = "Unable to retieve your location";

    navigator.geolocation.getCurrentPosition(success, error);    
    
}   


getWeather();



