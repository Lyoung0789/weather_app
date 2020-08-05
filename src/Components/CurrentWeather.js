import React, {Component} from 'react'
import CurrentWeatherForm from './CurrentWeatherForm'
import Weather from './Weather'
import axios from 'axios'

class CurrentWeather extends Component{

    state={
        zipcode: "",
        main: {},
        wind: {},
        clouds: "money",
        response: false
    }

    handleChange = (event) =>{
        // debugger
        this.setState({
            zipcode: event.target.value
        })
        console.log(this.state.zipcode)
        
    }

    handleSubmit= event =>{
        event.preventDefault()
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode}&appid=ee22a7e87fa9ebff263a1cf970c98f37`)
        .then(response => {
            console.log("Response from api", response)
            const {main, wind, clouds} = response.data
            this.setState({
                main: main, 
                wind: wind,
                clouds: clouds, 
                response: true
            })
        })
        .catch(error =>{
            console.log("Error from api", error)
            this.setState({
                main: {},
                wind: {},
                clouds: {},
                response: false
            })
            
        })


    }

    render(){
        return(
            <div>
                <CurrentWeatherForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.zipcode}/>
                {this.state.response && <Weather weather={this.state}/>}
            </div>
        )
    }
}

export default CurrentWeather