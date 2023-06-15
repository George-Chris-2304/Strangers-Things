import React from "react";

export default function FetchPostRows({post, setSelectedPostId}){
    return(
<tr onClick={() => {
    setSelectedPostId(post._id);
}}>
      <td>
        <strong>{post.title}</strong>
      </td>
      <td>{post.description}</td>
      <td>Price: {post.price}</td>
    </tr>
    );
}