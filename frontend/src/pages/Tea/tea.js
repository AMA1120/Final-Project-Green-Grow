import React from 'react'
import './tea.css'

function tea() {
    return (
        <div className="tea-garden">
          <header>
            <h1>Learn From the Best: Growing Your Own Tea</h1>
          </header>
          <main>
            {/* Content section for "What Is a Tea Plant?" */}
            <div className="knowledge-section">
              <h2>What Is a Tea Plant?</h2>
              <p>
                The common tea plant—Camellia sinensis—is a species of flowering plant that produces leaves used to make tea. Native to Asia, it is cultivated worldwide, with leaves producing oolong, black, green, and white tea. Herbal teas like chamomile are not grown from the common tea plant.
              </p>
            </div>
    
            {/* Content section for "The 2 Main Types of Tea Plants" */}
            <div className="knowledge-section">
              <h2>The 2 Main Types of Tea Plants</h2>
              <p>
                The two main types of Camellia sinensis cultivars used to make tea are Camellia sinensis var. sinensis and Camellia sinensis var. assamica. Both produce oolong, black, green, and white teas with variations in flavors.
              </p>
            </div>
    
            {/* Content section for "How Is Tea Grown?" */}
            <div className="knowledge-section">
              <h2>How Is Tea Grown?</h2>
              <p>
                Tea plants can be grown from seeds, seedlings, or cuttings. Growing from seeds is a lengthy process, while using seedlings or cuttings is quicker. Tea plants thrive in warm temperatures and can take up to three years to mature.
              </p>
            </div>
    
            {/* Content section for "How to Plant Tea in 7 Steps" */}
            <div className="knowledge-section">
              <h2>How to Plant Tea in 7 Steps</h2>
              <ol>
                <li>Buy tea seeds or seedlings.</li>
                <li>Prepare soil with a pH between 5.5 and 6.5.</li>
                <li>Soak and dry out your seeds before planting.</li>
                <li>Nurture germinated seeds in a small pot.</li>
                <li>Plant your tea in a sunny location with well-draining soil.</li>
                <li>Water your tea plant regularly but avoid overwatering.</li>
                <li>Allow your tea plant to grow for two to three years before harvesting.</li>
              </ol>
            </div>
    
            {/* Content section for "Harvesting and Processing Your Tea" */}
            <div className="knowledge-section">
              <h2>Harvesting and Processing Your Tea</h2>
              <p>
                After growing your tea, harvest and process based on the type:
                <ul>
                  <li>Green tea: Harvest highest leaves, air dry, and heat in a pan.</li>
                  <li>Black tea: Cut mature leaves, roll, air dry, and bake.</li>
                  <li>White tea: Pick unopened leaves, wither in the sun, and bake.</li>
                  <li>Oolong tea: Choose large leaves, sun exposure, oxidize, and heat.</li>
                </ul>
              </p>
            </div>
    
            {/* Content section for "7 Tips for Growing Tea" */}
            <div className="knowledge-section">
              <h2>7 Tips for Growing Tea</h2>
              <ol>
                <li>Keep your plants warm with a temperature of 70-85°F.</li>
                <li>Add sphagnum moss for indoor container growing.</li>
                <li>Mulch periodically to keep soil moist and free from weeds.</li>
                <li>Prune your tea bush to prevent overcrowding.</li>
                <li>Feed your tea plants with organic fertilizers.</li>
                <li>Keep stored leaves dry before storage.</li>
                <li>Protect plants from pests and diseases with natural remedies.</li>
              </ol>
            </div>
    
            {/* Add more content sections for other topics */}
          </main>
        </div>
      );
}

export default tea
