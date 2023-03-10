// setTimeout(() => {
//     window.location.assign("reklam/billboard.html");
// }, 1000);

// setInterval(
//     function forward() {
//         window.history.forward()
//     }, 3000)



var fs = require("fs")
var config = fs.readFileSync("/Users/yali/Desktop/exchange/config.txt");
console.log(config.toString());

var satir = config.toString().split("\n");
console.log(satir)

if (satir[0] == "1") {
    setTimeout(() => {
        window.location.assign("reklam/billboard.html");
    }, 1000);

    setInterval(
        function forward() {
            window.history.forward()
        }, 3000)
}