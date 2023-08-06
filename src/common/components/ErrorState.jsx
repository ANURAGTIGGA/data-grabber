import {useState, useEffect} from 'react';
import './errorState.scss';

export default function ErrorState({errorType}){
    const [type, setType] = useState('');

    useEffect(()=>{
        setType(errorType)
    },[errorType])

    return (
        <div>
            {
                type === 'empty' && (
                    <div className="error-wrap">
                        <p>No Data to show!!</p>
                        <p>Try a query.</p>
                    </div>
                )
            }
        </div>
    )
}