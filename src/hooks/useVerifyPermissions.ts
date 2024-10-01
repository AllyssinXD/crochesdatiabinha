import { useEffect, useState } from "react";
import axios from "axios";

export default function useVerifyPemissions(permission: string, onError: Function){
    const [isAllowed, setIsAllowed] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState('');
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(()=>{
      axios.post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/auth/verify',
        JSON.stringify({permission: permission}),
        {
          withCredentials: true
        }
        ).then(res=>{
          setData(res.data)
          setIsAllowed(true)
        }).catch(err=>{
          setError(JSON.stringify(err))
          onError()
          console.log(JSON.stringify(err))
        }).finally(()=>{
          setIsFetching(false);
        })
    },[]);

    return {isAllowed, data, error, isFetching}
}
    