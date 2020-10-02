let clicker = document.querySelectorAll('.test')
for (i = 0; i < clicker.length; i++) {
    let test = clicker[i];
    test.onclick = toggleDisplay
}


function toggleDisplay(e) {
    console.log(e.target.parentElement.querySelector('.display'), this)
    e.target.querySelector('.display').toggle('.display')
}

