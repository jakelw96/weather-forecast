import React from 'react';

function Forecast() {
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=84404&units=imperial&appid="
    let maxTemp = ""
    let weatherDataArr = []
    
    const getWeatherData = async () => {
        
        // fetch(apiUrl).then(function(response) {
        //     if (response.ok) {
        //         response.json().then(function(data) {
        //             console.log(data)
                    
                    
        //             // maxTemp = data.list[0].main.temp_max + "/u00B0"
        //         })
        //     } else {
        //         console.log("Error: " + response.statusText)
        //     };
        // });
        const response = await fetch(apiUrl)
        const data = await response.json();
        data.list.slice(0, 5).forEach(res => {
            let dayForecasts = {
                maxTemp: res.main.temp_max,
                minTemp: res.main.temp_min,
                icon: res.weather.icon
            }
            weatherDataArr.push(dayForecasts)
        })
    };
    getWeatherData()
    console.log(weatherDataArr)


    

    
    console.log(maxTemp)

    
    return(
        <div>
            <p>{maxTemp}</p>
        </div>
    )
}

export default Forecast