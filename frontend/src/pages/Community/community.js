import React, { useState, useEffect } from "react";
import axios from "axios";
import "./community.css"; // Import a CSS file for styling

const Community = () => {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/community/get");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const uploadImage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/community/new", {
        title,
        content,
        image,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="community-container">
      <br></br> <br></br>
      <div className="question-form">
        <h2>Ask a Question</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea-field"
          placeholder="What are the details of your problem?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input accept="image/*" type="file" onChange={convertToBase64} />
        {image === "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} alt="" />
        )}
        <br></br>
        <br></br>
        <button className="submit-btn" onClick={uploadImage}>
          Post Question
        </button>
      </div>
      <div className="questions-list">
        <h2>Recent Questions</h2>
        {questions.map((question) => (
          <div className="question-item" key={question.id}>
            <div className="question-details">
              <h3>{question.title}</h3>
              <p>{question.content}</p>
              {question.image && (
                <img
                  className="question-image"
                  src={question.image}
                  alt="Question"
                  style={{ width: "180px", height: "100px" }}
                />
              )}
            </div>
            <div className="answer-box">
              <textarea
                className="answer-textarea"
                placeholder="Write your answer here..."
                rows="4"
                cols="50"
              ></textarea>
              <button className="submit-answer-btn">Submit Answer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
