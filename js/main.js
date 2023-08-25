document.addEventListener('scroll', function() {
    const home = document.getElementById('home');
    const scrolled = window.scrollY;

    if (scrolled > 50) {
        home.style.transform = 'scale(0.7)';
    } else {
        home.style.transform = 'scale(1)';
    }
});


function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let timeString = hours + ':' + minutes + ' ' + ampm;
    document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000);  // Aktualisiert die Uhr jede Sekunde
