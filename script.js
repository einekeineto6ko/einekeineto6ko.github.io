function showMessage(text) {
    document.getElementById('mainMessage').innerHTML = text;
    document.getElementById('mainMessage').style.display = '';
}

function hideMessage() {
    document.getElementById('mainMessage').style.display = 'none';
}

function onSpacePress(e) {
    if(e.key === ' ') {
        document.removeEventListener('keypress', onSpacePress);
        start();
    }
}

function init() {
    showMessage('LEFT/RIGHT to move<br />SPACE to fire<br /><br />PRESS SPACE TO START');
    document.addEventListener('keypress', onSpacePress);
}

function start() {
    hideMessage();

    game.start();
}
