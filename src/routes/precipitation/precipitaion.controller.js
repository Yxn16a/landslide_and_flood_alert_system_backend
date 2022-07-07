const {
    // getAllPrecipitation
    getAllSevereData
} = require('../../models/precipitatation.model');

async function httpGetAllPrecipitation(req, res) {
    // this returns the array of the collection of map objects
    return res.status(200).json( await getAllSevereData())
};
module.exports = {
    httpGetAllPrecipitation, 
}