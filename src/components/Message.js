import { useLocation } from 'react-router-dom'

function Message(props) {

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
      
      const message = messageslist.find((message => message.id===props.id )
// {
//     // return <> 
//     // <Messagebox key={message.id} messages={message} />
//     // </>
// }
 );
   return <><Messagebox message={message} /></>


}

function Messagebox(props){
    const location = useLocation()
    // const { id } = location.state
    const { subject } = location.state
    const { content } = location.state

    return(
        <>
      <div> {subject} </div>
      <div> {content} </div>
{/* <div> {id} </div> */}
</>
    );
}

const messagelist =  [  
    {  
    id: "1",  
    "subject": "Hi Again",  
    "content": "Just wanted to check on you",  
      isRead: true  
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
  ];
export {messagelist}

export default Message ;
