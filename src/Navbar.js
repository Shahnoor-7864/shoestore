import React from 'react';
import {Link} from "react-router-dom";

function Navbar () {
return (
    <div className ="navs">
        <ul>
   <li> <Link to ="/">Home</Link> </li>
   <li> <Link to ="/About">About</Link></li>
    <li><Link to ="/Product">Product</Link></li>
     </ul>
    </div>

);
}
export default Navbar;