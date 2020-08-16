import React from "react"
import M from 'materialize-css';
const Card = ({ state, updateUnit }) => {
    const switchUnit = () => {
        if (state.unit === "imperial") {
            return (
                <button id="unitButton" className=" right btn-floating waves-effect waves-light" onClick={() => {
                    updateUnit("metric")
                }} >℃</button >
            )
        }
        else {
            return (
                <button id="unitButton" className="right btn-floating waves-effect waves-light" onClick={() => {
                    updateUnit("imperial")
                }}>℉</button>

            )
        }
    }
    const unitSymbol = () => {
        if (state.unit === "imperial")
            return "℉"
        else
            return "℃"
    }
    if (state.temp) {
        return (
            <div id="card " className=" teal lighten-4 row card hoverable">
                <div className="card-content">
                    <div >
                        <h4 id="city">{state.city},{state.country}</h4>
                        <h6>{state.description}
                            <img id="icon" className="right" src={state.icon} alt="" /></h6>

                    </div>

                    <div id="temp">
                        <h1>{state.temp}{unitSymbol()} </h1>
                    </div>


                    <div>
                        <h4>Feels like:{state.feelsLike}{unitSymbol()} </h4>
                        <h4>Humidity:{state.humidity}%</h4>
                    </div>
                    {switchUnit()}
                </div>

            </div >

        )
    }
    return (
        <div></div>
    )


}
export default Card