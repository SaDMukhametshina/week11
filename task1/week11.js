//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.querySelector('#practicum0');

function makeZero() {
	paragraph.textContent = 'Ты нашёл элемент и изменил его текст!';
}

document.querySelector('.b-0').onclick = makeZero;

//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraphTwo = document.getElementById('practicum');

function makeOne() {
	paragraphTwo.innerText = 'Привет!';
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

function makeTwo() {
	document.getElementById('practicum2').textContent = 'Привет, Мир!';
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraphThree = document.querySelector('#practicum3')

function makeThree() {
	paragraphThree.innerHTML = 'Заголовок изменен!';
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента

function makeFour() {
	document.querySelector('#practicum4').style.backgroundColor = 'red';
}

document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

function makeFive() {
	document.getElementById('practicum5').value = 'Новое значение';
}

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

function makeSix() {
	let img = document.getElementById('practicum6');
	img.src = 'newimage.jpg';
	img.alt = 'Новое изображение';
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

function makeSeven() {
	let link = document.querySelector('#practicum7');
	link.href = 'https://www.google.com';
	link.textContent = 'Ссылка на Google';
}

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeEight() {
	const point = document.getElementById('practicum8');
	const element = document.createElement('li');
	element.textContent = 'Новый элемент';
	point.append(element);
}

document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
	const select9 = document.getElementById('practicum9');
	const option9 = document.createElement('option');
	option9.textContent = 'Новый вариант';
	select9.append(option9);
}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента

function makeTen() {
	const square = document.getElementById('practicum10');
	square.style.display = 'none';
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

function makeEleven() {
	const square2 = document.getElementById('practicum11');
	square2.style.height = '200px';
	square2.style.width = '400px';

}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

function makeTwelve() {
	const square3 = document.querySelector('#practicum12');
	square3.classList.toggle('large');
}

//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

function makeThirteen() {
	let olFirst = document.getElementsByTagName("ol")[0];
	olFirst.innerText = 'Первый!';
}

document.querySelector('.b-13').onclick = makeThirteen;

//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
	const paragraphs = document.querySelectorAll('p');
	paragraphs.forEach(function (paragraph) {
		paragraph.innerText = 'Огого, что могу!';
	});
}

document.querySelector('.b-14').onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

function makeFifteen() {
	document.getElementById('practicum15').classList.remove('practicum15');
}

document.querySelector('.b-15').onclick = makeFifteen;

//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

function makeSixteen() {
	document.getElementById('practicum16').classList.add('practicum16');
}

document.querySelector('.b-16').onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

function makeSeventeen() {
	document.getElementById('practicum17').classList.toggle('color');
}

document.querySelector('.b-17').onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента

function makeEighteen() {
	document.getElementById('practicum18').classList.toggle('active');
}

document.querySelector('.b-18').onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

function makeNineteen() {
	document.getElementById('practicum19').classList.remove('active');
}

document.querySelector('.b-19').onclick = makeNineteen;

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

function makeTwenty() {
	const practicum20 = document.getElementById('practicum20');
	const newParagraph = document.createElement('p');
	newParagraph.textContent = 'Добавлено в начало';
	practicum20.prepend(newParagraph);
}

document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

function makeTwentyOne() {
	const practicum21 = document.getElementById('practicum21');
	const newParagraph21 = document.createElement('p');
	newParagraph21.textContent = 'Добавлено в конец';
	practicum21.append(newParagraph21);
}

document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

function makeTwentyTwo() {
	const img22 = document.getElementById('practicum22');
	const check22 = img22.hasAttribute('src');
	const result22 = document.getElementById('result22');
	result22.textContent = 'Атрибут "src" присутствует: ' + check22;
}

document.querySelector('.b-22').onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
	document.getElementById('practicum23').removeAttribute('href');
}

document.querySelector('.b-23').onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
	document.getElementById('practicum24').setAttribute('value', 'Новое значение');
}

document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
	const div25 = document.getElementById('practicum25');
	div25.setAttribute('data-info', 'Дополнительная информация');
	const newAttribute = 'data-info';
	document.getElementById('infoOutput').textContent = 'Добавленный атрибут: ' + newAttribute;
}

document.querySelector('.b-25').onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const button = document.querySelector('.b-26');
const parent = button.closest('.parent');

const makeTwentySix = () => {
	parent.style.backgroundColor = 'red';
};

document.querySelector('.b-26').onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
	const div27 = document.getElementById('practicum27').classList.contains('highlight');
	document.getElementById('result').textContent = div27;
}

document.querySelector('.b-27').onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

const buttonTaskTwentyEight = document.getElementById('button28');

function handleClick() {
	console.log('Кнопка нажата');
}

buttonTaskTwentyEight.addEventListener('click', handleClick);

//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

const input29 = document.getElementById('input29');

function handleChange() {
	console.log('Значение изменено');
}

input29.addEventListener('change', handleChange);

//Ваш код

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

const div30 = document.getElementById('div30');

function handleMouseOver() {
	console.log('Курсор наведен на элемент');
}

div30.addEventListener('mouseover', handleMouseOver);
