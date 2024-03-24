import React from "react";
import Navbar from "../components/NavBar/navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddArticle() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const convertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/article/add", {
        title,
        content,
        category,
        image,
      });
      console.log(response.data);
      navigate("/articles");
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }
  

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add Article
          </h1>
          <form onSubmit={uploadImage}>
          <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
              type="text"
              placeholder="Enter content"
              style={{
                width: "100%",
                height: "100px",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }} 
              
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
              type="text"
              placeholder="Enter category"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }} 
                
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}

              />

            </div>
            <div className="mb-2">
                <label htmlFor="image">Image</label>
                <br></br>
                <input
                  accept="image/*"
                  type="file"
                  onChange={convertToBase64}
                />
                {image === "" || image == null ? (
                  ""
                ) : (
                  <img width={100} height={100} src={image} alt="" />
                )}
              </div>
              <button className="btn btn-success" onClick={uploadImage}>
                Submit
              </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default AddArticle;
