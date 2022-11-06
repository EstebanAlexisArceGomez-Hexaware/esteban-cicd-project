const fs = require("fs");
const data = require("./package.json");

data.homepage = process.argv[2].replace("url=", "");
fs.writeFile("./package.json", JSON.stringify(data), err => {
    if (err) {
        console.log(err);
    }
})