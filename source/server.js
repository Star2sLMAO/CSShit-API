const express = require('express');
const server = express();
const chalk = require('cli-color');

// not using mongodb btw.

server.get('/', (req,res) => {
    const date = new Date();
    return res.json({
        "info": "com.star2s.csshit.entry",
        "message": "Welcome to CSShit API",
        "date": date.toUTCString()
    })
});

// view profiles
server.get('/api/profile/view', (req,res) => {
    let Key = req.query.key;
    if(Key == require('./configuration/config.json').ServerInfo.APIKEY) {
        // TODO: Add Profiles to View (lol)
    } else {
        return res.json(require('./jsons/errors.json')['com.star2s.csshit.apikey']);
    }
});

// 404 not found
server.get('*', (req,res) => {
    console.log(chalk.yellow('[CSShit] ') + 'Api endpoint not found. ' + chalk.red('Someone looking through API?'))
    return res.json(require('./jsons/errors.json')['com.star2s.csshit.notfound']);
});

server.listen(require('./configuration/config.json').ServerInfo.PORT, () => {
    console.clear();
    console.log(chalk.red('[CSShit] ') + 'The server is listening on port ' + require('./configuration/config.json').ServerInfo.PORT);
});