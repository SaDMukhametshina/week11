
const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.querySelector('.list');

function createTask() {
    const newText = document.createElement('li');
    newText.textContent = input.value;
    list.append(newText);
    input.value = '';
}

/*function checkTask() {
    if (evt.target.tagName === 'li') {
        evt.target.classList.toggle('active');
    }
}*/
list.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('active');
    }
});

button.addEventListener('click', createTask);
//list.addEventListener('click', checkTask);