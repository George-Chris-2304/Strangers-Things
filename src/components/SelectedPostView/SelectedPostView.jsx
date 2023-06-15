import { useState, useEffect } from "react";
import DeleteForm from "../DeleteForm/DeleteForm";
import MessageForm from "../MessageForm/MessageForm";

export default function SelectedPost({selectedPostId, setSelectedPostId}){
    const[allPosts,setAllPosts]=useState({});
        
        useEffect(() => {
            async function fetchSPost(){
            try{
                const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${selectedPostId}`);
                const data = await response.json();
                console.log(data);

               
                const ItemPost = data.data.posts

                setAllPosts(ItemPost)
            } catch (error){
                console.error(error)
            }
        }
    
    if(selectedPostId){
        fetchSPost();
    }
}, [selectedPostId])



return (
    <div>
      {allPosts ? (
        <div>
          <h2>Post Details</h2>
          <table id="selected-post">
            <tbody>
              
              <tr>
                <td>{allPosts.price}</td>
              </tr>
              <tr>
                <td>{allPosts.description}</td>
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