import React from "react";
import "./tea.css";

function tea() {
  const stepstea = [
    {
      title: "Step 1",
      description:
        "Site Selection: Choose a suitable location with well-drained, acidic soil (pH 4.5-5.5) and partial shade to full sun exposure. Avoid areas prone to waterlogging or extreme temperatures.",
    },
    {
      title: "Step 2",
      description:
        "Soil Preparation: Clear the planting site of weeds and debris. Till the soil to a depth of about 30 cm (12 inches) to loosen it and improve aeration. Incorporate organic matter like compost or leaf mold to enhance soil fertility.",
    },
    {
      title: "Step 3",
      description:
        "Propagation: Tea can be propagated from seeds or cuttings. If using seeds, plant them in seedbeds or nursery trays filled with well-draining soil, keeping them moist until germination. Alternatively, take cuttings from healthy, mature tea plants and root them in a nursery environment.",
    },
    {
      title: "Step 4",
      description:
        "Nursery Care: Provide adequate water and shade to young tea plants in the nursery. Protect them from pests and diseases, and ensure they receive regular fertilization to promote healthy growth.",
    },
    {
      title: "Step 5",
      description:
        "Transplanting: Once the tea plants have reached a suitable size (about 6-12 months old), transplant them into the prepared field. Dig planting holes spaced about 1-1.5 meters (3-5 feet) apart, depending on the desired planting density.",
    },
    {
      title: "Step 6",
      description:
        "Maintenance: After transplanting, continue to provide water, fertilizer, and weed control as needed. Prune the plants regularly to encourage bushy growth and facilitate harvesting. Monitor for pests and diseases, and apply appropriate control measures as necessary to ensure optimal plant health and yield.",
    },
  ];
  return (
    <div className="page-tea-container">
      {/* First card: Discover tea */}
      <div className="discover-tea-fullscreen">
        <div className="left-tea-content">
          <div className="card-tea-content">
            <h1>Discover Tea</h1>
            <p>
              Delve into the art of tea cultivation, where every leaf nurtures a
              legacy of tradition and flavor..
            </p>
            <div className="buttons">
              <button className="action-button">Learn More</button>
              <button className="action-button">Get Started</button>
            </div>
          </div>
        </div>
        <div className="right-tea-image">{/* Image would go here */}</div>
      </div>
      {/* New container: tea FAQ */}
      <div className="faq-tea-container">
        <h2>Key Aspects of tea Cultivation</h2>

        <div className="faq-tea-grid">
          {/* Add your FAQ items here */}
          <div className="faq-tea-item">
            <h3>Which fertilizers to use?</h3>
            <p>
              When planting tea, it's crucial to select fertilizers that cater
              to the plant's specific nutrient needs for healthy growth. Organic
              fertilizers like compost or well-rotted manure enrich the soil
              with essential nutrients and improve its structure, fostering
              {/* microbial activity beneficial for tea plants. Additionally, a
              balanced mineral fertilizer containing nitrogen, phosphorus, and
              potassium, along with micronutrients like magnesium and calcium,
              supports various aspects of tea plant development, including leaf
              growth, root formation, and overall vigor. Conducting a soil test
              beforehand helps determine the soil's nutrient levels and pH,
              guiding fertilizer application to meet the tea plant's
              requirements accurately. Regular monitoring of plant health and
              soil fertility enables adjustments in fertilizer use throughout
              the planting cycle, optimizing tea yield and quality. */}
            </p>
          </div>
          <div className="faq-tea-item">
            <h3>Soils and Climatic needs</h3>
            <p>
              Cinnamon cultivation requires specific soil and climatic
              conditions to thrive optimally. In terms of soil, cinnamon can be
              grown in various types, ranging from silver sands in Negombo to
              loamy and lateritic gravelly soils in the southern coastal belt
              {/* and interior regions. The quality of cinnamon bark is influenced
              by soil composition, with the best quality typically produced in
              white sandy soils. However, skilled peelers can produce the
              highest-grade "Alba" cinnamon, characterized by small diameter
              quills and superior quality, regardless of soil type. Cinnamon
              trees require deep soil, but their roots can penetrate even
              through cracks in the parent material to access deeper layers.
              Climatically, cinnamon thrives in coastal belts and interior
              regions of Sri Lanka, particularly in areas with elevations up to
              about 250 meters above mean sea level (AMSL). While naturally
              found in central hilly areas with elevations up to about 500
              meters AMSL, it can also be cultivated in the wet zones, where
              annual rainfall exceeds 1750mm, and temperatures range between
              25°C to 32°C. Adequate sunshine is essential for cinnamon
              cultivation, making it a sun-loving plant, and it is best suited
              to regions with rainfall ranging from 1,750 to 3,500 mm per annum.
              However, prolonged dry periods are not suitable for cinnamon
              cultivation, emphasizing the importance of consistent moisture
              availability in its environment. */}
            </p>
          </div>
          <div className="faq-tea-item">
            <h3>Which fertilizers to use?</h3>
            <p>
              Proper fertilization and weeding practices are crucial aspects of
              tea cultivation. Fertilizer application, typically performed twice
              a year during the onset of the Yala and Maha rainy seasons,
              ensures optimal soil nutrition for robust plant growth. In areas
              with soil pH levels below 4.5, dolomite is applied at a specified
              {/* rate to rectify acidity issues. Weeding, an integral task in tea
              farming, varies with plantation age—clean weeding is advised for
              young plantations, while slash weeding, carried out 2-3 times
              annually, benefits mature crops. Additionally, soil conservation
              measures like contour trenches are implemented in sloped terrains
              to mitigate erosion. Plant training and pruning occur biannually,
              aimed at fostering a well-structured plant canopy and enhancing
              stem growth by removing excess lateral branches and weak shoots
              post-harvest. These practices collectively contribute to
              sustaining healthy tea crops and optimizing yield quality. */}
            </p>
            <p>Recommended fertilizer mixture – 900 kg/ha/yr</p>
            <div className="fertilizer-tea-table">
              <table>
                <thead>
                  <tr>
                    <th>Components of the mixture</th>
                    <th>Parts by weight</th>
                    <th>Nutrients in the mixture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nitrogen (N)</td>
                    <td>Generally the highest proportion, often around 10-15 parts</td>
                    <td>Supports vegetative growth, leaf development, and overall plant vigor.</td>
                  </tr>
                  <tr>
                    <td>Phosphorus (P)</td>
                    <td>Moderate proportion, typically around 5-8 parts</td>
                    <td>Vital for root development, flower and fruit formation, and overall plant energy transfer.</td>
                  </tr>
                  <tr>
                    <td>Potassium (K)</td>
                    <td>Similar to phosphorus, approximately 5-8 parts</td>
                    <td>Aids in overall plant health, disease resistance, and stress tolerance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Diseases and Pests Information */}
          <div className="faq-tea-item">
            <h3>What are Diseases and Pests?</h3>
            <br></br>

            {/* Rough Bark Disease */}
            <div className="disease-tea-item">
              <h4>Blister Blight (Exobasidium vexans)</h4>
              <p>
                Blister blight is a fungal disease that causes blister-like
                lesions on the surface of tea leaves. These lesions rupture,
                leading to leaf necrosis and defoliation. Blister blight can
                significantly reduce tea yield and quality if left unmanaged.
              </p>
            </div>

            <div className="disease-tea-item">
              <h4>Tea Mosquito Bug (Helopeltis spp.)</h4>
              <p>
                The tea mosquito bug is a common pest in tea plantations,
                particularly in tropical regions. Both nymphs and adults of this
                insect feed on tender tea shoots and leaves, causing damage that
                can lead to leaf loss and reduced tea quality. Effective pest
                management strategies are essential to control tea mosquito bug
                populations and minimize crop damage.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* New container: How to Plant? */}
      <div className="how-to-plant-tea-container">
        <h2>How to Plant?</h2>
        <p>Great for displaying multiple features and things like that.</p>
        <div className="steps-grid">
          {stepstea.map((step, index) => (
            <div key={index} className="step-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <button className="learn-more-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
      <div className="health-benefits-container">
        <h2>Health Benefits of Tea</h2>
        <p>
          Savor the soothing essence of tea, a timeless beverage that enhances
          well-being with every cup.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">🌿</div>
            <h3>Antioxidants</h3>
            <p>
              Rich in antioxidants like flavonoids and catechins, tea helps
              combat oxidative stress and bolsters overall health.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">💪</div>
            <h3>Heart Health</h3>
            <p>
              Regular consumption of tea may contribute to a healthier heart,
              reducing the risk of cardiovascular diseases.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">🍵</div>
            <h3>Mental Alertness</h3>
            <p>
              The moderate caffeine content in tea can enhance brain function,
              leading to improved focus and alertness.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">🧘</div>
            <h3>Stress Relief</h3>
            <p>
              Certain teas, like chamomile, are known for their calming effects,
              which can help alleviate stress and improve sleep quality.
            </p>
          </div>
        </div>
      </div>

      {/* Second card: Origin Story */}
      <div className="origin-story-tea-card">
        <div className="left-tea-section">
          <h2>Origin Story</h2>
          <p>
            Tea cultivation in Sri Lanka traces back to the 19th century when
            British planter James Taylor established the first commercial
            plantation in the Kandy region. Expanding to areas like Nuwara Eliya
            and Dimbula, the island's cool, high-altitude regions proved ideal
            for tea growth. By the late 1800s, Ceylon tea gained global
            recognition for its quality, becoming a prominent player in the
            international market. Today, Sri Lanka remains a top tea exporter,
            known for its diverse flavors and captivating aroma, continuing the
            legacy of its rich tea heritage.
          </p>
          <button className="more-history-button">More History</button>
          <div className="testimonial">
            <p>
              “Since incorporating CinnSpice Hub’s tea into our recipes, our
              bakery’s customer satisfaction has soared!” - BakeMaster Amy
            </p>
          </div>
        </div>
        <div className="right-tea-section">{/* Image would go here */}</div>
      </div>
    </div>
  );
}

export default tea;
