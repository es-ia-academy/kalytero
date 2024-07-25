// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtén el id del destino del ancla
        const targetId = this.getAttribute('href');

        // Asegúrate de que el destino existe
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        // Obtén la altura de la sección con data-type="navigation"
        const navSection = document.querySelector('section[data-type="navigation"]');
        const navHeight = navSection ? navSection.offsetHeight : 0;

        // Calcula la posición de destino
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
