import React, { useState } from "react";
import { userPost } from "../../api adapters";

import "./postForm.css"

const Post = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await userPost(title, description, price, willDeliver);
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="postForm">
      <h2 id="pf-title">Create A Post:</h2>
      <form onSubmit={handleSubmit}>
        <label className="np-label">
          Title:
          <input
          id="title"
            type="text"
            placeholder="Banana keychains"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="np-label">
          Description:
          <input
          id="description"
            type="text"
            placeholder="Custom made..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="np-label">
          Price:
          <input
          id="price"
            type="text"
            placeholder="$62.49"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="np-label">
          Willing to deliver?:
          <input
          id="deliver"
            type="text"
            value={willDeliver}
            placeholder="Enter true or false"
            onChange={(e) => {
              setWillDeliver(e.target.value);
            }}
          />
        </label>
        <br />
        <button className="np-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
