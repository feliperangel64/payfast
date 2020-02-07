var memcached = require('memcached');

function MemcachedClient() {

    var client = new memcached('172.17.0.1:11211',
        {
            retries: 1,
            retry: 5000,
            remove: true
        });
    return client;
}

module.exports = function () {

    return MemcachedClient;
}