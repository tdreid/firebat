const request = require('request');
const project = require('config').get('ProjectId');

module.exports = (ref) => {
    request.get(
        `https://${project}.firebaseio.com/${ref}.json`,
        (err, res, body) => {
            if (err) console.error(err);
            if (res.statusCode === 200) {
                //Parse and re-stringify to validate
                console.log(JSON.stringify(JSON.parse(body)));
            } else {
                console.log(res.statusCode, res.statusMessage);
            }
        }
    );
};
