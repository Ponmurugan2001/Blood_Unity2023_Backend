const express= require('express');
const morgan = require("morgan");
const cors = require("cors");
const userRouter=require("./routes/authRoutes")
const inventoryRouter=require("./routes/inventoryRoutes")

const app= express();
require('dotenv').config();
const dbconfig =require("./config/db")
app.use(express.json())

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// http://localhost:8080/api/v1
app.use('/api/v1/auth',userRouter)
app.use('/api/v1/inventory',inventoryRouter)
app.get("/",(req,res)=>{
    res.send("welcome to backend")
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(
      
        `server running on ${PORT}`
    );
  });
  