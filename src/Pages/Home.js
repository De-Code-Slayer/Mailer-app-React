import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../ContextProviders";
import { messageslist, setMessageList } from "../data";
import { loginUser } from "../functions";
// import React, { useState } from "react";

function Home() {
    // const [message, setNumber] = useState("[0,1,2,3,4]");
    // "Jaime"
    const [user, setUser] = useState(null);
    const _user = useUser()
    const newmessage = _user.messages?.filter((message => message.isread === 0)).length;
    const [email, setEmail] = useState('')

    //  const toggle = () => {
    //       console.log("toggle");
    //   };

    const getUser =() => {
        loginUser(email).then(res => {
            console.log(res)
            setMessageList(res.messages)
            _user.addUserMessages(res.messages)
            _user.addUserData(res.user)
            setUser(res.user)
        })
    }

    return (
        <div className="w-full flex justify-center text-center space-y-2">
            {
                user ?
                    <div>
                        <h1 className="text-xl font-bold">MAILER APP</h1>
                        <p className="text-lg font-light">Hello {user.name} you have {newmessage} new message(s)</p>
                        <br />
                        <Link to='/inbox' className="my-5 p-4 py-2 bg-purple-800 text-white font-bold"> View Inbox</Link>
                    </div>
                    :
                    <div className="w-[60%] flex flex-col items-center">
                        <div>Enter Email To Login</div>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="px-4 py-2 w-[90%] border-2" />
                        <div onClick={() => getUser(email)} className="my-5 py-2 w-[90%] bg-primary text-white text-semibold hover:bg-gray-700 cursor-pointer">Fetch Emails</div>
                    </div>
            }

        </div>
    )
}


export default Home;