const rp = require("request-promise");
const fs = require("fs");

let i = 2;

const download = async () => {
  let paddedI = i.toString().padStart(3, "0");

  let url = `https://www.bootdisk.com/housecall/${paddedI}.htm`;

  console.log(url);

  await rp(url)
    .then(function (html) {
      //success!
      console.log(html);

      fs.writeFileSync(`./housecall/${paddedI}.htm`, html, "utf-8");

      i++;
      download();
    })
    .catch(function (err) {
      //handle error
      console.log("!!! ERROR", err.message);

      i++;
      download();
    });
};

const go = () => {
  download();
};

go();
