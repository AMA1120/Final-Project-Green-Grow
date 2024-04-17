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

  const handleOkClick = async (id) => {
    try {
      // Make a POST request to Twilio's SMS API endpoint
      const response = await axios.post("YOUR_TWILIO_SMS_API_URL", {
        to: "RECIPIENT_PHONE_NUMBER",
        body: "Your message content here",
        // Add other necessary parameters (e.g., Twilio authentication credentials)
      });
  
      // Log the response from the SMS service
      console.log("SMS sent successfully:", response.data);
  
      // Implement any additional logic here (e.g., display a success message to the user)
    } catch (error) {
      console.error("Error sending SMS:", error);
      // Implement error handling (e.g., display an error message to the user)
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
              {messages.map((message) => (
                <tr key={message._id}>
                  <td>{message.problemType}</td>
                  <td>{message.message}</td>
                  <td>{formatDate(message.createdAt)}</td> {/* Format date */}
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
