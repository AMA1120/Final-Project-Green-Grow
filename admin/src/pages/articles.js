import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getArticles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const deleteArticle = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/deleteArticle/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-content">
        <div className="tbl-container">
        <h1>Articles</h1>
          <Link to="/addArticle" className="add-button">
            + Add new Articles
          </Link>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article._id}>
                      <td>{article.title}</td>
                      <td>{article.content}</td>
                      <td>{article.category}</td>
                      <td>{article.image}</td>
                      <td>
                        <Link
                          to={`/EditArticle/${article._id}`}

                          
                        >
                          Edit
                        </Link>
                        <button
                            type="button"
                          onClick={() => { deleteArticle(article._id);
                          window.location.reload();
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Articles;
