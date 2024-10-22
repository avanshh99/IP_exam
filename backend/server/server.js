const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let contacts = [
  { name: 'Jenny Caniver', phone: '9839037890' },
  { name: 'Ram Lakhan ', phone: '9876543213' },
];

app.get('/contacts', (req, res) => {
  res.json(contacts); // Send the contacts 
});

app.post('/contacts', (req, res) => {
  const { name, phone } = req.body;
  contacts.push({ name, phone }); // Add new contact 
  res.status(201).json({ message: 'Contact added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
