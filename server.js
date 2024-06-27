const express = require('express');
const scholar = require('scholar.js');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for Lawrence Nderu's articles
app.get('/api/lecturers/Dr+lawrence+nderu&oq/articles', async (req, res) => {
  try {
    // Fetch the recent research articles for Lawrence Nderu from Google Scholar
    const recentArticles = await scholar.search('Dr+lawrence+nderu&oq', { limit: 3 });

    res.json(recentArticles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// API endpoint for Joseph Wafula's articles
app.get('/api/lecturers/Josephwafula/articles', async (req, res) => {
  try {
    // Fetch the recent research articles for Joseph Wafula from Google Scholar
    const recentArticles = await scholar.search('Joseph Wafula', { limit: 3 });

    res.json(recentArticles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// API endpoint for Stephen Kimani articles
app.get('/api/lecturers/jane-smith/articles', async (req, res) => {
    try {
      // Fetch the recent research articles for Stephen Kimani from Google Scholar
      const recentArticles = await scholar.search('Jane Smith', { limit: 3 });
  
      res.json(recentArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });

 // API endpoint for Agness Mindila articles
app.get('/api/lecturers/jane-smith/articles', async (req, res) => {
    try {
      // Fetch the recent research articles for Agness Mindila from Google Scholar
      const recentArticles = await scholar.search('Jane Smith', { limit: 3 });
  
      res.json(recentArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });

// API endpoint for Waweru Mwangi articles
app.get('/api/lecturers/jane-smith/articles', async (req, res) => {
    try {
      // Fetch the recent research articles for Waweru Mwangi from Google Scholar
      const recentArticles = await scholar.search('Jane Smith', { limit: 3 });
  
      res.json(recentArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });
  
   
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
