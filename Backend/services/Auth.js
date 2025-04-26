const jwt =require("jsonwebtoken")

const secret = "$23$Hardik$23$Rajendra$23$Kelotra$23$"

function SetCookie (User){
    return jwt.sign({
        email : User.email,
        first_name : User.first_name,
        last_name : User.last_name,
        type : User.type
    },secret)
}

function GetUser (token){
    try {
        const decodedUser = jwt.verify(token, secret); 
        return decodedUser;
    } catch (err) {
        return 0;
    }
}

module.exports = {
    SetCookie,
    GetUser
}