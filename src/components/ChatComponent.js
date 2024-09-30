// ChatComponent.jsx
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const ChatComponent = ({ userId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Listen for incoming messages
    socket.on("messageReceived", (newMessage) => {
      // Updated here
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      // Cleanup on component unmount
      socket.off("messageReceived"); // Updated here
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const messageData = {
        senderId: userId,
        receiverId: receiverId,
        content: message,
      };

      // Emit the message to the server
      socket.emit("sendMessage", messageData);

      // Clear the input field
      setMessage("");
    }
  };

  return (
    <div>
      <div className="chat-window">
        <div className="message-list">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.senderId === userId ? "my-message" : "received-message"
              }
            >
              <strong>
                {msg.senderId === userId ? "You" : `User ${msg.senderId}`}:
              </strong>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
