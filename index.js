let home = document.getElementById("home-score")
let homeStyle = document.getElementById('home-box').style
let guest = document.getElementById("guest-score")
let guestStyle = document.getElementById('guest-box').style
let homeScore = 0
let guestScore = 0

function homeAddOne() {
    homeScore += 1
    home.textContent = homeScore
    scoreBackground()
}

function homeAddTwo() {
    homeScore += 2
    home.textContent = homeScore
    scoreBackground()
}

function homeAddThree() {
    homeScore += 3
    home.textContent = homeScore
    scoreBackground()
}

function guestAddOne() {
    guestScore += 1
    guest.textContent = guestScore
    scoreBackground()
}

function guestAddTwo() {
    guestScore += 2
    guest.textContent = guestScore
    scoreBackground()
}

function guestAddThree() {
    guestScore += 3
    guest.textContent = guestScore
    scoreBackground()
}

function newGame() {
    homeScore = 0
    home.textContent = homeScore
    guestScore = 0
    guest.textContent = guestScore
    homeStyle.boxShadow="unset"
    guestStyle.boxShadow="unset"
}

function scoreBackground() {
    if (homeScore > guestScore) {
        homeStyle.boxShadow="0px 0px 15px 4px #52CC00"
        guestStyle.boxShadow="unset"
    }
    else if (guestScore > homeScore) {
        homeStyle.boxShadow="unset"
        guestStyle.boxShadow="0px 0px 15px 4px #52CC00"
    }
    else {
        homeStyle.boxShadow="0px 0px 15px 4px #FFA500"
        guestStyle.boxShadow="0px 0px 15px 4px #FFA500"
    }
}
