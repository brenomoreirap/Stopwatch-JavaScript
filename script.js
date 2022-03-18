var h = 0
var m = 0
var s = 0
var hours = document.querySelector("#hours")
var minutes = document.querySelector("#minutes")
var seconds = document.querySelector("#seconds")
var startBtn = document.querySelector("#start")
var stopBtn = document.querySelector("#stop")
var resetBtn = document.querySelector("#reset")
var interval

function start() {
    s++
    if (s <= 9) {
        seconds.innerHTML = `0${s}`
    }
    if (s > 9) {
        seconds.innerHTML = s
    }
    if (s > 60) {
        m++
        minutes.innerHTML = `0${m}`
        s = 0
        seconds.innerHTML = `0${s}`
    }
    if (m <= 9) {
        minutes.innerHTML = `0${m}`
    }
    if (m > 9) {
        minutes.innerHTML = m
    }
    if (m > 60) {
        h++
        hours.innerHTML = `0${h}`
        m = 0
        minutes.innerHTML = `0${m}`
    }
    if (h >= 9) {
        hours.innerHTML = h
    }
}

startBtn.onclick = function () {
    interval = setInterval(start, 1000)
}

stopBtn.onclick = function pause() {
    clearInterval(interval)
}

resetBtn.onclick = function reset() {
    clearInterval(interval)
    s = 0
    m = 0
    h = 0
    hours.innerHTML = "00"
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
}