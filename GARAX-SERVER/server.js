const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const authRoutes = require('./src/routes/access/index');
require('dotenv').config();

const app = express();
app.use(cors());  // Để cho phép React kết nối với Node.js
app.use(bodyParser.json());

app.use('/auth', authRoutes)


const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});