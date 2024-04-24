import React, { useState, useEffect } from "react";
import "./Farmer.css";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import Footer from "../../components/Footer";
import { useHistory} from "react-router-dom";


function FarmerHome() {
  const [farmers, setFarmers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [deliveries, setDeliveries] = useState([]); // State to store deliveries
  const [problemType, setProblemType] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory(); // Initialize useHistory hook

  useEffect(() => {
    // Fetch data from the server
    const fetchFarmers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/farmers/get");
        setFarmers(response.data);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/article/get");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const fetchDeliveries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/fertilizerdelivery/get"
        );
        setDeliveries(response.data);
      } catch (error) {
        console.error("Error fetching deliveries:", error);
      }
    };

    fetchFarmers();
    fetchArticles();
    fetchDeliveries();
  }, []);

  // Function to handle navigation to profile edit page
  const handleEditProfile = () => {
    history.push("/profile"); // Navigate to profile edit page
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/messages/submit",
        {
          problemType,
          message,
        }
      );
      console.log(response.data);
  
      alert("Message submitted successfully");
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };
  

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <div className="text-center">
              <img
                src="https://media.istockphoto.com/id/1269841295/photo/side-view-of-a-senior-farmer-standing-in-corn-field-examining-crop-at-sunset.jpg?s=612x612&w=0&k=20&c=Lheldd6VVGQGxrgC8_mwUTLxXGg9v8Y6abjmYLhLHug="
                alt="Profile"
                className="img-fluid rounded-circle mb-3"
              />
              {farmers.map((farmer) => (
                <div key={farmer._id}>
                  <h3>{farmer.name}</h3>
                </div>
              ))}
              <p className="text-muted">
                Piliyandala Govi Mithuru Farmers' organization Member
              </p>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="mb-5"></div>
            <div className="mb-10">
              <h2>My Information</h2>
              <ul className="list-unstyled">
                {farmers.map((farmer) => (
                  <tr key={farmer._id}>
                    <li>NIC: {farmer.NIC}</li>
                    <li>Date Of Birth: {farmer.DOB}</li>
                    <li>Address: {farmer.address}</li>
                    <li>Mobile No: {farmer.phone}</li>
                    <li>Size of the land: {farmer.farmlandSize}</li>
                    <li>Farmland Location: {farmer.farmlandLocation}</li>
                    <li>Reg No. of the land: {farmer.landRegNo}</li>
                  </tr>
                ))}
              </ul>
            </div>
            <Button variant="secondary" onClick={handleEditProfile}>
              Edit Profile
            </Button>{" "}
            {/* Call handleEditProfile function */}
          </Col>
        </Row>
        <br />
        <br />
        <h2>Track Your Fertilizer</h2>
        <Row className="mt-5">
          {deliveries.map((delivery, index) => (
            <Col key={index} md={4}>
              <Card className="fertilizer-card">
                <Card.Body>
                  <Card.Title>{delivery.fertilizerName}</Card.Title>
                  <Card.Text>
                    Quantity: {delivery.quantity}
                    <br />
                    Delivery Date:{" "}
                    {new Date(delivery.deliveryDate).toLocaleDateString()}
                    <br />
                    Status:{" "}
                    {delivery.status === 0
                      ? "Pending"
                      : delivery.status === 1
                      ? "Ministry"
                      : "ASC"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid>
        <Row className="mt-5">
          <Col md={12}>
            <div className="articles-panel">
              <h2>Explore the articles and get updates!</h2>
              <Row className="mt-3">
                {articles.map((article) => (
                  <Col key={article._id} md={4}>
                    <Card className="article-card mb-3">
                      <Card.Img variant="top" src={article.image} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.content}</Card.Text>
                        <Button className="see-more-button">See More</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="contact-us-container">
              <h2>Tell Us Your Concerns</h2>
              <Form className="contact-us-form" onSubmit={handleSubmit}>
                <Form.Group controlId="problemType">
                  <Form.Label>Problem Type</Form.Label>
                  <Form.Control
                    as="select"
                    className="problem-type-select"
                    value={problemType}
                    onChange={(e) => setProblemType(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Fertilizer Quality">
                      Fertilizer Quality
                    </option>
                    <option value="Rice Diseases">Rice Diseases</option>
                    <option value="Paddy Field Management">
                      Paddy Field Management
                    </option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    className="message-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-button"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Footer />
    </>
  );
}

export default FarmerHome;
