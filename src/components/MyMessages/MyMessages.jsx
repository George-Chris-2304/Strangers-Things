import React, { useEffect, useState } from 'react';
import "./MyMessages.css";

const MessageList = (props) => {
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const showMessage = async () => {
      try {
        const TOKEN = localStorage.getItem("token");
        
        const response = await fetch('https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/users/me', { 
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
          }
        });
        
        const data = await response.json();
        setMessages(data.data.messages);
      } catch (error) {
        console.error(error);
      }
    };

    showMessage();
  }, []);

  const currentUser=localStorage.getItem("username");

  const filteredMessages = messages.filter(message => message.post.author.username === currentUser);


  return (
      <div>
        <h1>Inbox</h1>
      {filteredMessages.map((message, idx) => (
        <div className="message-list" key={idx}>
          <div className="messages">
            <p id="inbox-title"><strong>{message.post.title}</strong></p>
            <p>Message: {message.content}</p>
            <p>From: {message.fromUser.username}</p>
          </div>
        </div>
      ))}
   </div>
      
  );
};


export default MessageList;


