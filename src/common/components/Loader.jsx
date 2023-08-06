import './Loader.scss';

export default function Loader({isLoading, loaderType}) {
    return (
        <div>
        {
            isLoading && (
                <div className={loaderType === 'list' ? 'list-loader' : 'grid-loader'}>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            )
        }
        </div>
    )
}