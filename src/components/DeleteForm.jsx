import React, { useState } from "react";

export default function DeleteForm({ setAllPosts, isLoggedIn}) {
  const [deletePost, setDeletePost] = useState("");

  async function sendDeleteReq(id) {
    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/POST_ID`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setAllPosts(previousAllPosts => previousAllPosts.filter(fetchedPosts=>fetchedPosts.id !== id));
      }
      setDeletePost(""); 
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  if(!isLoggedIn){
    window.alert("You must log in to access this feature")
    return null;
  }

  return (
    <div id="Delete-form">
      <input
        type="text"
        placeholder="Enteer post id Here"
        value={deletePost}
        onChange={(event) => setDeletePost(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          if (deletePost) {
            sendDeleteReq(deletePost);
            
            
            
          }
        }}
        disabled={!deletePost}
      >
        Delete Post
      </button>
    </div>
  );
}