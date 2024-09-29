// frontend/src/App.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the connection when the component unmounts
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      // Send message to the server
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.senderId}: {msg.message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
