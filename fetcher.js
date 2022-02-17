const fs = require('fs')
const request = require('request');

input = process.argv.slice(2);




const fetcher = function(URL, localFilePath) {
  request(URL, (error, response, body) => {
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`)
  })
});
};


fetcher(input[0], input[1]);

