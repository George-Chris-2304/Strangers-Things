import React from "react";

export default function FetchedPostRows({ post }) {
  return (
    <tr id="things-items">
      <td>{post.title}</td>
      <td>Price: {post.price}</td>
    </tr>
  );
}
