const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', e=>{
	navbar.classList.toggle('fixedNavbar', scrollY > 768);
})