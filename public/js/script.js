const clipboard = require('clipboardy');

clipboard.writeSync('❤️');
clipboard.readSync();//=>'❤️'
clipboard.writeSync('❤️');
clipboard.readSync();//=>'❤️'

const backButtonQuery = window.matchMedia('(navigation-controls)');
const backButton = window.getElementById('back-button');
backButtonQuery.addEventListener('change', query => {    
    if (query.matches) {
        myFancyAnimateBackButtonIn(backButton);
    } else {
        myFancyAnimateBackButtonOut(backButton);
    }
});

const getUnicorns = count => '❤️'.repeat(count);

const button = document.createElement('button');
button.textContent = 'Copy 🦄';
button.style.fontSize = '40px';
document.body.appendChild(button);

let i = 1;
button.addEventListener('click', () => {
    window.copyTextToClipboard(getUnicorns(i));
    button.textContent = `Copy ${getUnicorns(++i)}`;
});