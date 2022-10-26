let wheater={
    apyKey:'insert your api key here (website I used to https://openweathermap.org/api)',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+
        "&units=metric"+
        "&appid="+
        this.apyKey).then((response)=>response.json()).then((data)=>this.display(data));
    },
    display: function(data){
        const {name}=data;
        const {icon , description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name, icon ,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".temperature").innerHTML=temp+"°C";
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".humidity").innerHTML="Humidity"+humidity+"%";
        document.querySelector(".wind").innerHTML="Winde"+speed+"km/h";
    }
}

function findWeather(){
    var cityName=document.getElementById("searchBar").value;
    document.getElementById("searchBar").value="";
    wheater.fetchWeather(cityName);
}