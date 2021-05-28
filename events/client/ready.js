const memmberCounter = require('../../counters/memeber-counter');

module.exports = (Discord, client) => {
    console.log('online! yay');
    memmberCounter(client);
}