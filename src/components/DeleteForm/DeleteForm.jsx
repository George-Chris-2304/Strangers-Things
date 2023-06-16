import React from "react";
const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



export default function DeleteForm({ postId,setAllPosts}) {
  const deletePost = async () => {
    
    try {
      const TOKEN = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`
        },
      });
      const result = await response.json();
      console.log(result);
     /* if (response.ok) {
        setAllPosts((previousAllPosts) =>
          previousAllPosts.filter((post) => post._id !== postId)
        );
        
    }*/
    } catch (error) {
      console.error(error);
    }
  
  };

  

  return (
    
      <button id="Delete-Button" type="button" onClick={deletePost}>
        Delete Post
      </button>
    
  );
}