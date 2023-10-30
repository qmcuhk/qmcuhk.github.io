---
layout: homepage
title: Home
id: home
permalink: /
---

<div class="hompage-introduction">
<p>
We are an experimental research group on condensed matter physics led by Prof. Qisi Wang. Our main research interests are electronic, magnetic, and structural properties of quantum matter including high-temperature superconductors, quantum magnets, and correlated electronic systems. We use various X-ray and neutron scattering/spectroscopy techniques to study elementary excitations and phase transitions in these quantum materials. 
</p>
</div>

<div class="medium-divider"></div>
<div class="medium-divider">
<h1> Members </h1>
</div>
<hr>
<div class="medium-divider"></div>
<div class="hompage-members-container">
  <div class="member-card">
     <img src="assets/web_pictures/qisi.jpg" alt="John" style="width:100%">
    <h1>Qisi Wang</h1>
    <p class="member-card-title">Professor</p>
    <p>The Chinese University of HK</p>
    <div class="member-card-logo">
      <a href="#"><i class="fa-solid fa-envelope"></i></a> 
      <a href="#"><i class="fa-brands fa-twitter"></i></a>  
      <a href="#"><i class="fa-brands fa-github"></i></a>  
    </div>
  </div>
  <div class="member-card">
     <img src="assets/web_pictures/yujie.jpg" alt="John" style="width:100%">
    <h1>Yujie Yan</h1>
    <p class="member-card-title">PhD. Student</p>
    <p>The Chinese University of HK</p>
    <div class="member-card-logo">
      <a href="#"><i class="fa-solid fa-envelope"></i></a> 
      <a href="#"><i class="fa-brands fa-twitter"></i></a>  
      <a href="#"><i class="fa-brands fa-github"></i></a>  
    </div>
  </div>
  <div class="member-card">
     <img src="assets/web_pictures/xunyang.jpg" alt="John" style="width:100%">
    <h1>Xunyang Hong</h1>
    <p class="member-card-title">Joint PhD. Student</p>
    <p>The Chinese University of HK</p>
    <p>University of Zurich</p>
    <div class="member-card-logo">
      <a href="#"><i class="fa-solid fa-envelope"></i></a> 
      <a href="#"><i class="fa-brands fa-twitter"></i></a>  
      <a href="#"><i class="fa-brands fa-github"></i></a>  
    </div>
  </div>

</div>











<script>
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
    const opacity = 1 - 0.2 * (window.pageYOffset / 500);  // 500 is an arbitrary value for fade effect length. Adjust as needed.
    
    // Set the calculated opacity
    image.style.opacity = opacity;
});

</script>