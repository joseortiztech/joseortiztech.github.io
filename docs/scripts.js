// Lógica para el menú de navegación en móviles
const navSlide = () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Mostrar/Ocultar el menú
        nav.classList.toggle('nav-active');

        // Animar el ícono de hamburguesa (opcional, para que se vea como una X)
        burger.classList.toggle('toggle');
    });

    // Cerrar el menú si se hace clic en un enlace (útil para móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')){
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
}

// Inicializar funciones
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
});