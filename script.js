const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

function getWeatherByLocation(city){
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d102ce6f8a7f8c61a416505fdeb98697`
    ).then((res)=>res.json())
    .then((resData)=>{
        console.log(resData);
        addWeatherToPage(resData)
    });
}

function addWeatherToPage(data){
    const temp = Math.floor(data.main.temp - 273.15);
    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = 
    `<h2>
    <img src="https://openweathermap.org/img/wn/02d@2x.png" /> ${temp}°C
    <img src="https://openweathermap.org/img/wn/02d@2x.png" />
    </h2>`
    
    //console.log(weather);

    main.innerHTML = "";
    main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;
    console.log(city);

    if(city){
        getWeatherByLocation(city);
    }
});

