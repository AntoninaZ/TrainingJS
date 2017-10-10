var TextCounter = {
	counter: 0,
	maxChar: 140,
	textArea: null,
	textAreaTotal: null,
	textAreaLeft: null,

	init: function() {
		this.textArea = document.querySelector('#js-message');
		this.textAreaTotal = document.querySelector('#js-message-left-total');
		this.textAreaLeft = document.querySelector('#js-message-left-symbols');

		this.textArea.maxLength = TextCounter.maxChar;

		this.events();
	},
	events: function() {
		this.textArea.addEventListener('keyup', this.count);
	},
	countTotal: function() {
		TextCounter.textAreaTotal.innerHTML = TextCounter.counter;
	},
	countLeft: function() {
		TextCounter.textAreaLeft.innerHTML = TextCounter.maxChar - TextCounter.counter;
	},
	count: function(evt) {
		TextCounter.counter = this.value.length;

		TextCounter.countTotal();
		TextCounter.countLeft();
	}
};

TextCounter.init();