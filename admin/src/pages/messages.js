import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar/navbar";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const handleOkClick = async (id, index, messageId) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/messages/update-status/${id}`
      );

      if (response.status === 200) {
        // If message status is updated successfully, send SMS
        await axios.post("http://localhost:3000/messages/send-sms", {
          message: "Your problem is resolved. Thank You!",
          number: "+94772057454", // Replace with recipient's number
        });

        console.log("SMS sent successfully");

        // Navigate after sending SMS
        navigate(0);
      }
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  };

    
  // Function to format date to yyyy-mm-dd
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
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
                <th>Sent On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={message._id}>
                  <td>{message.problemType}</td>
                  <td>{message.message}</td>
                  <td>{formatDate(message.createdAt)}</td> {/* Format date */}
                  <td>
                    <Button
                      className={
                        message.check === "0"
                          ? "bg-primary"
                          : message.check === "1"
                          ? "bg-danger"
                          : ""
                      }
                      onClick={() => handleOkClick(message._id)}
                      disabled={message.check === "1"}
                    >
                      {message.check === "0" 
                         ? "Ok" 
                         : "Sent Message"}
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
