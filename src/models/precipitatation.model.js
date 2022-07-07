const path = require('path')
const {
    parse
} = require('csv-parse');

const AlertsData = [];

function isAlertSevere(precipitationData) {
    return precipitationData['Amount'] > 10;
}
const fs = require('fs');

function loadPrecipitationData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'rain.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (isAlertSevere(data)) {
                    AlertsData.push(data)
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                const RainDataFound = AlertsData.length;
                console.log(`${RainDataFound } severe data found!`);
                resolve();
            });
    });
}
async function getAllSevereData() {
    return AlertsData;
}

module.exports = {
    loadPrecipitationData,
    getAllSevereData
};