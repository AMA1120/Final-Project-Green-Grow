import React from "react";
import "./cinnamon.css";

function Cinnamon() {
  // Array of steps for demonstration purposes
  const steps = [
    {
      title: "Step 1",
      description:
        "Choose a sunny spot with well-draining soil. Cinnamon plants require plenty of sunlight, preferably at least twelve hours per day, and soil that drains well to avoid waterlogging",
    },
    {
      title: "Step 2",
      description:
        "Cinnamon plants prefer acidic soil with a pH level between 4.5 and 5.5. Amend the soil with sphagnum peat moss if necessary to achieve the desired acidity. Ensure the soil is loose and well-draining to promote healthy root growth.",
    },
    {
      title: "Step 3",
      description:
        "Acquire cinnamon plants or seeds from a reputable nursery or supplier. Cinnamon plants can be grown from seeds or obtained as young transplants. If starting from seeds, soak them overnight before planting to enhance germination.",
    },
    {
      title: "Step 4",
      description:
        "Dig a hole in the prepared soil, ensuring it is large enough to accommodate the cinnamon plants root system. If transplanting, carefully remove the plant from its container, gently loosen the roots, and place it in the hole at the same depth as it was in the container. If planting seeds, sow them at a depth of approximately half an inch below the soil surface.",
    },
    {
      title: "Step 5",
      description:
        "Water the newly planted cinnamon thoroughly to settle the soil around the roots. Ensure the soil remains consistently moist but not waterlogged. Apply a balanced fertilizer or compost around the base of the plant, taking care not to allow it to come into direct contact with the stem or leaves.",
    },
    {
      title: "Step 6",
      description:
        "Monitor the cinnamon plant regularly for signs of pests, diseases, or nutrient deficiencies. Prune any damaged or dead branches to promote healthy growth. Provide adequate water during dry periods, and protect the plant from extreme temperatures, especially frost. Mulch around the base of the plant to retain moisture and suppress weed growth.",
    },
  ];

  return (
    <div className="page-container">
      {/* First card: Discover Cinnamon */}
      <div className="discover-cinnamon-fullscreen">
        <div className="left-content">
          <div className="card-content">
            <h1>Discover Cinnamon</h1>
            <p>
              Unveiling the journey of cinnamon - from its historical spice
              routes to the modern kitchen cupboard.
            </p>
            <div className="buttons">
              <button className="action-button">Learn More</button>
              <button className="action-button">Get Started</button>
            </div>
          </div>
        </div>
        <div className="right-image"></div>
      </div>
      {/* New container: Cinnamon FAQ */}
      <div className="faq-container">
        <h2>Key Aspects of Cinnamon Cultivation</h2>

        <div className="faq-grid">
          {/* Add your FAQ items here */}
          <div className="faq-item">
            <h3>Which fertilizers to use?</h3>
            <p>
              Cinnamon thrives on organic fertilizers rich in nitrogen, with
              periodic application for optimal growth.
            </p>
          </div>
          <div className="faq-item">
            <h3>Soils and Climatic needs</h3>
            <p>
              Cinnamon cultivation in Sri Lanka is intricately tied to specific
              soil and climatic conditions that shape the quality and yield of
              this prized spice. Typically grown in coastal regions and
              extending to elevated areas up to approximately 250 meters above
              sea level, cinnamon thrives in diverse soil types, ranging from
              silver sands to loamy and lateritic gravelly soils. The finest
              quality cinnamon, known as "Alba," is often produced in the white
              sandy soils of the Negombo area. While cinnamon roots can
              penetrate deep into the soil, the plant flourishes best in areas
              with abundant sunshine and a moderate temperature range of 25˚C to
              32˚C. Adequate rainfall, preferably between 1,750 to 3,500 mm
              annually, is crucial for its growth, with wet zones being
              particularly conducive. However, prolonged dry spells pose
              challenges to cultivation, underscoring the importance of
              favorable climatic conditions for successful cinnamon farming.
            </p>
          </div>
          <div className="faq-item">
            <h3>Which fertilizers to use?</h3>
            <p>
              Proper fertilization and weeding practices are crucial aspects of
              cinnamon cultivation. Fertilizer application, typically performed
              twice a year during the onset of the Yala and Maha rainy seasons,
              ensures optimal soil nutrition for robust plant growth. In areas
              with soil pH levels below 4.5, dolomite is applied at a specified
              rate to rectify acidity issues. Weeding, an integral task in
              cinnamon farming, varies with plantation age—clean weeding is
              advised for young plantations, while slash weeding, carried out
              2-3 times annually, benefits mature crops. Additionally, soil
              conservation measures like contour trenches are implemented in
              sloped terrains to mitigate erosion. Plant training and pruning
              occur biannually, aimed at fostering a well-structured plant
              canopy and enhancing stem growth by removing excess lateral
              branches and weak shoots post-harvest. These practices
              collectively contribute to sustaining healthy cinnamon crops and
              optimizing yield quality.
            </p>
            <p>Recommended fertilizer mixture – 900 kg/ha/yr</p>
            <div className="fertilizer-table">
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
                    <td>Urea (46% N)</td>
                    <td>2</td>
                    <td>23% N</td>
                  </tr>
                  <tr>
                    <td>Rock phosphate (28% P2O5)</td>
                    <td>1</td>
                    <td>7% P2O5</td>
                  </tr>
                  <tr>
                    <td>Muriate of potash (60% K2O)</td>
                    <td>1</td>
                    <td>15% K2O</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            {/* Age of plantation table */}
            <div className="age-of-plantation-table">
              <table>
                <thead>
                  <tr>
                    <th>Age of plantation</th>
                    <th>Maha Season (mixture kg/ha)</th>
                    <th>Yala Season (mixture kg/ha)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st Year (six months after planting)</td>
                    <td>150</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>2nd Year</td>
                    <td>300</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>3rd Year</td>
                    <td>450</td>
                    <td>450</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Diseases and Pests Information */}
          <div className="faq-item">
            <h3>What are Diseases and Pests?</h3>
            <br></br>

            {/* Rough Bark Disease */}
            <div className="disease-item">
              <h4>Rough Bark Disease: Phomopsis sps.</h4>
              <p>
                Rough bark disease is the most common disease of cinnamon which
                affects young bark of immature shoots as brown spots and spread
                gradually throughout the trunk. Heavily infested plants show
                chlorosis and under severe conditions infected immature plants
                will die. Diseased bark cannot be peeled. Disease can be
                controlled by destroying diseased plants and through the
                adoption of correct cultural practices. Harvest should be done
                at correct intervals and excess lateral branches to be removed.
                As a chemical treatment, 1% Bordeaux mixture or copper-based
                fungicide can be sprayed.
              </p>
            </div>

            {/* White Root Disease */}
            <div className="disease-item">
              <h4>White Root Disease</h4>
              <p>
                Causal agent is a fungus known as Fomes noxius. Commonly found
                in cinnamon planted in lands which previously had rubber
                cultivations. Yellowing and subsequent shedding of leaves and
                sudden death of plant are visible symptoms. White color fungal
                mycelia growths can be observed on roots of infected plants. To
                control the spread of disease dead plants should be uprooted and
                burned. Root bases should be cleaned. Sulphur powder should be
                applied to the bases of infected plants and planting holes when
                new plants are establishing in such lands.
              </p>
            </div>

            {/* Pests */}
            <div className="disease-item">
              <h3>Pests</h3>
              <div className="pest-item">
                <h4>Pink Stem Borer: Ichnuemoniptera cf.xanthosoma</h4>
                <p>
                  Adult moth lays eggs in the bases of the cinnamon plant and
                  caterpillar (larvae) eats into the plant stem near the soil
                  surface. This insect damage is most common in old plantations
                  with poor crop management. As a result, new shoots may die and
                  some mature shoots collapse from the base. New shoot formation
                  also retarded. At the end gradually bush will die. The damage
                  can successfully be controlled by covering the plant base by
                  earthing up and through proper soil conservation. If the
                  damage is serious, chemicals such as carbofuran can be used.
                </p>
              </div>
              {/* ... other pest items */}
            </div>
          </div>
        </div>
      </div>
      {/* New container: How to Plant? */}
      <div className="how-to-plant-container">
        <h2>How to Plant?</h2>
        <p>Great for displaying multiple features and things like that.</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <button className="learn-more-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
      <div className="health-benefits-container">
        <h2>Health Benefits</h2>
        <p>
          Indulge in the healthful advantages of cinnamon, a delectable spice
          that complements wellness in every sprinkle.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">🌿</div>
            <h3>Antioxidants</h3>
            <p>
              Abundant in protective antioxidants, cinnamon can aid in warding
              off oxidative stress and promote vitality.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">💪</div>
            <h3>Anti-Inflammatory</h3>
            <p>
              Cinnamon's anti-inflammatory properties may relieve discomfort and
              advance the body's natural healing processes.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">🍬</div>
            <h3>Blood Sugar</h3>
            <p>
              This spice has the potential to regulate blood sugar levels,
              making it beneficial for those monitoring glucose intake.
            </p>
          </div>
        </div>
      </div>
               {/* Second card: Origin Story */}
         <div className="origin-story-card">
        <div className="left-section">
          <h2>Origin Story</h2>
          <p>
            Delve into the rich history of cinnamon, and explore its origins and
            cultural significance across the world. Cinnamon refers to several
            evergreen trees of the genus Cinnamomum native to Sri Lanka, the
            Malabar Coast, and Myanmar. Dried cinnamon bark is a popular spice
            used in cooking and baking, either in ground or stick form. It has a
            strong, spicy, sweet flavor. Cinnamon essential oil also has
            antibacterial and antifungal properties and is used by gardeners to
            stave off root rot.
          </p>
          <button className="more-history-button">More History</button>
          <div className="testimonial">
            <p>
              “Since incorporating CinnSpice Hub’s cinnamon into our recipes,
              our bakery’s customer satisfaction has soared!” - BakeMaster Amy
            </p>
          </div>
        </div>
        <div className="right-section">{/* Image would go here */}</div>
      </div>
    </div>
  );
}

export default Cinnamon;
