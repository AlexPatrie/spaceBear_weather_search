let weather = {
    "apiKey": "fb7e2ac7e50f95f5164e18a577fd0769",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { sunrise, sunset } = data.sys;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "° F";
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed of: ${speed} mph`;
        
        //block for converting unix timestamp to UTC for SUNRISE
        function getSunrise() {
            let unixTimestamp = sunrise
            let date = new Date(unixTimestamp * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();  
            let formatTimeSunrise = `${hours}:${minutes - 2}`;
            document.querySelector(".sunrise").innerText = `Sunrise: ${formatTimeSunrise} AM`
            }
        getSunrise();
        
        //block for converting unix timestamp to UTC for SUNSET
        function getSunset() {
            let unixTimestamp = sunset
            let date = new Date(unixTimestamp * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();  
            let formatTimeSunset = `${hours}:${minutes - 2}`;
            document.querySelector(".sunset").innerText = `Sunset: ${formatTimeSunset} PM`
            }
        getSunset();

        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
    
};


document.querySelector(".input-btn").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

document.querySelector(".search-bar").addEventListener("click", function() {
    document.querySelector(".search-bar").value = ""
});