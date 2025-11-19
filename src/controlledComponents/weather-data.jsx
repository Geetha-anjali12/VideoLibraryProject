import axios from "axios";
import {useEffect,useState}from "react";
export function WeatherData(props)
{
    const[data,setData]=useState({name:'',main:{temp:0},weather:[{main:''}]});
    useEffect(()=>
    {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a5c1d993480b1629eb394b02b9ee6993&units=metric`)
        .then(response=>{setData(response.data);

        })
    },[props.city])
    return(
        <div className="p-3">
            <h3 className="text-center">{data.name}
            </h3>
            <div className="mt-4 fs-2 fw-bold">
                {
                    data.main.temp
                }
                &deg;C
            </div>
            <div className="mt-3 fs-4 fst-italic">
                Forecast:{data.weather[0].description}
            </div>
        </div>
    )
}