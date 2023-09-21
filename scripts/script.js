const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
	e.preventDefault();
	this.submit();

    window.location.href = "http://127.0.0.1:5500/index.html#contact";
});