const {
    getAllSevereData
} = require('../../models/slope.model');

async function httpGetAllSlopData(req, res) {
    return res.status(200).json(await getAllSevereData());
};
module.exports = {
    httpGetAllSlopData,
}