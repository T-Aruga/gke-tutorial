const {workerData} = require('worker_threads')
let webclient = require("request");

console.log(workerData)
let count = 0;
const countUp = () => {
  console.log(count++);
  webclient.get({
    url: "http://localhost:3000",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({foo: "bar"})
  }, function (error, response, body){
    console.log(body);
  });
}
setInterval(countUp, 500);
