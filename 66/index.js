let date = new Date("Jun 27, 2023 17:59:59").getTime()

let a = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = date - now

    const days = Math.floor( timeLeft / (1000 * 60 * 60 *24))
    const hours = Math.floor( (timeLeft / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor( (timeLeft / 1000 / 60) % 60)
    const seconds = Math.floor((timeLeft / 1000) % 60)

    document.getElementById('time').innerHTML = (days + "d " + hours + "h " + minutes + "m " + seconds + 's ')

    if (timeLeft < 0) {
        clearInterval(x);
        document.write('CountDown Finished')
}
},1000);
