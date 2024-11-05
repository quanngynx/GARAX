const app = require('./src/app');

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost/${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const authRoutes = require('./src/routes/access/index');
// require('dotenv').config();
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use('/auth', authRoutes)



