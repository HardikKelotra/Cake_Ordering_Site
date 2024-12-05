const {Item , Order ,User} = require("../models/model")
const {GetUser} =require("../services/Auth")

async function AllOrdersUsers (req,res) {
    let body = GetUser(req.cookies.user_cookie) ;
    const orders = await Order.find({email : body.email})
    let Total_cost=0;
    orders.map(order => (Total_cost+=order.quantity*order.price))
    console.log(Total_cost)

    if (orders.length > 0) {
        const mappedUsers = await orders.map(order => ({
            id: order._id,
            date : order.del_date,
            order_date : order.order_date,
            email: order.email,
            item : order.order_item,
            quantity : order.quantity,
            price : order.price
        }));

        res.send(mappedUsers);
    }
    else
    {
        return res.send("<h1>No order Placed Yet</h1>")
    }
}

async function PlaceOrders (req,res){
    const body = req.body;
    const [day,month,year] = body.date.split('/');
    const formatted =`${year}-${month}-${day}`

    let customer_info =GetUser(req.cookies.user_cookie);


    const item_detail = await Item.findOne({item : body.item})

    await Order.create({
        order_status: "Placed",  
        order_date : Date.now(),
        del_date : new Date(formatted),
        email : customer_info.email,
        order_item : body.item,
        quantity : body.quantity,
        price : item_detail.price
    })
    return res.send(`<h1>Order Successfull ${customer_info.email}</h1>`)
}

async function OrderCancel (req,res) {
    const item_del = req.body;

    const customer_info = GetUser(req.cookies.user_cookie);

    await Order.deleteMany({ order_item : item_del.item , email : customer_info.email}).then(res.send(`Order for ${item_del.item} cancelled`))
}

module.exports ={
    AllOrdersUsers, PlaceOrders ,OrderCancel
}