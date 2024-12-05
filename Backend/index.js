const express = require("express");
const cors =require("cors");

const cookieParser = require('cookie-parser');
const {EncodeDecode} =require("./middlewares/For_all")

const {GetAllItems} =require("./controllers/Common_Projection")

const {UserRouter} =require("./Routes/Users_Router")
const {AdminRouter} =require("./Routes/Admin_Router")

const app = express();

app.use(cors());

app.use(cookieParser())
app.use(EncodeDecode());
app.use(express.json());


app.use("/User",UserRouter);
app.use("/Admin",AdminRouter);
app.get("/Menu",GetAllItems);

app.listen(8000, () => console.log("Server Started"));
