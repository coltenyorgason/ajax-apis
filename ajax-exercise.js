import axios from 'axios';

// PART 1: Show Dog Photo

async function showDogPhoto(evt) {
  // TODO: get a random photo from the Dog API and show it in the #dog-image div
const response = await axios.get("https://dog.ceo/api/breeds/image/random")
const dogPhoto = response.data.message
document.querySelector("#dog-image").innerHTML = `<img src=${dogPhoto}>`
}

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);

// PART 2: Show Weather

async function showWeather(evt) {
  const zipcode = document.querySelector('#zipcode-field').value;
  const response = await axios.get(`/weather.txt?zipcode=${zipcode}`)
  document.querySelector("#weather-info").innerText = response.data
  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-button').addEventListener('click', showWeather);

// PART 3: Order Cookies

async function orderCookies(evt) {
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  evt.preventDefault()
  // TODO: show the result message after your form
  const cookieType = document.querySelector("#cookie-type-field").value
  const cookieQTY = document.querySelector("#qty-field").value
  const response = await axios.post('/order-cookies.json', {cookieType: cookieType, qty: cookieQTY})
 const orderStatus = document.querySelector("#order-status")
 orderStatus.innerText = response.data.message
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
if(response.data.resultCode === "ERROR" ) {
  orderStatus.className = "order-error"
} else {
  orderStatus.className = ""
}
}
document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

async function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;
  const formData = {'term': searchTerm};
  const queryString = new URLSearchParams(formData).toString();
  const url = `https://itunes.apple.com/search?${queryString}`;
  const response = await axios.get(url)
  console.log(response)
  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
