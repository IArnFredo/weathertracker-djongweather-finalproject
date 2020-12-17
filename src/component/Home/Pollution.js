import React from 'react';
import styled from 'styled-components';
import device from '../responsive/Device';
import SmallLabel from './SmallLabel';
import Text from './Text';

const WeatherDetailsWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  background-image: linear-gradient(to bottom, #77a3e1, #64b2ea, #55c1ed, #50ceec, #5bdbe7);
  border-radius: 10px;
  align-self: flex-start;
`;

const WeatherDetail = styled.div`
  padding: 10px;
  @media ${device.tablet} {
    padding: 20px 10px;
  }
  @media ${device.laptop} {
    padding: 20px 10px;
  }
`;


const Pollution = ({ pollution }) => {
  const {
    airQua,
    co,
    no,
    no2,
    o3,
    nh3
  } = pollution;

  let aqi = null;
  if (airQua == 1) {
    aqi = "Good";
  } else if (airQua == 2) {
    aqi = "Fair";
  } else if (airQua == 3) {
    aqi = "Moderate";
  } else if (airQua == 4) {
    aqi = "Poor";
  } else if (airQua == 5) {
    aqi = "Very Poor";
  }

  return(
    <WeatherDetailsWrapper>
      <WeatherDetail>
        <SmallLabel align="center" weight="400">
          {aqi}
        </SmallLabel>
        <Text align="center">Air Quality</Text>
      </WeatherDetail>
      <WeatherDetail>
        <SmallLabel align="center" weight="400">
          {co} μg/m<sup>3</sup>
        </SmallLabel>
        <Text align="center">Carbon Monoxide (CO)</Text>
      </WeatherDetail>
      <WeatherDetail>
        <SmallLabel align="center" weight="400">
          {no} μg/m<sup>3</sup>
        </SmallLabel>
        <Text align="center">Nitrogen Monoxide (NO)</Text>
      </WeatherDetail>
      <WeatherDetail>
        <SmallLabel align="center" weight="400">
          {no2} μg/m<sup>3</sup>
        </SmallLabel>
        <Text align="center">Nitrogen Dioxide (NO<sub>2</sub>)</Text>
      </WeatherDetail>
      <WeatherDetail>
        <SmallLabel align="center" weight="400">
          {o3} μg/m<sup>3</sup>
        </SmallLabel>
        <Text align="center">Ozone (O<sub>3</sub>)</Text>
      </WeatherDetail>
      <WeatherDetail>
        <SmallLabel align="center" weight="400">
          {nh3} μg/m<sup>3</sup>
        </SmallLabel>
        <Text align="center">Ammonia (NH<sub>3</sub>)</Text>
      </WeatherDetail>
    </WeatherDetailsWrapper>
  )
}

  export default Pollution;
