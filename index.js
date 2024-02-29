const dotenv = require ('dotenv');
dotenv.config();
const express = require("express");
const requestRoutes = require("./routes/handlerequestRoutes");


const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

 
app.use('/generate', requestRoutes)
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });