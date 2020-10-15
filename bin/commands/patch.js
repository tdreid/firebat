const fs = require('fs');
const dj = require('ndjson-parse');
const request = require('request');
const project = require('config').get('ProjectId');

module.exports = (ref, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        const entries = dj(data);
        entries.forEach((entry, n) => {
            request.put(
                {
                    uri: `https://${project}.firebaseio.com/${ref}.json`,
                    json: true,
                    body: entry,
                },
                (err, res) => {
                    if (err)
                        console.error(`Error ${err} received for line ${n}.`);
                    if (res)
                        console.log(
                            `Response ${res.statusCode} received for line ${n}.`
                        );
                }
            );
        });
    });
};
