import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { SocketEvents } from './constants';
import Game from './components/Game';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);
    socket.on(SocketEvents.CONNECT, () => {
      setSocketConnected(socket.connected);
    });
    setSocket(socket);
    return () => {
      socket.removeAllListeners();
      socket.close();
    };
  }, [setSocketConnected, setSocket]);

  if (!socket || !socketConnected) {
    return <div>Connection Socket...</div>;
  }

  return <Game socket={socket} />;
};

export default App;