import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { ToastContainer, toast } from "react-toastify";

const PostList = ({newPost}) => {

  // const [posts, setPosts] = useState("")
  // const[newPost, setNewPost]= useState(true)
  const [posts,setPosts] = useState([])

  // function updateNewPostValue() {
  //   setNewPost((prev) => !prev)
  // }

  // likePost = (index) => {
  //   const newPosts = [...posts];

  //   newPosts[index].likes = (newPosts[index].likes || 0) + 1;
  //   setPosts(newPosts);
  //   localStorage.setItem("posts", JSON.stringify(newPosts));
  // };

  // deletePost = (index) => {
  //   const newPosts = posts.filter((_, i) => i !== index);
  //   setPosts(newPosts);
  //   localStorage.setItem("posts", JSON.stringify(newPosts));
  // };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://insta-backend-hr3a.onrender.com/allposts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchPost();
  }, []);

  async function likePost(postId) {
    try {
      const response = await fetch(
        "https://insta-backend-hr3a.onrender.com/like",
        {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            postId: postId,
          }),
        }
      );

      const data = await response.json();
      toast.success("Liked Successfully6");
      // updateNewPostValue()
    } catch (err) {}
  }
  async function unlikePost(postId) {
    try {
      const response = await fetch(
        "https://insta-backend-hr3a.onrender.com/unlike",
        {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            postId: postId,
          }),
        }
      );

      const data = await response.json();
      toast.success("Liked Successfully6");
      // updateNewPostValue()
    } catch (err) {}
  }

  return (
    <div className="card-list">
      {posts &&
        posts.map((post, index) => (
          <div className="card">
            <img src={post.photo} className="card-img-top" alt="" />
            <div className="card-body">
              <p className="class-test">{post.body}</p>
              <div className="buttons">
                
              
              <div style={{display:"flex", alignItems:"center"}}>
                <span style={{"marginRight":"5px"}}>{post.likes.length || 0}</span>
                  
                {post.likes.includes(localStorage.getItem("userId")) ?
                 <i className="fa-solid fa-heart" style={{color:"#ff0000"}} 
                 onClick={()=>unlikePost(post._id)}></i> :    <i className="fa-regular fa-heart" onClick={() => likePost(post._id)}>

                 </i>}

              </div>



                <button
                  className="fa-sharp fa-regular fa-comment"
                  style={{
                    border: "none",
                    fontSize: "25px",
                    background: "#fff",
                  }}
                ></button>
              </div>
            </div>
          </div>
        ))}

        {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};

export default PostList;
