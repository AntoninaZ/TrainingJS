
var Squares = {

	init: function() {
		this.container = document.getElementById('container');
		this.btnGenerateClick = document.getElementById('generateClick');
		this.btnShowResult = document.getElementById('showResult');
		this.btnReset = document.getElementById('reset');

		this.generateSquares();
		this.square = document.getElementsByClassName('square');
		console.log(this.square[6]);
		this.events();
	},
	generateSquares: function() {
		for (var i = 0; i < 100; i++) {
			var square = document.createElement('div');
			square.dataset.attr = 0;
			square.id = i;
			square.className = 'square';
			Squares.container.appendChild(square);
		}
	},
	events: function() {
		Squares.btnGenerateClick.addEventListener('click', Squares.generateClickSquare);
		Squares.btnShowResult.addEventListener('click', Squares.showResult);
		Squares.btnReset.addEventListener('click', Squares.reset);
		for (var i = 0; i < 100; i++) {
			Squares.square[i].addEventListener('click', Squares.userClickSquare);
		}
	},
	generateClickSquare: function() {
		for (var i = 0; i < 100; i++) {
			var r = Math.floor((Math.random() * 100));
			var currentCount = parseInt(document.getElementById(r).getAttribute('data-attr'));
			document.getElementById(r).setAttribute('data-attr', ++currentCount);
		}
	},
	showResult: function() {
		var currentElement;
		var currentElementAttr;
		for (var i = 0; i < 100; i++) {
			currentElement = document.getElementById(i);
			currentElementAttr = document.getElementById(i).getAttribute('data-attr')
			currentElement.innerHTML = currentElementAttr;
			Squares.setBackground(currentElement, currentElementAttr);
		}
	},
	setBackground: function(element, attr) {
		if (attr >= 25 && attr < 50) {
			element.classList.add('square-lower');
		} else if (attr >= 50 &&  attr < 75) {
			element.classList.remove('square-lower');
			element.classList.add('square-low');
		} else if (attr >= 75 &&  attr < 100) {
			element.classList.remove('square-low');
			element.classList.add('square-middle');
		} else if (attr >= 100) {
			element.classList.remove('square-middle');
			element.classList.add('square-high');
		} else {
			element.className = 'square';
		}
	},
	reset: function() {
		for (var i = 0; i < 100; i++) {
			document.getElementById(i).setAttribute('data-attr', 0); 
			document.getElementById(i).innerHTML = '';
			document.getElementById(i).className = 'square';
		}
	},
	userClickSquare: function(e) {
		var currentCount = parseInt(e.target.dataset.attr);
		e.target.dataset.attr = ++currentCount;
	}
};

Squares.init();