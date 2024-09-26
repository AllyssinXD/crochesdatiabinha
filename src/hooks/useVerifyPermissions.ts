import { useEffect, useState } from "react";
import axios from "axios";

export default function useVerifyPemissions(token: string | null ,permission: string, onError: Function){
    const [isAllowed, setIsAllowed] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState('');
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(()=>{
        axios.post(
            import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/auth/verify',
            JSON.stringify({permission: permission}),
            {
              headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": 'application/json'
              }
            }
          ).then(res=>{

            setData(res.data)
            setIsAllowed(true)

        }).catch(err=>{

            setError(JSON.stringify(err))
            onError()

        }).finally(()=>{

            setIsFetching(false);

        })
    },[]);

    return {isAllowed, data, error, isFetching}
}
    