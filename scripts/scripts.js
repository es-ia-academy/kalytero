document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            console.log(`Target ID: ${targetId}`);

            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                console.log(`Target element not found: ${targetId}`);
                return;
            }
            console.log(`Target element found:`, targetElement);

            const navSection = document.querySelector('section[data-type="navigation"]');
            if (!navSection) {
                console.log('Navigation section not found');
            }
            const navHeight = navSection ? navSection.offsetHeight : 0;
            console.log(`Navigation height: ${navHeight}`);

            const targetRect = targetElement.getBoundingClientRect();
            console.log(`Target rect top: ${targetRect.top}`);
            
            const pageYOffset = window.pageYOffset;
            console.log(`Page Y Offset: ${pageYOffset}`);

            const targetPosition = targetRect.top + pageYOffset - navHeight;
            console.log(`Target position: ${targetPosition}`);

            
           
             setTimeout(() => {
                 targetElement.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                 });
                 window.scrollBy(0, -navHeight);  // Ajustar por la altura de navegación
             }, 0);
        });
    });
});
