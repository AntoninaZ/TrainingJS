var Form = {
	init: function() {
		this.addProductBtn = document.getElementById('addToCart');
		this.addProductBtn.addEventListener('click', Form.addProduct);
	},
	addProduct: function() {
		var product = {
			sku: document.getElementById('pSKU').value,
			title: document.getElementById('pTitle').value,
			price: document.getElementById('pPrice').value,
			description: document.getElementById('pDesc').value,
			available: document.getElementById('pAvailability').checked
		};
	alert("hg");
	}
}
Form.init();