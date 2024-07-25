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
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        console.log(`Target position: ${targetPosition}`);
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
