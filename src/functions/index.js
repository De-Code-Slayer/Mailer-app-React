import { messageslist } from "../data"

export const sendupdateReadMessage = async (data) => {
    await update_message(data).then(res => console.log(res))
}

export const loginUser = (email) => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(async user => {
                const response = await user.json()
                resolve(response)
            }).catch((err) => console.warn(err))
    })
}

export const get_user_messages = (user) => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id
            })
        })
            .then(async user => {
                const response = await user.json()
                resolve(response)
            }).catch((err) => console.warn(err))
    })
}

export const update_message = (data) => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3000/update/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isread: data.isread,
                id: data.id
            })
        })
            .then(async user => {
                const response = await user.json()
                resolve(response)
            }).catch((err) => console.warn(err))
    })
}

export const sendEmail = async (data) => {
    return loginUser(data.recieverEmail).then(res => {
        return new Promise((resolve, reject) => {
            return fetch('http://localhost:3000/add/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    senderid: data.senderid,
                    receiverid: res.user.id,
                    subject: data.subject,
                    content: data.content,
                    avatar: data.avatar,
                    name: data.name,
                    isread: data.isread
                })
            })
                .then(async user => {
                    const response = await user.json()
                    resolve(response)
                }).catch((err) => console.warn(err))
        })
    })
}