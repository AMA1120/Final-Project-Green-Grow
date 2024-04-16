import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar/navbar";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

function Messages() {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      const fetchMessages = async () => {
        try {
          const response = await axios.get("http://localhost:3000/messages/get");
          setMessages(response.data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };
  
      fetchMessages();
    }, []);
  
    const handleOkClick = (id) => {
      // Implement your logic here when the OK button is clicked
      console.log("OK button clicked for message with ID:", id);
    };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="tbl-container">
          <h1>Messages from Farmers</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Problem Type</th>
                <th>Message</th>
                <th>Sent At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message._id}>
                  <td>{message.problemType}</td>
                  <td>{message.message}</td>
                  <td>{message.createdAt}</td>
                  <td>
                    <Button onClick={() => handleOkClick(message._id)}>
                      OK
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Messages;
