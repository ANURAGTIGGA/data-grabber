import {useState} from 'react';
import InputContainer from '../InputContainer/InputContainer.jsx';
import OutputContainer from '../OutputContainer/OutputContainer.jsx';
import './queryContainer.scss';
import fetchData from '../../utils/fetchData.js';

export default function QueryContainer({isCustomQuery}){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('empty');

    async function getData(query){
        try{
            setIsLoading(true)
            const result = await fetchData(query)
            setData(result);
        } catch(err){
            setData([]);
            setError('failed')
        } finally{
            setIsLoading(false)
        }
    }

    return (
        <div className="query-container">
            <InputContainer onQueryRun={getData} isCustomQuery={isCustomQuery}></InputContainer>
            <OutputContainer data={data} isLoading={isLoading} errorType={error}></OutputContainer>
        </div>
    )
}