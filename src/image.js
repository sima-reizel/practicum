import { useDispatch, useSelector } from "react-redux";
import {fetchAllImages} from './features/imageSlice';
import { useEffect } from "react";
import { useState } from "react";

export default function Image(){
  const [isLoading, setIsLoading] = useState(false);

    let disp=useDispatch();
    

    useEffect(() => {
      setIsLoading(true);
        disp(fetchAllImages())
        
        setIsLoading(false);     
    },);
    
    let imageArr1=useSelector(state=>state.image.imageArr)

return(
<>
 {isLoading? (<p>Loading...</p>) : (<><h2>Data:</h2>
  {imageArr1&&
  imageArr1.map(item=><div key={item.id}>{item.url}</div>)
  }
</>)}
</>)
}