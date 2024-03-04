import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CustomApiHook=(url)=>{
  const [response,setProducts]=useState([])
  const [loading,setLoading]=useState(true)
  const [error, setError]=useState(false)

  useEffect(()=>{
   (async()=>{
    await axios.get(url).then((res)=>{
      setProducts(res);
      setLoading(false);setError(false)
    }).catch(()=>{
      setLoading(false);
      console.log("error in featching data!");
      setError(true);
    })

   })()
  },[])
  return {
    response,
    loading,
    error
  }
}
export default CustomApiHook;