'use strict';

const config = require('./config');
const Twit = require('twit');
const pnp = require('sp-pnp-js');
const T = new Twit(config.twitter);

const spConfig = {
    list: 'Twits',
    tags: ['#sharepoint', '#PnP-JS-Core', '#SPFX', '#Office365']
}

const initializeList = () => {
    console.log('Iniciando...');
    pnp.sp.web.lists.ensure(spConfig.list)
        .then(response => {
            console.log(response.data.Title);
            initializeTwit();
        })
        .catch(error => {
            console.log(Error(error));
        });
}

const initializeTwit = () => {
    console.log('Iniciando Twit...');
    let stream = T.stream('statuses/filter', { track: spConfig.tags });
    stream.on('tweet', function (tweet) {
        console.log('Saving twit :', tweet.text);
        pnp.sp.web.lists.getByTitle(spConfig.list).items
            .add({
                Title: tweet.text
            })
            .then(response => {
                console.log('Item created :', response.data.Title);
            })
            .catch(error => {
                console.log(Error(error));
            });
    });
}

const initialize = () => {
    pnp.setup(config.sp);
    pnp.sp.web.select("Title").get()
        .then((web) => {
            console.log('We are working on :', web.Title)
            initializeList()
        })
        .catch(error => {
            console.log(Error(error));
        });
}

initialize();