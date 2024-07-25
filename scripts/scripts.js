document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        const navSection = document.querySelector('section[data-type="navigation"]');
        const navHeight = navSection ? navSection.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
