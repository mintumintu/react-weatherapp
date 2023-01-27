import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {ContainerDiv,AboutHeading,HorizontalLine,ValueDisplay,ValueDisplayContainer} from '../styles'

const WeatherDataDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const SecondHeading = styled.h2`
    font-size:40px;
    color:white;
    background:blue;
    margin:0px;
`;

function WeatherData() {
    const [place,setPlace]= useState('Bhawanipatna')
    const [weatherdata,setWeatherData]= useState({
        "location": {
            "name": "Bhawanipatna",
            "region": "Orissa",
            "country": "India",
            "lat": 19.9,
            "lon": 83.17,
            "tz_id": "Asia/Kolkata",
            "localtime_epoch": 1674834230,
            "localtime": "2023-01-27 21:13"
        },
        "current": {
            "last_updated_epoch": 1674833400,
            "last_updated": "2023-01-27 21:00",
            "temp_c": 19.4,
            "temp_f": 66.9,
            "is_day": 0,
            "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                "code": 1000
            },
            "wind_mph": 3.1,
            "wind_kph": 5.0,
            "wind_degree": 133,
            "wind_dir": "SE",
            "pressure_mb": 1013.0,
            "pressure_in": 29.92,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 29,
            "cloud": 0,
            "feelslike_c": 19.4,
            "feelslike_f": 66.9,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "uv": 1.0,
            "gust_mph": 6.5,
            "gust_kph": 10.4
        }
    });

    // fetch(`http://api.weatherapi.com/v1/current.json?key=1d20244357be420ea0a153741232701&q=${place}`).then((response)=>{
    //     response.json()
    // }).then((response)=>setWeatherData(response));

  return (
    <>
    <SecondHeading>{weatherdata.location.name}</SecondHeading>
    <WeatherDataDiv>
        <ContainerDiv>
            <AboutHeading>
                Temperature
            </AboutHeading>
            <HorizontalLine />
            <ValueDisplayContainer>
            <ValueDisplay>
                {weatherdata.current.temp_c}<sup><sup>.</sup>c</sup>
            </ValueDisplay>
            <ValueDisplay>
            {weatherdata.current.temp_f}<sup><sup>.</sup>f</sup>
            </ValueDisplay>
            </ValueDisplayContainer>
        </ContainerDiv>
    </WeatherDataDiv>
    </>
  )
}

export default WeatherData;
