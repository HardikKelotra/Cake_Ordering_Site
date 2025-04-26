let express=require("express")

const {AllItems,AllOrders} =require("../controllers/Admin")
const {CheckAdmin , CheckLoggedIn}=require("../middlewares/Authentication")

let AdminRouter = express.Router();

AdminRouter.post("/items",CheckLoggedIn,CheckAdmin,AllItems)

AdminRouter.get("/All_Orders",CheckLoggedIn,CheckAdmin,AllOrders);

module.exports ={
    AdminRouter
}