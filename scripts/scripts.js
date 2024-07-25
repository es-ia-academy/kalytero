// Smooth scrolling para los enlaces del men�
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obt�n el id del destino del ancla
        const targetId = this.getAttribute('href');

        // Aseg�rate de que el destino existe
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        // Obt�n la altura de la secci�n con data-type="navigation"
        const navSection = document.querySelector('section[data-type="navigation"]');
        const navHeight = navSection ? navSection.offsetHeight : 0;

        // Calcula la posici�n de destino
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
