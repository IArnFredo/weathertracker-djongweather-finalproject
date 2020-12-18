import React from 'react';
import "./home.css";
import HeroSection from "../../HeroSection";
import { homeObjOne} from './Data';
import SearchCity from './SearchCity';
import Result from './Result';
import NotFound from './NotFound';
import 'leaflet/dist/leaflet.css';
import Alert from './Alert';
import Pollution from './Pollution';

class Home extends React.Component {
  state = {
    value: '',
    weatherInfo: null,
    alerts: null,
    pollution: null,
    error: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSearchCity = e => {
    e.preventDefault();
    const { value } = this.state;
    const APIkey = 'e808570464dcab19cfb9b350169d4bb0';

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          lat: data1.coord.lat,
          lon: data1.coord.lon,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        const lat = data1.coord.lat;
        const lon = data1.coord.lon;

        //fetch data pollution dan alert
        const ale = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${APIkey}`;
        const poll = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`;
        Promise.all([fetch(ale), fetch(poll)])
          .then(([res3,res4]) => {
            if (res3.ok && res4.ok){
              return Promise.all([res3.json(), res4.json()]);
            }
            throw Error(res3.statusText, res4.statusText);
          })
        .then(([data3, data4]) => {
          const alert = {
            event: data3.alerts,
          }

          if (alert.event == null){
            console.log(alert);
          }else{
          const alerts = {
              sender: data3.alerts[0].sender_name,
              event: data3.alerts[0].event,
              start: data3.alerts[0].start,
              end: data3.alerts[0].end,
              desc: data3.alerts[0].description,
            }
            this.setState({
              alerts,
              error: false,
            });
          }
          const pollution = {
            airQua: data4.list[0].main.aqi,
            co: data4.list[0].components.co,
            no: data4.list[0].components.no,
            no2: data4.list[0].components.no2,
            o3: data4.list[0].components.o3,
            nh3: data4.list[0].components.nh3,
          }
          this.setState({
            pollution,
            error: false,
          });
        })
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  render() {
    const { value, weatherInfo, alerts, pollution, error} = this.state;
    let a = alerts;
    let b = null;

    if (alerts == null){
      a = <p style={{visibility: 'hidden'}}>There is no Weather Alert in This Area.</p>

    }else {
      a = <Alert alerts={alerts}/>
      this.state.alerts = null;

    }

    if (pollution !== null){
      a = <p style={{visibility: 'visible', color: 'white'}}>There is no Weather Alert in This Area.</p>

    }
    else {
      console.log(alerts);
    }

    if (pollution == null){
      console.log("nopoll");
    }
    else{
      b = <Pollution pollution={pollution}/>
    }

    if (weatherInfo == null) {
      b = <div style={{display: 'none'}}>{b}</div>
    }

    return (
      <>
      <HeroSection {...homeObjOne}/>
        <div className="WeatherWrapper">
          <SearchCity
            value={value}
            change={this.handleInputChange}
            submit={this.handleSearchCity}
            showResult={(weatherInfo || error) && true}
          />
          {weatherInfo && <Result weather={weatherInfo}/>}
          <div>
          {a}
          </div>
          <div>
          {b}
          </div>
          {error && <NotFound error={error} />}
        </div>
      </>
    );
  }
}

export default Home;
