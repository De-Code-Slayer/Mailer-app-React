import { Link } from "react-router-dom";

function Inbox(props) {

    const messageslist = [  
        {  
        id: "1",  
        "subject": "Hi Again",  
        "content": "Just wanted to check on you",  
          "isRead": true  
       },  
        {  
        id: "2",  
        "subject": "Hi Again",  
        "content": "Just wanted to check on you",  
          "isRead": true  
       },  
        {  
        id: "3",  
        "subject": "Hi Again",  
        "content": "Just wanted to check on you",  
          "isRead": true  
       },  
        {  
        id: "4",  
        "subject": "Hi Again",  
        "content": "Just wanted to check on you",  
          "isRead": true  
       },  
       {  
         id: "5",
         "subject": "Hi Friend",  
         "content": "Just wanted to let you know I’ m good",  
          "isRead": false  
        }  
      ] 
 const messages = messageslist.map((message)=>
{
    return <> 
    <Messages key={message.id} messages={message} />
    </>
}
 );
   return <>{messages}</>

}

function Messages(props){
    const {id, subject, content} = props.messages
    return(
<>


        <div>
        <div>{id}</div>
        <div>{subject}</div>
        <div>{content}</div>
        <Link to='/message' state={{ id: id, subject: subject, content: content }}><button > Read </button></Link>
       
        <hr/>
        </div>
        </>    
    );
}


export default Inbox;