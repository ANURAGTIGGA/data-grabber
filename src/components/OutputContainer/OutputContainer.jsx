import {useState} from 'react';
import ListView from '../../common/components/ListView.jsx';
import GridView from '../../common/components/GridView.jsx';
import ErrorState from '../../common/components/ErrorState.jsx';
import Loader from '../../common/components/Loader.jsx';
import './outputContainer.scss';

export default function OutputContainer({data, isLoading}){
    const [isListType, setIsListType] = useState(true)

    return (
        <div className="output-container">
            {
                data.length > 0 && (
                    <div className="toggle-view">
                        <button onClick={()=>{setIsListType(true)}} className={isListType ? 'active' : ''}>
                            <span className="list"></span>
                        </button>
                        <button onClick={()=>{setIsListType(false)}} className={isListType ? '' : 'active'}>
                            <span className="grid"></span>
                        </button>
                    </div>)
            }
            <div className="scrollable-container">
            {
                isLoading ? <Loader isLoading={isLoading} loaderType={isListType ? 'list' : 'grid'}></Loader> : (
                    data.length > 0 ? (isListType ? <ListView data={data}></ListView> : <GridView data={data}></GridView>) :
                        <ErrorState errorType="empty"></ErrorState>
                )
            }
            </div>
        </div>
    )
}