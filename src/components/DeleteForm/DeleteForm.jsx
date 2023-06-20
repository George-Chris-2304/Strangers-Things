import React from "react";
const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



export default function DeleteForm({ postId,setAllPosts, post}) {
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
     if (response.status===200) {
        window.location.reload();
        alert("Post successfully deleted.")
    } else if(response.status === 500) {
      alert("You are not authorized to perform this action!")

    } else if(response.status ===401){
      alert("Please Log in to access additional features.")
    }
   
  
    } catch (error) {
      console.error(error);
    }
  
  };
const currentUser = localStorage.getItem("username");

  
  return (
  
      <button id="Delete-Button" type="button" onClick={deletePost}>
        Delete Post
      </button>
  
  );
}
