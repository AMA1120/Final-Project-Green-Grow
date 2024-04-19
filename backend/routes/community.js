const express = require('express');
const router = express.Router();
const Community = require('../models/community');
const CommunityAnswers = require('../models/answers');

// Route to fetch all community posts
router.get('/get', async (req, res) => {
  try {
    const communities = await Community.find().sort({ createdAt: -1 });
    res.json(communities);
  } catch (error) {
    console.error('Error fetching community posts:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to create a new community post
router.post('/new', async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const newCommunity = new Community({
      title,
      content,
      image,
    });

    await newCommunity.save();
    res.status(201).json({ message: 'Community post created successfully' });
  } catch (error) {
    console.error('Error creating community post:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to submit an answer
router.post('/answer', async (req, res) => {
  try {
    const { answer, questionId } = req.body;

    const newAnswer = new CommunityAnswers({
      answer,
      questionId,
    });

    await newAnswer.save();
    res.status(201).json({ message: 'Answer submitted successfully' });
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to fetch all community posts
router.get('/getAnswers', async (req, res) => {
  try {
    const Answer = await CommunityAnswers.find().sort({ createdAt: -1 });
    res.json(Answer);
  } catch (error) {
    console.error('Error fetching community posts:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

