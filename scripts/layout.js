const input = document.getElementById('finder');

input.addEventListener('click', newInput);
input.addEventListener('blur', endInput);

function newInput() {
    if (input.value === 'Поиск по сайту...') {
        input.value = '';
    }
}

function endInput() {
    if (input.value.trim() === '') {
        input.value = 'Поиск по сайту...';
    }
}

const logo = document.getElementById('logo');
const bottomLogo = document.getElementById('logo-footer');
const bottomLogo1 = document.getElementById('logo-footer1');

logo.addEventListener('click', goToHome);
bottomLogo.addEventListener('click', goToHome);
bottomLogo1.addEventListener('click', goToHome);

function goToHome(event) {
    const mainFile = event.view.location.pathname.split('/').at(-1);
    
    if (mainFile !== 'index.html') {
        location.replace('../index.html');
    }
}