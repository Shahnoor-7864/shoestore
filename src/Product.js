import React from 'react';
import Data from "./Data";
import {Link} from "react-router-dom";
import ProductItem from './ProductItem';

function Product () {
   // console.log(Data);
   // console.log(Object.keys(Data));
return (
    <>
    <div>
        <h1>Welcome to product</h1>
        <div className = "productContainer">
            {Object.keys(Data).map(keyName => {
                const shoe = Data[keyName]
                return (
                    <div style = {{height : "200px" , width: "350px" , margin: "80px"}}>
                    <Link key ={keyName} className="link" to={`/product/${keyName}`} >
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={250} />
                    </Link>
                    </div>
                )
            })}
        </div>

    </div>
    
    {/*<div className="abs">
     <Link key = {props.title} className="link" to ={`/about${props.title}`}>
    <img src={props.img} style = {{height : "250px" , width: "270px"}} className="card-img-top" alt={props.img} />
    <h5 className= "card-title font-weight-bold"   >{props.title} </h5>
    </Link>
</div>*/}
    </>
);
}
export default Product;