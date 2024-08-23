import React , {useState} from "react";
import Modal from "react-modal";
import Postform from "./Postform";


Modal.setAppElement('#root');

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

const CreatePost = ({modalIsOpen,setIsOpen}) => {

   const [newPost, setNewpost] = useState(true);

  function updateNewPost() {
     setNewpost((prev) => !prev);
   }


  const [imageurl, setImageurl] = useState("");
  const [caption, setCaption] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    try{
      const response = await fetch ("https://insta-backend-hr3a.onrender.com/createPost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            "body": caption,
            "pic": imageurl,
          }),

        }
        
      );
      const data = await response.json();
      console.log(data);
    }

    catch(e){}
    setImageurl("")
    setCaption("")
    updateNewPost()
  }

  // const addPost = (data) => {
  //   let storedPost = JSON.parse(localStorage.getItem("posts")) || [];
  //   const newPostArray = [...storedPost, data];
  //   console.log(newPostArray);
  //   console.log(data);
  //   localStorage.setItem("posts", JSON.stringify(newPostArray));

    









    let subtitle;
    
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
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Upload Post!</h2>

        <div id="container">
      <form onSubmit={submitHandler} className="form-container">
        <div className="form-group">
          <label htmlFor="imageurl">Image url</label>
          <input
            id="imageurl"
            value={imageurl}
            onChange={(e) => {
              setImageurl(e.target.value);
            }}
            type="text"
            className="form-control"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="caption"> caption</label>
          <input
            id="caption"
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
            className="form-control"
          ></input>
        </div>
        <br></br>
        <button style={{ color: "white" }} className="btn btn-primary">
          {" "}
          upload post
        </button>
      </form>
    </div>

        <button onClick={closeModal}>close</button>
        
    
      </Modal>
    </div>
  );
};

export default CreatePost;

