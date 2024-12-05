const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Cake_Site')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Failed to connect MongoDB", err));

const UserSchema = new mongoose.Schema({
    customer_id : {
        type : mongoose.Schema.Types.ObjectId
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    type : {
        type : String,
        default : "User"
    },
    password : {
        type : String,
        required :true
    }
});

const orderSchema =new mongoose.Schema(
    {
        order_id :{
            type : mongoose.Schema.Types.ObjectId
        }
        ,
        order_date :{
            type :Date,
            required : true
        },
        del_date :{
            type : Date,
            required :true
        },
        email : {
            type :String,
            required :true
        },
        order_status :{
            type :String,
            retuired : true
        },
        order_item :{
            type : String,
            required : true
        },
        quantity : {
            type : Number,
            required : true
        },
        price : {
            type : Number,
            required :true
        }
    }
)

const itemSchema = new mongoose.Schema({
    item : {
        type : String ,
        required :true,
        unique :true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type :String ,
        required : true
    },
    discription : {
        type :String,
        required : true
    }
})

console.log(itemSchema)


const Item =mongoose.model('Items',itemSchema);

const Order=mongoose.model('Orders',orderSchema);

const User = mongoose.model('All_Users', UserSchema);

module.exports = {
    Item,Order,User
}