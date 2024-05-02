import { Image, Spinner } from 'react-bootstrap'
const Loading = () =>
{
    return (
        <>
        <div className="loading-screen">
                <Image className='mx-3' style={{maxWidth:'60px'}} src='/shrine-removebg-preview.png' alt='logo'/>
                <Spinner animation="grow" variant="light" />
                <Image className='mx-3' style={{maxWidth:'60px'}} src='/shrine-removebg-preview.png' alt='logo'/>
        </div>
        </>
    )
}

export default Loading