import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';


function ProductItem() {
    const {id} = useParams();
    const shoe = Data[id];
    

    if(!shoe){
        return <h2>Product not found</h2>
    }

    return(
        <>
        <div  className="link" >
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={500} />
                    
        </div>
        </>
    );
}
export  default  ProductItem;