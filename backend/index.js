const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');



const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
