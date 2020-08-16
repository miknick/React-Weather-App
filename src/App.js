import React, { Component } from 'react';
import axios from "axios"
import Card from "./card"
import M from "materialize-css"
import Background from "./Background"
class App extends Component {
  state = {
    city: null,
    country: null,
    temp: null,
    feelsLike: null,
    unit: "metric",
    humidity: null,
    description: null,
    icon: null,
    changeBackground: 0
  }
  updateData = (unit = this.state.unit) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=${unit}&appid=9bfe5fcd24fd56d9f071ae6b179cea7c`
    axios.get(url)
      .then(response => {
        const temp = response.data.main.temp
        const feelsLike = (response.data.main.feels_like)
        this.setState({
          feelsLike,
          temp,
          changeBackground: 0
        })
      })
      .catch(error => {
        alert("The city you searched for is not in the database. Please try another location.")
      })

  }
  fetchData = () => {
    const input = document.querySelector("#form input")
    const city = input.value
    if (city && city !== this.state.city) {
      const unit = "metric"
      this.setState({
        unit,
      })
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=9bfe5fcd24fd56d9f071ae6b179cea7c`
      axios.get(url)
        .then(response => {
          const country = response.data.sys.country
          const temp = response.data.main.temp
          const feelsLike = (response.data.main.feels_like)
          const humidity = response.data.main.humidity
          const description = response.data.weather[0].description
          const iconId = response.data.weather[0].icon
          const changeBackground = 1
          this.updateState(city, country, temp, feelsLike, humidity, description, iconId, changeBackground)

        })
        .catch(error => {
          alert("The city you searched for is not in the database. Please try another location.")
        })
    }
  }

  updateState = (city, country, temp, feelsLike, humidity, description, iconId, changeBackground) => {
    this.setState({
      city,
      country,
      temp,
      feelsLike,
      humidity,
      description,
      icon: `http://openweathermap.org/img/wn/${iconId}@2x.png`,
      changeBackground,
    })
  }
  updateUnit = (newUnit) => {
    const unit = newUnit
    this.setState({
      unit,
      changeBackground: 0
    })
    this.updateData(newUnit)
  }
  render() {
    return (
      <div>
        <nav id="form" className="naw-wrapper">
          <div className="container">
            <a href="#" className=" brand-logo left">Weather App</a>
            <ul className="right" >
              <li>
                <input className="white-text" placeholder="Search by location" type="text" /></li>
              <li>
                <a href="#" onClick={() => { this.fetchData("metric") }}
                  className="btn cyan">Search
                <i className="material-icons left">search</i></a>
                <Background state={this.state} ></Background>

              </li>
            </ul>
          </div>

        </nav>
        <div className="container">
          <Card updateUnit={this.updateUnit} state={this.state}></Card>
        </div>
      </div >
    )
  }
}
export default App