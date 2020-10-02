let clicker = document.querySelectorAll('.test')


function toggleDisplay(e) {
    e.target.querySelector('.test').toggle('display')
}

clicker.onclick = toggleDisplay
