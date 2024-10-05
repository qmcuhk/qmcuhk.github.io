
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    // apply only to desktop screens
    if (window.innerWidth > 786) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-80px";  // Assumes navbar height is 60px. Adjust accordingly.
        } else {
            // Scrolling up
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    }

    const welcomeImage = document.getElementById('welcome-image');
    if (welcomeImage){
        // Calculate opacity based on scroll position.
        // You might need to adjust this based on your website's structure.
        const opacity = 1 - 0.4 * Math.min(1,window.pageYOffset / 500);  // 500 is an arbitrary value for fade effect length. Adjust as needed.
        
        // Set the calculated opacity
        welcomeImage.style.opacity = opacity;
    }

    // publication popup effect
    var pubPop = document.getElementById("publication-popup");
    if (pubPop!= null){
        if (document.documentElement.scrollTop > 300 || document.documentElement.scrollTop > 300){
          pubPop.style.top = "0";
          pubPop.style.opacity = "1";
        }
      }
});


