import {useState}from "react";
import{WeatherData}from "../controlledComponents/weather-data";
export function Weather()
{
    const[cityname,setCityName]=useState('');
    const[city,setCity]=useState('Hyderabad');
    function handleNameChange(e)
    {
        setCityName(e.target.value);
    }
    function handleSearchClick()
    {
        setCity(cityname);
    }
    return(
        <div className="container-fluid bg-secondary p-4 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="bg-white w-50 p-3 rounded rounded-3" style={{height:'400px'}}>
                <h2 className="text-center">Weather API</h2>
                <div>
                    <div className="input-group">
                      <input onChange={handleNameChange} type="text" className="form-control" placeholder="Enter city name"/>
                      <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div className="mt-2">
                <WeatherData city={city}/>
                </div>
            </div>
        </div>
        
    
    )
}