const fs = require("fs");
const data = require("./package.json");

data.homepage = "https://ubiquitous-gnome-b2f28a.netlify.app/";
console.log(data);
fs.writeFile("./package.json", JSON.stringify(data), err => {
    if (err) {
        console.log(err);
    }
})