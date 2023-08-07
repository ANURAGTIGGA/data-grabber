import {useState} from 'react';
import InputContainer from '../InputContainer/InputContainer.jsx';
import OutputContainer from '../OutputContainer/OutputContainer.jsx';
import './queryContainer.scss';
import fetchData from '../../utils/fetchData.js';

export default function QueryContainer({isCustomQuery}){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getData(query){
        setIsLoading(true)
        const result = await fetchData(query)
        setData(result);
        setIsLoading(false)
    }

    return (
        <div className="query-container">
            <InputContainer onQueryRun={getData} isCustomQuery={isCustomQuery}></InputContainer>
            <OutputContainer data={data} isLoading={isLoading}></OutputContainer>
        </div>
    )
}