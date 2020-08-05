import React from 'react'

function CurrentWeatherForm(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Zipcode" onChange={props.handleChange} value={props.value}/>
            <input type="submit"/>
        </form>
    )
}

export default CurrentWeatherForm