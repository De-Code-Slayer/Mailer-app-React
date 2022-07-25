import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { messageslist } from '../data'
import { useEffect, useState } from "react";
import { updateReadMessage } from "../functions";

function Inbox(props) {

    const navigate = useNavigate()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages(messageslist.sort((a, b) => (a.isRead === b.isRead) ? 0 : a.isRead ? 1 : -1))
    }, [messageslist])


    return (
        <div className="flex flex-col w-full h-full">
            <Header navigate={navigate} />
            {
                messages.map((message) => {
                    return (<div key={message.id}><Messages messages={message} /></div>)
                }
                )
            }
        </div>
    )
}

function Messages(props) {
    const { id, subject, content, avatar, name, isRead } = props.messages
    return (
        <>
            <div onClick={() => updateReadMessage(props.messages)}>
                <Link to='/message' state={props.messages} className="flex justify-between border-b-2 border-black/5 py-2 items-center w-full cursor-pointer hover:bg-gray-200">
                    <div className="flex p-2 ">
                        <div className="px-5">
                            <img src={avatar} className="w-10 h-10 object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex space-x-2 items-center" >
                                <span>{name}</span>
                                {!isRead && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                            </div>
                            <div className={isRead ? 'text-gray-400 font-light' : 'text-gray-800 font-semibold'}>{subject} {content}</div>
                        </div>
                    </div>

                </Link>
            </div>
        </>
    );
}


export default Inbox;