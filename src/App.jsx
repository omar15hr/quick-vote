import { useState } from "react"
import { PersonAdd } from "./components/PersonAdd"
import { PersonList } from "./components/PersonList"
import { io } from "socket.io-client"
import { useEffect } from "react"


const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket'],
  });
  return socket;
}

function App() {

  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);

  useEffect(() => {
    console.log(socket)
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true);
    })
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false);
    })
  }, [socket]);

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          {
            online
              ? <span className="text-success"> Online</span>
              : <span className="text-danger"> Offline</span>
          }
        </p>
      </div>

      <h1>QuickVote</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <PersonList />
        </div>
        
        <div className="col-4">
          <PersonAdd />
        </div>
      </div>

    </div>
  )
}

export default App
