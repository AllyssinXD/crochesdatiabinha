import axios from "axios";
import { useEffect, useState } from "react";

interface IReq<T>{
  data: T | null;
  error: string;
  isFetching: boolean;
}

export default function useGetWithToken<U>(endpoint: string) : IReq<U>{

  const [data, setData] = useState<U | null>(null); 
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  
  useEffect(()=>{
    //Fazer requisição
    axios.get(import.meta.env.VITE_REACT_APP_BACKEND_URL + endpoint, 
      {headers: 
        {Authorization: 'Bearer ' + localStorage.getItem('token')}
      })
      .then((res)=>{
        setData(res.data);
      })
      .catch((err)=>{
        setError(err.response.data.message);
        console.log(JSON.stringify(err.response))
      })
      .finally(()=>setIsFetching(false));
  },[]);

  return {data, error, isFetching};
}