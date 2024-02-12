function printTime() {
    var d = new Date();
    var hours = formatTimeUnit(d.getHours());
    var mins = formatTimeUnit(d.getMinutes());
    var secs = formatTimeUnit(d.getSeconds());
    document.getElementById('cont').innerText = `${hours}:${mins}:${secs}`;

    document.getElementById('cont').style.fontSize = '150px';
    document.getElementById('cont').style.textAlign = "center";
}

function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

setInterval(printTime, 1000);
