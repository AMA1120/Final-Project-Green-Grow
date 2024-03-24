import React, { useState } from 'react';
import Navbar from '../components/NavBar/navbar';
import { Modal, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function FertilizerDelivery() {
  const [deliveries, setDeliveries] = useState([
    // Sample data, replace with your actual data
    { id: 1, fertilizerName: 'Fertilizer A', quantity: '500KG', deliveryDate: '24/03/2024', status: 'Pending' },
    { id: 2, fertilizerName: 'Fertilizer B', quantity: '800KG', deliveryDate: '24/03/2024', status: 'Received' },
    // Add more deliveries here
  ]);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const handleModalClose = () => setSelectedDelivery(null);
  const handleModalShow = (delivery) => setSelectedDelivery(delivery);

  const updateDeliveryStatus = (deliveryId, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Received' : 'Pending';
  
    axios.post('/update-delivery-status', { id: deliveryId, newStatus })
      .then(response => {
        // Assuming the backend sends back the updated delivery object
        const updatedDelivery = response.data.updatedDelivery;
  
        // Update the local state with the new delivery status
        setDeliveries(deliveries.map(delivery => 
          delivery.id === updatedDelivery.id ? updatedDelivery : delivery
        ));
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  
    handleModalClose();
  };
  

  return (
    <>
      <div className='home-container'>
        <Navbar />
        <div className='home-content'>
          <div className='tbl-container'>
            <h1>Fertilizer Delivery Status</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fertilizer Name</th>
                  <th>Quantity</th>
                  <th>Delivery Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((delivery) => (
                  <tr key={delivery.id}>
                    <td>{delivery.id}</td>
                    <td>{delivery.fertilizerName}</td>
                    <td>{delivery.quantity}</td>
                    <td>{delivery.deliveryDate}</td>
                    <td>{delivery.status}</td>
                    <td>
                      <Button variant='primary' onClick={() => handleModalShow(delivery)}>
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
        <Modal.Body>Are you sure you want to update the status of this delivery?</Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleModalClose}>
                Close
            </Button>
            <Button variant='primary' onClick={() => updateDeliveryStatus(selectedDelivery.id, selectedDelivery.status)}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default FertilizerDelivery;
