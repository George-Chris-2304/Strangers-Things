import {useState, useEffect} from "react";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export default function SelectedPost({selectedPostId, setSelectedPostId, isLoggedIn}){
    const [allPosts,setAllPosts]= useState({});

   
    useEffect(() => {
        async function fetchSelectedPost(){
            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const data = await response.json();
                const fetchedPosts = data.data.posts;
                setAllPosts(fetchedPosts);
              } catch (error) {
                console.error(error);
              }
            }
        
            fetchSelectedPost();
          }, [selectedPostId]);

    
          if(!isLoggedIn){
            window.alert("You must log in to access this feature")
            return null;
          }
        
    

    return (
        <div>
          {allPosts ? (
            <div>
             
              <table id= "selected-post">
                <tbody>

            

                  <tr>
                    <td>{post.price}</td>
                  </tr>
                 <tr>
                    <td> {post.description}</td>
                 </tr>
                  <tr>
                    <td>Posted by: {post.username}</td>
                    
                  </tr>
                  
                 
                </tbody>
              </table>
              <button onClick={() => setSelectedPostId(null)}>Go Back</button>
            </div>
          ) : null}
          
        </div>
      );
    }
    
