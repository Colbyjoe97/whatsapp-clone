import './App.css';
import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import axios from './axios'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/api/messages/all')
      .then(response => {
        // console.log("Response: ", response)
        setMessages(response.data.results)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('4eefa8127dd75938c541', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])


  console.log("Messages: ", messages)

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (

        <div className="app__body">
        <Router>
          <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>
            </Switch>
        </Router>
      </div>
    )}
    </div>
  );
}
export default App;
