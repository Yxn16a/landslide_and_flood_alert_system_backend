const path = require('path')
const {
    parse
} = require('csv-parse');

const stepnessData = [];

function isAlertSevere(slopData) {
    return slopData['groundWaterLevel'] > 5 && slopData['soilSpeed']>1;
}
const fs = require('fs');

function loadSlopData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'slop.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (isAlertSevere(data)) {
                    stepnessData.push(data)
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                // const possibleLandSlides = stepnessData.length;
                // console.log(`${stepnessData} severe data found!`);
                resolve();
            });
    });
}
async function getAllSevereData() {
    return stepnessData;
}

module.exports = {
    loadSlopData,
    getAllSevereData
};