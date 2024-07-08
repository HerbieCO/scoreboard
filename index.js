let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
