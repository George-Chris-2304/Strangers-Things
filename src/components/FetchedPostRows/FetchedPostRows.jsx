import React from "react";
import "./FetchedPostRows.css"

export default function FetchPostRows({post, setSelectedPostId}){
    return(
    
<tr onClick={() => {
    setSelectedPostId(post._id);
}}>
      <td>Posted By: {post.author.username}</td>
      <td id="The-Rows" >
        <strong id="FPR-name">Item: {post.title}</strong>
      </td>
      <td>Price: {post.price}</td>
    </tr>
   
    );
}