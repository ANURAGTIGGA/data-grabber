import {useState} from 'react';
import './inputContainer.scss';
import preDefinedQueries from '../../data/queries.js';

export default function InputContainer({onQueryRun, isCustomQuery}){
    const [query, setQuery] = useState('');
    const [disabled, setDisabled] = useState(true);
    function onClear(){
        setQuery('');
        setDisabled(true);
    }

    function onHandleChange(e){
        setQuery(e.target.value)
        if(query && query.length > 3){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <div className="input-section">
        {
            isCustomQuery ? (
                <div className="input-wrap">
                    <textarea value={query} onChange={(e)=>onHandleChange(e)} placeholder="Enter your query here!"></textarea>
                    <section className="actions">
                        <button onClick={()=>onQueryRun(null)} disabled={disabled} className={disabled ? 'disabled' : ''}>RUN</button>
                        <button onClick={onClear}>CLEAR</button>
                    </section>
                </div>
            ) : (
                <div className="input-wrap predefined">
                    {
                    preDefinedQueries.map((item)=>{
                        return (
                            <div key={item.id} className="queries">
                                <p>{item.query}</p>
                                <button onClick={()=>onQueryRun(item.condition)}>RUN</button>
                            </div>
                        )
                    })
                    }
                </div>
            )
        }
            
        </div>
    )
}