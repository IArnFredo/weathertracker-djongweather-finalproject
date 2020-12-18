import React from 'react';
import './Result.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import device from '../responsive/Device';
import ForecastHour from './ForecastHour';
import ResultFadeIn from './ResultFadeIn';
import BigLabel from './BigLabel';
import MediumLabel from './MediumLabel';
import SmallLabel from './SmallLabel';
import Text from './Text';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  visibility: hidden;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
  @media ${device.mobileL} {
    flex-basis: 100%;
  }
`;

const LocationWrapper = styled.div`
  flex-basis: 100%;
`;

const CurrentWeatherWrapper = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
  grid-gap: 1rem;
`;


const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 120px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;

const TemperatureWrapper = styled.div`
  padding: 20px;
`;

const Temperature = styled.h3`
  display: block;
  font-size: 40px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
`;

const WeatherDetailsWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  background-color: #0e4369;
  border-radius: 10px;
  align-self: flex-start;
`;

const WeatherDetail = styled.div`
  padding: 20px;
  @media ${device.tablet} {
    padding: 20px 10px;
  }
  @media ${device.laptop} {
    padding: 20px 10px;
  }
`;

const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

const Forecast = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  background-image: linear-gradient(to bottom, #0fbe53, #009992, #006da2, #003c78, #311034);
  border-radius:15px;
  margin-top: 20px;
  padding-top:20px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    order: 4;
  }
`;



const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    lat,
    lon,
    sunset,
    newsunset = sunset.slice(0, -1),
    sunrise,
    newsunrise = sunrise.slice(0, -1),
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = weather;
  let position = [lat,lon];
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

  const forecasts = forecast.map(item => (
    <ForecastHour
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={item.dt_txt.slice(11, 13) * 1}
    />
  ));
  let weatherIcon = null;

  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <Results>
      <LocationWrapper>
        <BigLabel>
          {city}, {country}
        </BigLabel>
        <SmallLabel weight="400">{date}</SmallLabel>
      </LocationWrapper>
      <CurrentWeatherWrapper>
        <WeatherIcon>{weatherIcon}</WeatherIcon>
        <TemperatureWrapper>
          <Temperature>{Math.floor(temp)}&#176; C</Temperature>
          <SmallLabel weight="400" firstToUpperCase>
            {description}
          </SmallLabel>
        </TemperatureWrapper>
      </CurrentWeatherWrapper>
      <WeatherDetailsWrapper>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {Math.floor(highestTemp)}&#176; C
          </SmallLabel>
          <Text align="center">High Temp</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {wind} Kph
          </SmallLabel>
          <Text align="center">Wind</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {newsunrise} AM
          </SmallLabel>
          <Text align="center">Sunrise</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {Math.floor(lowestTemp)}&#176; C
          </SmallLabel>
          <Text align="center">Low Temp</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {humidity}%
          </SmallLabel>
          <Text align="center">Rain</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {newsunset} PM
          </SmallLabel>
          <Text align="center">Sunset</Text>
        </WeatherDetail>
      </WeatherDetailsWrapper>
      <ForecastWrapper>
        <MediumLabel weight="400">Forecast</MediumLabel>
        <Forecast>{forecasts}</Forecast>
      </ForecastWrapper>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {city} {country}.
            Enjoyed our Feature.
          </Popup>
        </Marker>
      </MapContainer>
    </Results>
  );
};

export default Result;
