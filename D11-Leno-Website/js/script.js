document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    console.log('toggleButton ==========>',toggleButton);
    
    
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    console.log('mobileMenu===>',mobileMenu);
    
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })
})

