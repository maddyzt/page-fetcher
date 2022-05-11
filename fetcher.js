// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data 
// you receive and write it to a file in your local filesystem.

// takes in 2 command line arguments
  // a url
  // a local file path

// it should download the resource at the URL to the local path on your machine
// when complete, logs "Downloaded and saved '1235' bytes to './index.html'"

// use node request to make http request
// use node fs to write file

// require request and fs
const request = require('request');
const fs = require('fs');


// define the argument array
const argArray = process.argv.slice(2);
const url = argArray[0].toString();
const filePath = argArray[1];

// define variables for body length and body text
let length = 0;
let requestText = "";


// request the resource
request(url, (error, response, body) => {
  length = body.length;
  requestText = JSON.stringify(body);
});

// write the file, and log only once the request is complete
setTimeout(() => {
  fs.writeFile(filePath, requestText, err => {
    if (err) {
      console.error(err);
    }
  console.log(`Downloaded and saved ${length} bytes to ${filePath}`);
  })
}, 200);



