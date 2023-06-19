import React from "react";
import "./FetchedPostRows.css"

export default function FetchPostRows({post, setSelectedPostId}){
    return(
    
<tr onClick={() => {
    setSelectedPostId(post._id);
}}>
      <td id="The-Rows" >
        <strong id="FPR-name">{post.title}</strong>
      </td>
      
      <td> for: {post.price}</td>
    </tr>
   
    );
}