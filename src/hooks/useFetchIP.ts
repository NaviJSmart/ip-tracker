import { useState, useEffect } from "react";
import { IGeoAPI } from "../types/GeoTypes";
const useFetchIP = (param: string = "") => {
  const [data, setData] = useState<IGeoAPI | null>(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState<{
    code:number
    messages: string
  } | null>(null);
  console.log(isError);
  useEffect(() => {
    setLoading(true);
    setIsError(null)
    const fetchGeoWithIP = async () => {
        try {
        const dataRes = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_tFoGovzqjiPd5a05oURiL4KXndjcf&domain=${param}`
        );
        if(!dataRes.ok) {
         throw dataRes
        }
        
        const res: IGeoAPI = await dataRes.json();
        setData(res);
        setLoading(false);
      } catch (e: any) {
      setLoading(false)
    //   if (typeof e === "string") {
    //     setIsError(e.toUpperCase())
    // } else if (e instanceof Error) {
    //     setIsError(e.message) 
    console.error(e, 'my error');
    if(typeof e.text === 'function' ) {
      e.text().then((someError: any) => setIsError(JSON.parse(someError)))

    } else {
      setIsError({code: 500, messages: "Something went wrong !!!"})
    }
      
    
        
  
    
      }
    }
    fetchGeoWithIP()
    return () => {
      setData(null)
    }
  }, [param]);

  return { data, loading, isError };
};

export default useFetchIP;
