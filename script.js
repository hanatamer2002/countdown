const countdown = () => {
    const releaseDate = new Date('December 20, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = releaseDate - now;

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.querySelector('.days').textContent = String(days).padStart(2, '0');
    document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
    document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
    document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
};


countdown();

setInterval(countdown, 1000);


document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing with email: $ { email }');
    this.reset();

});