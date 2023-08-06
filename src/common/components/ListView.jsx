import './listView.scss';

export default function ListView({data}){

    return (
        <section className="list-view">
            <div>
                <div className="row-header">
                    <div className="row-content">Customer ID</div>
                    <div className="row-content">Name</div>
                    <div className="row-content">Title</div>
                    <div className="row-content">Company</div>
                </div>
                    {data.map((row,index)=>{
                        return (
                            <div className="row-wrap" key={index}>
                                <div className="row-content">{row.customerID}</div>
                                <div className="row-content">{row.contactName}</div>
                                <div className="row-content">{row.contactTitle}</div>
                                <div className="row-content">{row.companyName}</div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}