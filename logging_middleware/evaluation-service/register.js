const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Helper function to generate random strings
const generateID = (length = 24) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];

  const response = {
    email: "ss1132@srmist.edu.in",
    name: "Siya Srivastava",
    rollNo: "RA2311003030240",
    clientID: generateID(16),
    clientSecret: generateID(32),
    receivedData: data   
  };

  res.status(200).json(response);
});

app.get('/items', (req, res) => {
  res.status(200).json({
    message: "GET endpoint working properly"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});