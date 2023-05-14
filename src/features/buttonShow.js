import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function ButtonShow(){
    let navigate=useNavigate();
  
    return(  
    <button ><Link to="./image">to show images</Link></button>
    )
}


