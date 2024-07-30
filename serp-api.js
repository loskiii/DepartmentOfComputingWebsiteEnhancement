// Fetch the most recent articles using the SERP API
async function fetchRecentArticles(lecturerName) {
    const apiUrl = 'https://api.serphouse.com/serp/live';
    const apiKey = '';
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        data: {
          domain: 'google.com',
          lang: 'en',
          q: `${lecturerName} research articles`,
          loc: 'Nairobi, Kenya',
          device: 'desktop',
          serp_type: 'web'
        }
      })
    });
  
    const data = await response.json();
    return data.organic.slice(0, 3); // Return the first 3 organic results
  }
  
  // Update the card content with the most recent articles
  async function updateArticleCards() {
    const lecturerName = 'Lawrence Nderu'; // Replace with the actual lecturer's name
    const recentArticles = await fetchRecentArticles(lecturerName);
  
    const cardContainers = document.querySelectorAll('.a_card');
    cardContainers.forEach((card, index) => {
      card.querySelector('p').textContent = recentArticles[index].title;
      card.href = recentArticles[index].url;
    });
  }
  
  // Call the updateArticleCards function when the page loads
  window.addEventListener('DOMContentLoaded', updateArticleCards);
  