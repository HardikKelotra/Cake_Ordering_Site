const {GetUser,SetCookie} =require('../services/Auth')


function CheckLoggedIn(req,res,next)
{
    const User = req.cookies.user_cookie ;

    if(!User) res.send("Not Logged In ");

    token = GetUser(User);
    if(!token) res.send("Not Authentic");
    
    req.user=token;

    console.log(req.user);

    next();
}

function CheckAdmin (req,res,next){
    
    console.log(req)
    const token =req.cookies.user_cookie ;

    const user = GetUser(token);
    
    if(user.type === 'Admin') next();
    else return (res.send("Not Admin"));
}

module.exports = {
    CheckLoggedIn,CheckAdmin
}