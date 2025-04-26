const {Item ,Order} =require("../models/model")

async function AllItems (req,res) {
    const body = req.body;

    await Item.create({item : body.item , price : body.price , category : body.category , discription : body.discription}).then(console.log("done"))

    res.send("DONE")
}

async function AllOrders (req,res) {
    const all_orders=await Order.find({})

    const ret = all_orders.map(order=>({
        item : order.order_item,
        quantity :order.quantity,
        delivery_date : order.del_date,
        email : order.email,
}))

    res.send(ret);
}

module.exports ={
    AllItems,AllOrders
}