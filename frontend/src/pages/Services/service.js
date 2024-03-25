import React from "react";
import "./service.css";
import Footer from "../../components/Footer";

function Service() {
  return (
    <>
      <div className="page-container">
        <div className="service-container">
          <div className="service-image"></div>
          <div className="service-text">
            <h1>Empowering Farmers</h1>
            <p>
              At Green Grow, we're not just about providing services; we're
              about creating a sustainable future. Join us in our mission to
              revolutionize agriculture, one crop at a time.
            </p>
            <div className="buttons-container">
              <button className="action1-button">Discover How</button>
              <button className="action1-button">Join Now</button>
            </div>
          </div>
        </div>
        <div className="service-description">
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of services tailored to meet the
            diverse needs of modern farmers. From crop consulting to soil
            analysis, we provide personalized solutions to help you achieve
            sustainable farming success. Our team of experts is dedicated to
            supporting you every step of the way, ensuring maximum efficiency
            and profitability for your farm. Users may obtain information about
            different crops, such as planting methods, fertilizer suggestions,
            insect management methods, and disease prevention measures, through
            the MOA platform’s comprehensive resource center. The platform
            enables farmers to enhance their agricultural practices and make
            well-informed decisions by offering these invaluable insights."
          </p>
        </div>
        <br></br>
        <br></br>

        <div className="additional-content">
          <h2 align="center">Explore Agricultural Knowledge</h2>
          <div className="card-serve-container">
            <div className="card-serve">
              <img
                src="https://i.natgeofe.com/n/748f1c42-0d8b-498e-85fd-88151c6f863b/01_organic_farming_i8860_20181003_11260_square.jpg"
                alt="Agriculture"
              />
              <div className="card-serve-text">
                <h3>Crop Rotation Techniques</h3>
                <p>
                  Learn about the benefits of crop rotation and how it can
                  improve soil fertility.
                  <button className="more-info-button">More Info</button>
                </p>
              </div>
            </div>
            <div className="card-serve">
              <img
                src="https://www.farmsense.io/wp-content/uploads/2022/04/Farmsense-history-of-pest-management-867x1024.jpg"
                alt="Farming"
              />
              <div className="card-serve-text">
                <h3>Integrated Pest Management</h3>
                <p>
                  Discover sustainable methods to control pests and minimize
                  chemical usage.
                  <button className="more-info-button">More Info</button>
                </p>
              </div>
            </div>
            <div className="card-serve">
              <img
                src="https://1.bp.blogspot.com/-5_EU2G5ebgs/VMsJxYLdFfI/AAAAAAAACic/NM0-RuSI0CQ/s1600/paddy%2Bharvest.JPG"
                alt="Harvesting"
              />
              <div className="card-serve-text">
                <h3>Optimizing Harvest Techniques</h3>
                <p>
                  Learn efficient harvesting methods to maximize yield and
                  reduce post-harvest losses.
                  <button className="more-info-button">More Info</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default Service;
