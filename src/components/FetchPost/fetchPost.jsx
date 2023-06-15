import React, { useState, useEffect } from "react";
import FetchedPostRows from "../FetchedPostRows/FetchedPostRows";
import Post from "../PostForm/postForm";
import "./fetchPost.css";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function FetchPost({setSelectedPostId}){
  const [allPosts, setAllPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        const fetchedPosts = data.data.posts;
        setAllPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  const filteredThings = allPosts.filter((things) =>
    things.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const DetailClick = () => {
    setSelectedPostId(postId)
}

  return (
    <div className="fetch-post">
      <div className="left-panel">
        <form id="search-bar-form">
          <label htmlFor="search-query">Search: </label>
          <input
            name="search-query"
            type="text"
            placeholder="Type Name Here"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </form>
        <Post />
      </div>

      <div className="right-panel">
        <table className="fetched-table">
          <thead>
            <tr>
              <th id="project-title" colSpan="3">
                Stranger's Things
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredThings.map((post) => (
              <FetchedPostRows
                key={post._id}
                post={post}
                setAllPosts={setAllPosts}
                setSelectedPostId={setSelectedPostId} onClick={() => DetailClick(post) }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
