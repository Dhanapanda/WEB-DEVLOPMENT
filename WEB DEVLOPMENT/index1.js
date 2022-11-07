let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");
searchButton.addEventListener('Click',(e)=>
{
e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';

});
const getWeather=async(city)=>
{
    try{
        const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9784900bb00bcd5e9cf7f8a8390d675d',
        {mode:'cors'}
        );
        const weatherData=await response.json();
        console.log(weatherData);
        const{name}= weatherData;
        const{feels_lik}=weatherData.main;
        const{id,main}=weatherData.weather[0];           
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_lik-273);
        if(id<300 && id>200)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<400 && id>300)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<600 && id>500)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<700 && id>600)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<700 && id>800)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id==800)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }

    }
    catch(error)
    {
        alert('city not found');
    }
};





window.addEventListener("load" ,()=>{
    let long;
    let lat;

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/";
        const api=' ${proxy}https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=9784900bb00bcd5e9cf7f8a8390d675d '
        fetch (api).then((response)=>{
            return response.json();

        })
        .then(data=>{
            const{name}=data;
            const{feels_like}=data.main;
            const{id,main}=data.weather[0];


            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);
            if(id<300 && id>200)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<400 && id>300)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<600 && id>500)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<700 && id>600)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id<700 && id>800)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            else if(id==800)
            {
                tempicon.src="http://openweathermap.org/img/wn/10d@2x.png"
            }
            console.log(data);
        })
        }
        )
    }
})