import './gridView.scss';

export default function GridView({data}){

    return (
        <section className="grid-view">
            <div className="card-wrap">
                {data.map((row,index)=>{
                    return (
                        <div className="card" key={index}>
                            <div className="card-content name">{row.contactName}</div>
                            <div className="card-content">
                                <div className="title">{row.contactTitle}</div>
                                <div className="company">Company : {row.companyName}</div>
                            </div>
                            <div className="card-content address">
                                <div>{`Address : ${row.address.city}, ${row.address.country}`}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}