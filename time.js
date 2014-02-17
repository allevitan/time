conversionFactor = (Math.PI * 2) / (24 * 60 * 60);

window.onload = function(){
    window.setInterval(updateTime,10);
}

function updateTime() {
    d = new Date()
    document.getElementById('local').innerHTML = radiansSinceMidnight(d).toPrecision(6);
    document.getElementById('utc').innerHTML = radiansSinceUTCMidnight(d).toPrecision(6);
    document.getElementById('epoch').innerHTML = radiansSinceEpoch(d).toPrecision(11);
}

function radiansSinceMidnight(date){
    var seconds = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000;
    return toRadians(seconds);
}

function radiansSinceUTCMidnight(date){
    var seconds = date.getUTCHours() * 60 * 60 + date.getUTCMinutes() * 60 + date.getUTCSeconds() + date.getUTCMilliseconds() / 1000;
    return toRadians(seconds);
}

function radiansSinceEpoch(date){
    return toRadians(date.getTime() / 1000);
}

function toRadians(seconds){
    return conversionFactor * seconds;
}
