import { Avatar, FormControl, IconButton, Select, MenuItem, Button } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import axios from '../axios'
import MicIcon from '@material-ui/icons/Mic';
import '../css/chat.css'
import { useParams } from 'react-router-dom'
import db from '../firebase';
import { useStateValue } from '../StateProvider'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import SidebarChat from './SidebarChat'

function Chat({ id }) {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([])
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                ))
        }
    }, [id])

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))

        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        if(roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name)
                )
            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = async (e) => {
        e.preventDefault();

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    const createChat = () => {
        const roomName = prompt("Please enter a name for chatroom")

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="avatar">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                </div>

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen {" "}
                    {new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()
                    ).toUTCString()}
                    </p>
                </div>

                <div className="chat__headerInfoMobile">
                    <IconButton>
                        <Avatar src={user?.photoURL}></Avatar>
                    </IconButton>
                    <FormControl className="app__dropdown">
                        <Select variant="outlined" value={roomName}>
                        {rooms.map(room => (
                            <MenuItem value={room.data.name}><SidebarChat key={room.id} id={room.id} name={room.data.name}/></MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <div onClick={createChat} className="mobileChatAdd">
                        <h2>Add new chat</h2>
                    </div>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>


            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                    <span className="chat__name">{message.name}: </span>
                    {message.message}
                    <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                </p>
                ))}
            </div>


            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon></InsertEmoticon>
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message.." type="text"></input>
                    <div className="form__button">
                        <Button onClick={sendMessage} type="submit">Send message</Button>
                    </div>
                </form>
                <div className="mic__button">
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}


export default Chat