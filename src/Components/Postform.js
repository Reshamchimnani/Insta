import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Postform = ({ addPost,updateNewPost }) => {
  const [imageurl, setImageurl] = useState("");
  const [caption, setCaption] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    addPost({ caption, imageurl });
    setImageurl("")
    setCaption("")
    updateNewPost()
  }

  return (
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
        <button style={{ color: "white" }} className="btn btn-primary" type="submit">
          {" "}
          upload post
        </button>
      </form>
    </div>
  );
};

export default Postform;
