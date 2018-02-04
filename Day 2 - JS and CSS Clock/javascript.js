window.addEventListener('load', event => {
    function setDate() {
        const now = new Date();

        const sec = now.getSeconds();
        const hour = now.getHours();
        const minute = now.getMinutes();

        const secondsDegrees = (sec / 60) * 360;
        const minuteDeg = (minute / 60) * 360;
        const hourDeg = (hour / 12) * 360;

        secEl.style.transform = `rotate(${secondsDegrees + 90}deg)`;
        minEl.style.transform = `rotate(${minuteDeg + 90}deg)`;
        hourEl.style.transform = `rotate(${hourDeg + 90}deg)`;
    }

    var secEl = document.querySelector('.hand-second');
    var minEl = document.querySelector('.hand-minute');
    var hourEl = document.querySelector('.hand-hour');

    setInterval(setDate, 1000);
});