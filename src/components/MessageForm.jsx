import {useState, useEffect} from "react";

export default function MessageForm(){
const [name,setName]= useState(' ');
const [email, setEmail]= useState(' ');
const [message, setMessage] = useState(' ');



  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return(
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
      );

  

}