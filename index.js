let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreActual = 0
let guestScoreActual = 0

function addOneHome() {
    homeScoreActual += 1
    homeScore.textContent = homeScoreActual
}

function addTwoHome() {
    homeScoreActual += 2
    homeScore.textContent = homeScoreActual
}

function addThreeHome() {
    homeScoreActual += 3
    homeScore.textContent = homeScoreActual
}

function addOneGuest() {
    guestScoreActual += 1
    guestScore.textContent = guestScoreActual
}

function addTwoGuest() {
    guestScoreActual += 2
    guestScore.textContent = guestScoreActual
}

function addThreeGuest() {
    guestScoreActual += 3
    guestScore.textContent = guestScoreActual
}

function refresh() {
    homeScoreActual = 0
    guestScoreActual = 0
    homeScore.textContent = guestScoreActual
    guestScore.textContent = guestScoreActual
}