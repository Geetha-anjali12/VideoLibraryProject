import axios from "axios";
import { useEffect, useState } from "react";

export function Form(){
    const[data, setData] = useState([]);

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>{
        setData(res.data);
        console.log(res.data);
      })  
    },[])
    return(
<div>
    {
        data.map((item,index)=>(
            <p key={index}>{item.title} <img src={item.image} alt="" /></p>
        ))
    }
</div>
    )
}