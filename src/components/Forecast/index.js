import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card} from 'react-bootstrap';
import { createIcon, getDayOfWeek } from '../../utils/helpers';
const apiKey = ""

function Forecast() {
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=84404&units=imperial&appid=" + apiKey;
    let weatherDataArr = []
    
    const getWeatherData = async () => {
        try {
            const response = await fetch(apiUrl)
        const data = await response.json();
        console.log(data)
        data.list.slice(0, 5).forEach(res => {
            let dayForecasts = {
                maxTemp: res.main.temp_max,
                minTemp: res.main.temp_min,
                icon: res.weather[0].icon,
                date: res.dt
            }
            weatherDataArr.push(dayForecasts)
        })
        } catch (err) {
            console.error(err)
        }
        // const response = await fetch(apiUrl)
        // const data = await response.json();
        // console.log(data)
        // data.list.slice(0, 5).forEach(res => {
        //     let dayForecasts = {
        //         maxTemp: res.main.temp_max,
        //         minTemp: res.main.temp_min,
        //         icon: res.weather[0].icon,
        //         date: res.dt
        //     }
        //     weatherDataArr.push(dayForecasts)
        // })
    };
    getWeatherData()
    console.log(weatherDataArr)

    

    
    return (
        <Container>
            <Row>
            {weatherDataArr.map((forecast) => {
                return(
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Title>{getDayOfWeek(forecast.date)}</Card.Title>
                        <Card.Img variant="top" src={createIcon(forecast.icon)} />
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>{forecast.maxTemp}</Col>
                                    <Col>{forecast.minTemp}</Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                ) 
            })}
            </Row>
      </Container>
    )
}

export default Forecast