
export const View = (() => {
    const imgCondition = document.querySelector('.cond-img');
    const condition = document.querySelector('.cond-label');

    const location = document.querySelector('.location');
    const locFirst = document.createElement('span');
    const timeDate = document.querySelector('.time-date');
    const pinIcon = document.createElement('i');
    pinIcon.classList.add('fa-solid');
    pinIcon.classList.add('fa-location-dot');
    
    
    const celcius = document.querySelector('.celcius');
    const fahrenheit = document.querySelector('.fahrenheit');

    const humidity = document.querySelector('.humidity-result');

    const windDir = document.querySelector('.wind-direction');
    const gustKph = document.querySelector('.gust-kph');
    const gustMph = document.querySelector('.gust-mph');
    const speedKph = document.querySelector('.speed-kph');
    const speedMph = document.querySelector('.speed-mph');


    const displayResults = async (obj) => {
        try{
            let data = await obj;
        
            imgCondition.src = data.current.condition.icon;
            condition.textContent = data.current.condition.text;
            locFirst.textContent = ` ${data.location.name}, ${data.location.country}`
            location.appendChild(pinIcon);
            location.appendChild(locFirst)
            timeDate.textContent = data.location.localtime;
            celcius.textContent = `${data.current.temp_c}°C`;
            fahrenheit.textContent = ` ${data.current.temp_f}°F`;
            humidity.textContent = `${data.current.humidity}%`;
            windDir.textContent = `${data.current.wind_dir}`;
            gustKph.textContent = `${data.current.gust_kph} kph`;
            gustMph.textContent = `${data.current.gust_mph} mph`;
            speedKph.textContent = `${data.current.wind_kph} kph`;
            speedMph.textContent = `${data.current.wind_mph} mph`;

            document.querySelector('h4').textContent = '';
        }
        catch{
            document.querySelector('h4').textContent = 'City not found';
        }
        
        
    }   

    return {
        displayResults,
    }
})();