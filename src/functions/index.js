import { messageslist } from "../data"

export const updateReadMessage = (data) => {
    let new_msg = null
    messageslist.map((msg, indx) => {
        if(msg.id == data.id){
            new_msg = {...msg, isRead: true}
            console.log(new_msg)
            messageslist[indx] = new_msg
        }
    })

    
}