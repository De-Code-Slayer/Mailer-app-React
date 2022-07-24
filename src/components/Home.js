import { Link } from "react-router-dom";
import { messagelist } from './Message';
// import React, { useState } from "react";

function Home(){
    // const [message, setNumber] = useState("[0,1,2,3,4]");

    const user = "Jaime";
    const newmessage = messagelist.filter((message => message.isRead === true )).length;
    
    const number = messagelist.length;

  //  const toggle = () => {
  //       console.log("toggle");
  //   };

    return  <div className="App">
    <header className="App-header">
      <h1>MAILER APP</h1>
      <p>Hello {user} you have { newmessage } new messages out of {number}</p>

      <Link to='/inbox'><button > View Inbox</button></Link>
      
    </header>
  </div>
}


export default Home;