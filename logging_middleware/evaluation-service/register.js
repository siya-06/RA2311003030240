const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];

  const email = "ss1132@srmist.edu.in";
  const name = "Siya Srivastava";
  const mobileNo = "6389299955";
  const githubusername = "siya-06";
  const rollNo = "RA2311003030240";
  const accessCode = "QkbpxH";
  

res.status(200).json({ email, name, mobileNo, githubusername, rollNo, accessCode});
});

app.get('/items', (req, res) => {
  const clientID = "";
  const clientSecret = "";
  res.json([]);
});
  


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});