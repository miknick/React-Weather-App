import React from "react"
import App from "./App"
import axios from "axios"

const Data = ({ state }, updateState) => {

    const city = state.city
    if (city) {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=33b2838a0ab3e0f910c630a9fe092884`
        axios.get(url)
            .then(response => {
                console.log(response.data)
                const temp = response.data.main.temp
                const humidity = response.data.main.humidity
                this.props.updateState(temp, humidity)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div></div>
    )
}
export default Data
