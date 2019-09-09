import redis from 'redis'
let client;
client = redis.createClient()
const log = console.log;
client.on('connect',()=>log('Redis connected'))

export const cacheMidWare =  (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;

    client.get(key, function(err, reply) {
        if (reply) {
            res.send(reply);
            return;
        } else {
            res.sendResponse = res.send;
            res.send = body => {
                client.setex(key, 60, body);
                res.sendResponse(body);
            };
            next();
        }
    });

};

