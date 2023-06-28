
const price1 = Number(document.querySelector('#price1').innerHTML);
const price2 = Number(document.querySelector('#price2').innerHTML);
const price3 = Number(document.querySelector('#price3').innerHTML);
const price4 = Number(document.querySelector('#price4').innerHTML);

const sum = document.querySelector('.sum');

let sumPrice = price1 + price2 + price3 + price4;
sum.textContent = '€' + sumPrice;

function discount() {
    sum.textContent = '€' + sumPrice * 0.8;
}

document.querySelector('.sale').addEventListener('click', discount);

//удаление товаров(тестирование)

function remove1() {
    document.querySelector('.item1').classList.add('none');
    sumPrice -= price1;
    sum.textContent = '€' + sumPrice;
}

document.querySelector('#img1').addEventListener('click', remove1);

function remove2() {
    document.querySelector('.item2').classList.add('none');
    sumPrice -= price2;
    sum.textContent = '€' + sumPrice;
}

document.querySelector('#img2').addEventListener('click', remove2);

function remove3() {
    document.querySelector('.item3').classList.add('none');
    sumPrice -= price3;
    sum.textContent = '€' + sumPrice;
}

document.querySelector('#img3').addEventListener('click', remove3);

function remove4() {
    document.querySelector('.item4').classList.add('none');
    sumPrice -= price4;
    sum.textContent = '€' + sumPrice;
}

document.querySelector('#img4').addEventListener('click', remove4);