import React from "react"
import axios from "axios"
const Background = ({ state }) => {
    const changeBackground = (description) => {
        const newDes = (description.split(" ").join("-"))
        const key = "Wj9Iv7sVJ_gtiPMfVka3shduMananSCRxpsUDffAW7Y"
        const url = `https://api.unsplash.com/search/photos?per_page=30&query=${newDes}&client_id=${key}`
        axios.get(url)
            .then(response => {
                const length = (response.data.results.length)
                const randomNumber = Math.floor(Math.random() * length)
                const randomPhoto = response.data.results[randomNumber]
                const color = (randomPhoto.color)
                const photoUrl = randomPhoto.urls.regular
                const body = document.body
                body.style.backgroundImage = `url(${photoUrl})`
            })
    }
    if (state.changeBackground) {
        changeBackground(state.description)
    }
    return (
        <div></div>
    )
}
export default Background