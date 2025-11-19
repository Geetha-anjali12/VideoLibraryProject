import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function FakeStoreDetails()
{
    const[product,setproduct]=useState({id:0,category:null,title:null,description:null,price:0,image:null,rating:{rate:0,count:0}});
    let params=useParams();
    useEffect(()=>
    {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>
        {
            setproduct(response.data);
        }
        )
    
    },[params.id])
    return(
        <div>
            <h2>Details</h2>
            <div className="card m-2 p-2 w-50">
                <img src={product.image} className="card-img-top" height="150"/>
                <div className="card-header">
                    <div>{product.title}</div>
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}