const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// app.listen(3000, () => {
//   console.log('Server running');
// });

// app.get('/items', (req, res) => {
//   res.json([]);
// });

// app.post('/items', (req, res) => {
//   const data = req.body;
//   res.status(201).json(data);
// });

// app.delete('/items/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ message: 'Deleted', id });
// });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];

  const email = "ur_id";
  const name = "name";
  const mobileNo = "urno";
  const githubusername = "usernamegithub";
  const rollNo = "urnumber";
  const accessCode = "QkbpxH";

  res.status(200).json({ email, name, mobileNo, githubusername, rollNo, accessCode });
});

  


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});