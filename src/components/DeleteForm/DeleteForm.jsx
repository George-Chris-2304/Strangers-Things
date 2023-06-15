import React from "react";
const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



export default function DeleteForm({ postId, setAllPosts, token }) {
  const deletePost = async () => {
    
    try {
      const response = await fetch(`${BASE_URL}/posts/POST_ID`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setAllPosts((previousAllPosts) =>
          previousAllPosts.filter((post) => post._id !== postId)
        );
        
      }
    } catch (error) {
      console.error(error);
    }
  
  };

  return (
    <div id="Delete-form">
      <button type="button" onClick={deletePost}>
        Delete
      </button>
    </div>
  );
}