import React, { useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { Link } from "react-router-dom";
import Postform from "./Postform";
import LogOut from "./LogOut";

const HomePage = () => {
  const [newPost, setNewPost] = useState(true);

  const [LogoutModal,setLogoutmodal] = useState(false);
  const openLogoutModal = ()=> setLogoutmodal (true)
  const closeLogoutModal = ()=> setLogoutmodal (false)

  function updateNewPost() {
    setNewPost((prev) => !prev);
  }

  const [posts, setPosts] = useState([]);

  // useEffect (()=>{
  // const storedPosts = localStorage.getItem("posts");
  // console.log(storedPosts);

  // const parsedPosts = JSON.parse(storedPosts);
  // console.log(parsedPosts);
  // setPosts(parsedPosts);
  //  },[newPost]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="Instagram Logo"
          />
        </div>
        <div className="navbar__search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar__icons">
          <i className="fas fa-home"></i>
          

          <i onClick={openModal} className="fas fa-plus-square"></i>

          {/* <i className="fas fa-heart"></i> */}
          <Link to={"/profile"}>
            <i className="fas fa-user"></i>
          </Link>
          <i onClick={openLogoutModal} className="fa-solid fa-right-from-bracket"></i>
        </div>
      </nav>

      <div className="home-post">
        <PostList newPost={newPost}></PostList>
        <CreatePost
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        ></CreatePost>

        <LogOut LogoutModal={LogoutModal} closeLogoutModal={closeLogoutModal}></LogOut>
      </div>

    </div>
  );
};

export default HomePage;
