import redis from 'redis'
let client;
client = redis.createClient()
const log = console.log;
client.on('connect',()=>log('Redis connected'))

const cacheMidWare =  (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;

    client.get(key, (err, reply) => {
        if (reply) {
            res.send(reply);
            return;
        } else {
            res.sendResponse = res.send;
            res.send = body => {
                client.psetex(key, 60000, body);
                res.sendResponse(body);
            };
            next();
        }
    });

};

export default cacheMidWare;