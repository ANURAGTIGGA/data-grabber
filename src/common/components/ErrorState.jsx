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
                        <span className="empty"></span>
                        <p>No Data to show!!</p>
                        <p>Try a query.</p>
                    </div>
                )
            }
                {
                type === 'failed' && (
                    <div className="error-wrap">
                        <span className="failed"></span>
                        <p>Data failed to load!!</p>
                        <p>Try Again.</p>
                    </div>
                )
            }
        </div>
    )
}