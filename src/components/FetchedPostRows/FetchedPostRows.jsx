import React from "react";

export default function FetchedPostRows({ post }) {
  return (
    <tr id="things-items">
      <td>
        <strong>{post.title}</strong>
      </td>
      <td>{post.description}</td>
      <td>Price: {post.price}</td>
    </tr>
  );
}
