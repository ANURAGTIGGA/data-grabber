import './header.scss';

export default function Header({isCustomQuery, onTabChange}){

    return (
        <header>
            <div className="tabs-wrap">
                <button onClick={()=>onTabChange(true)} className={isCustomQuery ? "tabs active" : "tabs"}>Custom Queries</button>
                <button onClick={()=>onTabChange(false)} className={isCustomQuery ? "tabs" : "tabs active"}>Predefined Queries</button>
            </div>
        </header>
    )
} 