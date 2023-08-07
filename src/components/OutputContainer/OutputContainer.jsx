import {useState, useEffect} from 'react';
import ListView from '../../common/components/ListView.jsx';
import GridView from '../../common/components/GridView.jsx';
import ErrorState from '../../common/components/ErrorState.jsx';
import Loader from '../../common/components/Loader.jsx';
import './outputContainer.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function OutputContainer({data, isLoading, loadMore}){
    const noPerPage = 10;
    const [isListType, setIsListType] = useState(true);
    const [visibleData, setVisibleData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        setVisibleData(data.slice(0,noPerPage));
        setHasMore(true);
        setCurrentPage(1);
    },[data])

    function fetchData(){
        if(visibleData.length >= data.length){
            setHasMore(false);
        } else {
            const last = currentPage * noPerPage;
            const first = last - noPerPage;
            const currentList = data.slice(first, last);
            setCurrentPage((currentPage)=>currentPage+1);
            //mimicking async behaviour
            setTimeout(()=>{
                const currentVisible = [...visibleData].concat(currentList)
                setVisibleData(currentVisible);
            },500);
        }
    }

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
            <div id="scrollableDiv" className="scrollable-container">
            <InfiniteScroll
                dataLength={visibleData.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                scrollableTarget="scrollableDiv"
            >
            {
                isLoading ? <Loader isLoading={isLoading} loaderType={isListType ? 'list' : 'grid'}></Loader> : (
                    data.length > 0 ? (isListType ? <ListView data={visibleData}></ListView> : <GridView data={visibleData}></GridView>) :
                        <ErrorState errorType="empty"></ErrorState>
                )
            }
            </InfiniteScroll>
            </div>
        </div>
    )
}