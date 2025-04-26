const {User} =require("../models/model")
const {SetCookie} =require("../services/Auth")

async function UserSignUp(req, res) {
    const dta = req.body;
    User.create({
        first_name : dta.first_name,
        last_name : dta.last_name,
        email : dta.email,
        password : dta.password
    })
    .then(user => {
        return res.send(`<h1>Sign/Up successfull ${dta.first_name}</h1>`);
    })
    .catch(err => {
        return res.status(500).send("Error occurred: " + err.message);
    });
}

async function UserLogin(req,res){

    const {email , password} = req.body;

    const find = await User.findOne({email , password});

    if(!find) return res.send("Not A User");
    
    const token = SetCookie(find)
    res.cookie('user_cookie',token)

    return res.send("Looged InSuccessfully");
} 

module.exports ={
    UserSignUp,
    UserLogin
}