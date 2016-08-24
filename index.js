'use strict';

const config = require('./config');
const twit = require('twit');
const pnp = require('sp-pnp-js');
const T = new Twit(config.twitter);

const initialize = () => {
    console.log('Iniciando...')
    
    pnp.setup(config.sp);

    let stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })

    stream.on('tweet', function (tweet) {
        console.log(tweet)
    });
}
