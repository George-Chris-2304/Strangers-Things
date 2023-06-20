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
            content: message,
           
            
            

          }
        })
      });
      const result = await response.json();
      console.log('Response:', response);
      console.log('Result:', result);
      if(response.status=== 500){
        alert("Error")
      }else if (response.status === 401){
        alert("Please log in to access additional features.")
      } else if(response.ok){
        alert("Message successfully sent.");
        setMessage("");
        setName("");
        setEmail("");
       
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  
  

  return (
  
     <div id="messagePlace">
    <form onSubmit={handleSubmit}>
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

