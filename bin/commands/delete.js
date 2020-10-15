const request = require('request');
const project = require('config').get('ProjectId');

module.exports = (ref) => {
    request.delete(
        {
            uri: `https://${project}.firebaseio.com/${ref}.json`,
        },
        (err, res) => {
            if (err) console.error(`Error ${err} received for line ${n}.`);
            if (res)
                console.log(
                    `Response ${res.statusCode} received for line ${n}.`
                );
        }
    );
};
