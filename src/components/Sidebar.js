import React, { useState, useEffect } from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons';
import '../css/sidebar.css'
import SidebarChat from './SidebarChat'
import db from '../firebase';
import { useStateValue } from '../StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    const [rooms, setRooms] = useState([])

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
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton>
                    <Avatar src={user?.photoURL}></Avatar>
                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>


            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined></SearchOutlined>
                    <input type="text" placeholder="Search chatrooms.." />
                </div>
            </div>


            <div className="sidebar__chats">
            <SidebarChat addNewChat />
            {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar