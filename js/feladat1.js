const buttons = document.querySelectorAll('.button');

const handleClick = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => { console.log(buttons[i].textContent); });
    }
}

handleClick();