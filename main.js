const input = document.querySelector("input") 
// console.log(input.value)
const button = document.querySelector("button")
// console.log(button)
const userInput = document.querySelectorAll("#user-input")
// console.log(userInput.textContent)
const error = document.querySelector(".heading p")

//length
const metersFeet = document.getElementById("meters-feet")
const feetMeters = document.getElementById("feet-meters")

//Volume
const litersGallons = document.getElementById("liters-gallons")
const gallonsLiters = document.getElementById("gallons-liters")

//Mass
const kilosPounds = document.getElementById("kilos-pounds")
const poundsKilos = document.getElementById("pounds-kilos")

button.addEventListener("click", () => {
    userInput.forEach(usIn => {
        if (input.value > 0 ) {
            error.style.opacity = 0
            usIn.textContent = input.value
            convertLength()
            convertVolume()
            convertMass()
        } else if (input.value === "") {
            error.textContent = "Please enter a number"
            error.style.opacity = 1
        } else {
            error.textContent = "Please enter number greater than 0"
            error.style.opacity = 1
        }
    })
})

function convertLength() {
    metersFeet.textContent = (input.value * 3.280).toFixed(3)
    feetMeters.textContent = (input.value / 3.280).toFixed(3)
}

function convertVolume() {
    litersGallons.textContent = (input.value * 0.264).toFixed(3)
    gallonsLiters.textContent = (input.value / 0.264).toFixed(3)
}

function convertMass() {
    kilosPounds.textContent = (input.value * 2.204).toFixed(3)
    poundsKilos.textContent = (input.value / 2.204).toFixed(3)
}