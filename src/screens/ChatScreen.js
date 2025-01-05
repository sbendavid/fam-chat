import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import { getUserProfile } from "../reducers/userReducers";

const socket = io("http://localhost:3000");

const ChatScreen = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [messageContent, setMessageContent] = useState("");
  const [userId, setUserId] = useState(0);
  const [groupId, setGroupId] = useState(null);

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }

    socket.on("messageReceived", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("user-joined", (data) => {
      console.log(data.message);
    });

    socket.on("user-left", (data) => {
      console.log(data.message);
    });

    return () => {
      socket.off("messageReceived");
      socket.off("user-joined");
      socket.off("user-left");
    };
  }, [user]);

  const sendMessage = () => {
    if (messageContent) {
      const payload = {
        senderId: userId,
        content: messageContent,
        receiverId: null,
        groupId: groupId,
      };
      socket.emit("sendMessage", payload);
      setMessageContent("");
    }
  };

  const joinGroup = (id) => {
    setGroupId(id);
    socket.emit("joinGroup", id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Chat</h2>
      <div>
        <input
          type="text"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h3>Messages</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>User {msg.senderId}:</strong> {msg.content}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={() => joinGroup(1)}>Join Group 1</button>
        <button onClick={() => joinGroup(2)}>Join Group 2</button>
      </div>
    </div>
  );
};

export default ChatScreen;
