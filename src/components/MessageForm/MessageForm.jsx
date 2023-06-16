import React, { useState } from "react";


const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const MessageForm = (props) => {
  const postId= props.postId
  const isLoggedIn = props.isLoggedIn;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const TOKEN = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/posts/${props.postId}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          message: {
            content: message
          }
        })
      });
      const result = await response.json();
      console.log(result);
      if(response.status=== 500){
        alert("You can't send a message to yourself!")
      }else if (response.status === 401){
        alert("Please log in to access additional features.")
      } else if(response.ok){
        alert("Message successfully sent.");
        setMessage(" ");
        setName(" ");
        setEmail(" ");
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  
  

  return (
    
     <div id="messagePlace">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default MessageForm;


