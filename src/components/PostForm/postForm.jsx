import React, { useState } from "react";
import { userPost } from "../../api adapters";
import { useNavigate } from "react-router-dom";

const Post = ({setAllPosts}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await userPost(title, description, price, willDeliver);
      console.log(result);

      if (result && result.success) {
        console.log("Post successful");
        setAllPosts((prevPosts) => [result.data.post, ...prevPosts]);
        navigate('/');
      } else {
        console.log("Post failed");
      }
    } catch (error) {
      console.error("Error posting:", error);
    }
  };
  return (
    <div>
      <h2>Create A Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Banana keychains"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            placeholder="Custom made..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            placeholder="$62.49"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Willing to deliver?:
          <input
            type="text"
            value={willDeliver}
            placeholder="Enter true or false"
            onChange={(e) => {
              setWillDeliver(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
