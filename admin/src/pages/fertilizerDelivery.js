import React, { useState } from "react";
import Navbar from "../components/NavBar/navbar";
import { Modal, Button, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function FertilizerDelivery() {
  const [deliveries, setDeliveries] = useState([]);
  const token = Cookies.get("token");
  const decodedToken = jwtDecode(token);

  console.log(decodedToken);

  const { role } = decodedToken;

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/fertilizerdelivery/get"
        );
        console.log(response.data);
        setDeliveries(response.data);
      } catch (error) {
        console.error("Error fetching deliveries:", error);
      }
    };

    fetchDeliveries();
  }, []);

  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleModalClose = () => setSelectedDelivery(null);
  const handleModalShow = (delivery) => setSelectedDelivery(delivery);

  const updateDeliveryStatus = async (id) => {
    navigate(0);
    try {
      let response;

      if (role === "Ministry") {
        response = await axios.put(`http://localhost:3000/fertilizerdelivery/updateministry/${id}`);
        
      } else if (role === "AgrarianServCen") {
        response = await axios.put(`http://localhost:3000/fertilizerdelivery/updateasc/${id}`);
      }

      if (response && response.status === 200) {
        const { savedDelivery } = response.data;

        setDeliveries(
          deliveries.map((delivery) =>
            delivery._id === savedDelivery._id ? savedDelivery : delivery
          )
        );

     
      } else {
        console.error("Error updating status:", response.data);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }

    handleModalClose();
  };
  
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-content">
          <div className="tbl-container">
            <h1>Fertilizer Delivery Status</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fertilizer Name</th>
                  <th>Quantity</th>
                  <th>Delivery Date (on or before)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.length > 0 &&
                  deliveries.map((delivery, index) => (
                    <tr key={delivery.id}>
                      <td>{index + 1}</td>
                      <td>{delivery.fertilizerName}</td>
                      <td>{delivery.quantity}</td>
                      <td>
                        {new Date(delivery.deliveryDate).toLocaleDateString()}
                      </td>
                      <td>
                        {delivery.status === 0
                          ? "Pending"
                          : delivery.status === 1
                          ? "Ministry"
                          : "ASC"}
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => handleModalShow(delivery)}
                          disabled={
                            (role === "Ministry" &&
                              (delivery.status === 1 ||
                                delivery.status === 2)) ||
                            (role === "AgrarianServCen" &&
                              (delivery.status === 2 || delivery.status === 0))
                          }
                        >
                          Update Status
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={!!selectedDelivery} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Delivery Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to update the status of this delivery?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => updateDeliveryStatus(selectedDelivery._id)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FertilizerDelivery;
