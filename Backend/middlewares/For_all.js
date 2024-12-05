const express =require("express")

function EncodeDecode(){
    return(express.urlencoded({ extended: true }))
}

module.exports ={
    EncodeDecode
}