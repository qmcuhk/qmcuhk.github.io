
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-60px";  // Assumes navbar height is 60px. Adjust accordingly.
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
        const image = document.getElementById('welcome-image');
    
    // Calculate opacity based on scroll position.
    // You might need to adjust this based on your website's structure.
    const opacity = 1 - 0.4 * Math.min(1,window.pageYOffset / 500);  // 500 is an arbitrary value for fade effect length. Adjust as needed.
    
    // Set the calculated opacity
    image.style.opacity = opacity;
});
