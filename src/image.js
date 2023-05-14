import { useDispatch, useSelector } from "react-redux";
import {fetchAllImages} from './features/imageSlice';
import { useEffect } from "react";

export default function Image(){
    let disp=useDispatch();
    useEffect(
        ()=>{disp(fetchAllImages())},[]
    )
    let imageArr1=useSelector(state=>state.image.imageArr)

return(<>
  {imageArr1.map(item=><div key={item.id}>{item.url}</div>)}
</>)
}