var Loader = (function() {
	'use strict';
	return {
		loadedAll: 0,
		init: function() {
			
			this.loader = document.getElementById('loader');
			this.preogressBar = document.getElementById('loaderProgressBar');
			this.loaderPercent = document.getElementById('loaderPercent');
			this.images = document.getElementsByTagName('img');
			
			this.events();
			this.loadImage();
		},

		events: function() {
		},

		loadImage: function() {
			for (var i = 0; i < Loader.images.length; i++) {
				if (Loader.images[i].complete) {
					Loader.loadedCallback();
				} else {
					Loader.images[i].addEventListener('load', Loader.loadedCallback);
					Loader.images[i].addEventListener('error', Loader.errorCallback);
				}
			}
		},

		increaseProgressBar: function() {
			Loader.loadedAll++;
			var progress = (Loader.loadedAll * 100) / Loader.images.length;
			Loader.preogressBar.style.width = progress + '%';
			Loader.loaderPercent.innerHTML = Math.round(progress) + '%';
		},

		loadedCallback: function() {
			Loader.increaseProgressBar();
			if (Loader.loadedAll === Loader.images.length) {
				Loader.loader.classList.add('loaded');
			}
		},

		errorCallback: function() {
			Loader.loadedCallback();
			this.classList.add('error');
		}
	};
})();

Loader.init();