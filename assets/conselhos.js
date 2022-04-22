const paragr = document.querySelector("h9")

fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json()
})

.then(data => {
    var conselho = data.slip.advice
    paragr.innerText = conselho
})