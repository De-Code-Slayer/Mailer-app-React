import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { get_user_messages, sendEmail, sendupdateReadMessage, updateReadMessage } from "../functions";
import { useUser } from "../ContextProviders";

function Inbox(props) {
    const { user } = props
    const _user = useUser()
    const navigate = useNavigate()
    const [messages, setMessages] = useState([])
    const [showMessageBox, setShowMessageBox] = useState(false)


    useEffect(() => {
        setMessages(_user.messages.sort((a, b) => (a.isread === b.isread) ? 0 : a.isread ? 1 : -1))
    }, [_user.messages, showMessageBox])


    return (
        <div className="flex flex-col w-full h-full relative">
            <Header navigate={navigate} />
            <div className="w-full h-[90%] overflow-y-scroll">
                {
                    messages.map((message) => {
                        return (<div key={message.id}><Messages messages={message} /></div>)
                    }
                    )
                }
                {!showMessageBox && <div onClick={() => setShowMessageBox(!showMessageBox)} className="p-2 px-4 bg-purple-700 text-white font-semibold absolute bottom-10 hover:bg-purple-500 cursor-pointer right-10">send Message</div>}
                {showMessageBox && <div className="absolute bottom-10 right-10 w-[40%] h-[45%]">
                    <SendMessageDialog setShowMessageBox={setShowMessageBox} />
                </div>}
            </div>
        </div>
    )
}



const SendMessageDialog = ({ setShowMessageBox }) => {
    const [recieverEmail, setRecieverEmail] = useState('')
    const [emailSubject, setEmailSubject] = useState('')
    const [emailText, setEmailText] = useState('')
    const [sendingEmail, setSendingEmail] = useState(false)

    const _user = useUser()


    const handleSendEmail = (from) => {
        setSendingEmail(true)
        const data = {
            senderid: from.id,
            recieverEmail,
            subject: emailSubject,
            content: emailText,
            avatar: from.avatar,
            name: from.name,
            isread: true
        }
        sendEmail(data).then((res) => {
            console.log(res)
            const new_msg = _user.messages
            new_msg.push(res)
            _user.addUserMessages(new_msg)
        }).finally(() => {
            setSendingEmail(false)
            setShowMessageBox(false)
        })
    }

    return (
        <div className="w-full h-full flex flex-col items-center bg-gray-200 rounded-xl shadow-xl border-2 border-purple-300 overflow-hidden space-y-3">
            <div className="w-full py-2 flex justify-between items-center border-b-2 bg-white">
                <span className="text-lg font-semibold px-2 text-purple-400">Send Message</span>
                <span onClick={() => setShowMessageBox(false)} className=" cursor-pointer text-sm font-semibold px-2 text-red-500">close</span>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <span className="self-start px-[5%]">Reciever's email</span>
                <input onChange={(e) => setRecieverEmail(e.target.value)} type="text" placeholder="email@mailerapp.com" className="px-4 rounded py-2 w-[90%] border-2" />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <span className="self-start px-[5%]">Subject</span>
                <input onChange={(e) => setEmailSubject(e.target.value)} type="text" placeholder="Re: My Email Purpose" className="px-4 py-2 rounded w-[90%] border-2" />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <span className="self-start px-[5%]">Message</span>
                <textarea onChange={(e) => setEmailText(e.target.value)} type="text" placeholder="type message..." className="px-4 rounded py-2 w-[90%] border-2" />
            </div>
            <div onClick={() => handleSendEmail(_user.user)} className={`w-[90%] self-center ${sendingEmail ? 'bg-gray-400' : 'bg-purple-700'} cursor-pointer text-center text-white font-semibold rounded-lg py-2`}>{sendingEmail ? "Sending..." : "Send"}</div>
        </div>
    )
}



function Messages(props) {
    const { id, subject, content, avatar, name, isread } = props.messages
    const _user = useUser()

    const updateReadMessage = (data) => {
        sendupdateReadMessage({ isread: true, id }).then(() => {
            let new_msg = _user.messages
            new_msg.map((msg, indx) => {
                if (data.id === msg.id) {
                    new_msg[indx] = { ...data, isread: 1 }
                }
            })
            _user.addUserMessages(new_msg)
        })
    }

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
                                {!isread && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                            </div>
                            <div className={isread == 1 ? 'text-gray-400 font-light' : 'text-gray-800 font-semibold'}>{subject} {content}</div>
                        </div>
                    </div>

                </Link>
            </div>
        </>
    );
}


export default Inbox;