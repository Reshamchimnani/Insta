import React,{useEffect} from 'react';
import './Profile.css';

const Profile = ({setPosts,newPost}) => {

  
  useEffect(() => {
    const fetchPost = async () => {

      try{
      const response = await fetch(
        "https://insta-backend-hr3a.onrender.com/myposts",
        {
          method: "GET",
          headers: {
            "Content-Type":"application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }catch(err){
      console.error("Failed to fetch posts:", err)
    }
    };
    fetchPost();
  }, [newPost]);


  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile"/>
        </div>
        <div className="profile-info">
          <div className="profile-username">
            <h2>Resham_Chim123</h2>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
          <div className="profile-stats">
            <span><strong>3</strong> posts</span>
            <span><strong>500</strong> followers</span>
            <span><strong>350</strong> following</span>
          </div>
          <div className="profile-bio">
            <h3>Resham Chimnani</h3>
            <p>let it be.</p>
          </div>
        </div>
      </div>
      
      {/* <div className="profile-posts"> */}
        {/* This is a grid layout for the posts */}
        {/* <div className="profile-post"><img src="https://via.placeholder.com/300" alt="Post" /></div>
        <div className="profile-post"><img src="https://via.placeholder.com/300" alt="Post" /></div>
        <div className="profile-post"><img src="https://via.placeholder.com/300" alt="Post" /></div> */}
        {/* Add more posts as needed */}
      {/* </div> */}
    </div>
  );
};

export default Profile;
