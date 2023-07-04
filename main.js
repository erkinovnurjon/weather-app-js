const api = {
    key: "3936ee3c7e035cd478ae46764996d228",
    baseurl: "https://api.openweathermap.org/data/2.5/",
  };
  
  const searchBox = document.querySelector('.search-box');
  
  searchBox.addEventListener('keypress', setQuery);
  
  function setQuery(e) {
    if (e.keyCode === 13) {
      console.log(searchBox.value);
      getResults(searchBox.value);
    }
  }
  
  function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((response) => {
        return response.json();
      })
      .then((weather) => {
        displayResults(weather);
      });
  }
  
  function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let wether = document.querySelector('.weather');
    wether.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = Math.round(weather.main.temp_min) + '°c  / '  + Math.round(weather.main.temp_max) + '°c'
  }
  
  function dateBuilder(d) {
    let months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  



