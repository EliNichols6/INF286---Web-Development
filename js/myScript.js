const fs = require('fs');
const request = require('request')

function alertOnButton() {
    let color = document.getElementById("fontSize").value
    let webpage = document.getElementById("myWebpage");
    webpage.style = "background-color: " + color + ";";
  }

function alertOnButton2() {
    let fontSize = document.getElementById("fontSize").value
    let webpage = document.getElementById("myWebpage");
    webpage.style = "font-size: " + fontSize + ";";

}

function largeInList(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  console.log(largest);
}

function httpRequest() {
  let url = new URL('https://api.weather.gov/points/39.7456,-97.0892')
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.send()
  xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
    }
  };

}

function isPalindrome(word) {
  if (word === word.split('').reverse().join('')) {
    console.log("True");
  } else {
    console.log("False");
  }

}

function listFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err);
    }
    console.log(files);
  });
}

function readFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function makeRequest(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    console.log("Status: ", response);
    console.log("Body: ", body);
  })
}

isPalindrome("racecar");
listFiles("./test/");
readFile("./test/text1.txt");
makeRequest("http://www.google.com");
