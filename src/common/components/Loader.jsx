import './Loader.scss';

export default function Loader({isLoading, loaderType}) {
    console.log('loader', loaderType)
    return (
        <div>
        {
            isLoading && (
                loaderType === 'list' ? (
                    <div className="list-loader">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                ) : (
                    <div className="grid-loader">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                )
            )
        }
        </div>
    )
}