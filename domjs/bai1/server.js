const http = require('http');

const requestListener = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.writeHead(200);
    res.write(JSON.stringify([{
        "name": "John",
        "age": 30,
        "cars": [{
            "name": "Ford",
            "models": ["Fiesta", "Focus", "Mustang"]
        }, {
            "name": "BMW",
            "models": ["320", "X3"]
        }]
    }, {
        "name": "Maria",
        "age": 25,
        "cars": [{
            "name": "Fiat",
            "models": ["500", "Panda"]
        }]
    }, {
        "name": "David",
        "age": 40,
        "cars": [{
            "name": "Ford",
            "models": ["Fiesta", "Focus", "Mustang"]
        }, {
            "name": "BMW",
            "models": ["320", "X3", "X5"]
        }, {
            "name": "Fiat",
            "models": ["500", "Panda"]
        }]
    }]));
    res.end()
}
const server = http.createServer(requestListener);
server.listen(8080);


console.log(`http://localhost:8080`)