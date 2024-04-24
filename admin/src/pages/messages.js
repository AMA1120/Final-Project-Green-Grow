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
  const handleOkClick = async (messageId, index) => {
    navigate(0)
    try {
      await axios.post("http://localhost:3000/messages/send-sms", {
        message: "Your message has been received and will be addressed shortly. Thank you!",
        number: "+94769413257" // Replace this with the desired recipient number
      });
      console.log("SMS sent successfully");
      // Update the state to mark the message as sent
      const updatedMessages = [...messages];
      updatedMessages[index].sent = true;
      setMessages(updatedMessages);
      // Optionally, you can update the UI or perform any other actions after sending the SMS
    } catch (error) {
      console.error("Error sending SMS:", error);
      // Optionally, handle errors or display a message to the user
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
                    {message.sent ? (
                      <Button disabled>Done</Button>
                    ) : (
                      <Button onClick={() => handleOkClick(message._id, index)}>OK</Button>
                    )}
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
