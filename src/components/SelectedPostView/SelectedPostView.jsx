import { useState, useEffect } from "react";
import DeleteForm from "../DeleteForm/DeleteForm";
import MessageForm from "../MessageForm/MessageForm";

export default function SelectedPost({selectedPostId, setSelectedPostId, allPosts}){
  const [filteredSelectedPost, setFilteredSelectedPost] = useState(null);
        console.log(typeof selectedPostId);
        useEffect(() => {
          
            async function fetchSPost(){
              const filteredPost = allPosts.find((e) => {
                console.log(e)
                if(e._id===selectedPostId){
                  return true
    
                }
              })
              if(filteredPost){
                setFilteredSelectedPost(filteredPost)
              }
           else{ 
setFilteredSelectedPost(null)
           }
        } 
    
    if(selectedPostId){
        fetchSPost();
    }
}, [selectedPostId])



return (
    <div>
      {filteredSelectedPost ? (
        <div>
          <h2>Post Details</h2>
          <table id="selected-post">
            <tbody>
              
              <tr>
                <td>{filteredSelectedPost.price}</td>
              </tr>
              <tr>
                <td>{filteredSelectedPost.description}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setSelectedPostId(null)}>Go Back</button>
          <DeleteForm postId={selectedPostId} />
        <MessageForm postId={selectedPostId} />
        </div>
      ) : null}
    </div>
  );
      }  