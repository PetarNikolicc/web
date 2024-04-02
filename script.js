// Hämtar väderinformation från OpenWeather API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=2a5cd92af9c011054077e77a0c348cd0&units=metric')
  .then(response => response.json())
  .then(data => {
    // Extraherar relevant väderinformation från API-svar
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    // Uppdaterar footern med väderinformation
    const weatherElement = document.getElementById('weather');


    // Lägger till en ikon baserad på väderbeskrivningen
    const weatherIconElement = document.createElement('i');
    weatherIconElement.classList.add('wi');
    // Använder väderbeskrivningen för att välja vilken ikon som ska visas
    switch (weatherDescription) {
      case 'snow':
        weatherIconElement.classList.add('wi-snow');
        break;
      case 'rain':
        weatherIconElement.classList.add('wi-rain');
        break;
      // Fortsätter med andra väderbeskrivningar och deras motsvarande ikoner
      default:
        weatherIconElement.classList.add('wi-na'); // Standardikon om väderbeskrivningen inte matchar
    }
    // Lägger till ikonen till div-elementet
    weatherElement.prepend(weatherIconElement);
  })
  .catch(error => console.error('Error fetching weather data:', error));


  document.getElementById('themeToggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    this.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });