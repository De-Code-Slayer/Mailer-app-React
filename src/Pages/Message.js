import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';

function Message(props) {

    const navigate = useNavigate()
    const location = useLocation()


    const message = location.state

    return (
        <div className='w-full h-full'>
            <Header navigate={navigate} />
            <div className='flex items-center space-x-4 px-5 py-2 border-b-2'>
                <img src={message.avatar} className="w-16 h-16 object-cover rounded-full" />
                <div className="flex flex-col space-y-2 justify-center" >
                    <span className='text-lg font-semibold'>{message.name}</span>
                    <span>Subject: {message.subject}</span>
                </div>

            </div>
            <div className='px-5 py-10 w-full h-[70%]'>
                <Messagebox message={message} />
            </div>
        </div>
    )


}

function Messagebox(props) {
    const location = useLocation()
    // const { id } = location.state
    const { subject } = location.state
    const { content } = location.state

    return (
        <>
            <div> {content} </div>
            {/* <div> {id} </div> */}
        </>
    );
}


export default Message;
