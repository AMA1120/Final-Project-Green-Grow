import React from "react";
import "./service.css";

function Service() {
  return (
    <div className="page-container">
      <div className="service-container">
        <div className="service-image"></div>
        <div className="service-text">
          <h1>Empowering Farmers</h1>
          <p>
            At Green Grow, we're not just about providing services; we're about
            creating a sustainable future. Join us in our mission to
            revolutionize agriculture, one crop at a time.
          </p>
          <div className="buttons-container">
            <button className="action1-button">Discover How</button>
            <button className="action1-button">Join Now</button>
          </div>
        </div>
      </div>
      {/* New card content */}
      {/* <div className="exclusive-services-card">
        <div className="services-content">
          <h2>Exclusive Services</h2>
          <p>
            Our specialized services are tailored to meet the unique needs of the
            modern agricultural sector. From soil analysis to advanced farm tech,
            we ensure your farming practices are efficient and sustainable.
          </p>
          <ul className="services-list">
            <li>
              <div className="icon">🌱</div>
              <strong>Soil Analysis:</strong> Expert soil health assessments to
              optimize crop yield and resource management.
            </li>
            <li>
              <div className="icon">🌾</div>
              <strong>Crop Advice:</strong> Strategic guidance on crop rotation,
              pest control, and sustainable practices.
            </li>
            <li>
              <div className="icon">🚜</div>
              <strong>Farm Tech:</strong> Integrating the latest technology to
              improve efficiency and production on the farm.
            </li>
          </ul>
          <button className="more-info-button">More Info</button>
        </div>
        <div className="service-image1 ">
        </div>
      </div> */}
    </div>
  );
}

export default Service;
