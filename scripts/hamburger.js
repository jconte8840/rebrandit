let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');



navBarToggle.addEventListener('click', function () {

  mainNav.classList.toggle('active');

});
//document.getElementById("secondary-menu").style.display = "none";
//
//if (window.matchMedia("(max-width: 426px)").matches) {
//  document.getElementById("main-nav").style.display = "none";
//		document.getElementById("secondary-menu").style.display = "block";
//}

//function toggleBurger() {
//		if (document.getElementById("secondary-menu").style.display != "none") {
//			document.getElementById("secondary-menu").style.display = "none";
//		}
//}