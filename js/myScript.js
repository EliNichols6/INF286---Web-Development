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