// Simple test script to verify routing works
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('dist'));

// Handle all routes - serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
  console.log('Test these URLs:');
  console.log(`- http://localhost:${PORT}/`);
  console.log(`- http://localhost:${PORT}/about`);
  console.log(`- http://localhost:${PORT}/skills`);
  console.log(`- http://localhost:${PORT}/projects`);
  console.log(`- http://localhost:${PORT}/certificates`);
  console.log(`- http://localhost:${PORT}/contact`);
  console.log(`- http://localhost:${PORT}/nonexistent`); // Should redirect to home
});
