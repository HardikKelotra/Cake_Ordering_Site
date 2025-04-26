const e = require("express");
const { Item } = require("../models/model");

async function GetAllItems(req, res) {
    try {
        data = await Item.find({});
        res.json(data); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the items.' });
    }
}

module.exports = {
    GetAllItems
};
