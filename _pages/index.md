---
layout: homepage
title: Home
id: home
permalink: /
layout: homepage
---
<div class="home-wrapper">
<div class="hompage-introduction">
<p>
We are an experimental research group on condensed matter physics led by Prof. Qisi Wang. Our main research interests are electronic, magnetic, and structural properties of quantum matter including high-temperature superconductors, quantum magnets, and correlated electron systems. We use multiple X-ray and neutron scattering/spectroscopy techniques to study elementary excitations and phase transitions in these quantum materials. 
</p>
<p style="color:white;font-size:0.1em;"> Qisi Wang Qisi Wang Qisi Wang Qisi Wang Qisi Wang Qisi Wang 王奇思 王奇思 王奇思 王奇思</p>
</div>
<div class="medium-divider"></div>
<div class="medium-divider"></div>

<!-- Sliding pictures section 
<div style="height: 15em; background-color:rgba(92, 92, 92, 1); padding: 0.5em 4em 0.5em 2em;"><hr style="width:100%;"><div style="color:white; font-size: 4.2em; font-family:'Garamond'; font-weight: 100;">RIXS: Rabbit Intellegent X-ray Scientists</div><p style="color:white">We are RIXS scientists. We are performing</p></div>
-->

<!-- Members section -->
<div class="medium-divider">
</div>
<div class="medium-divider">
<h1> Members </h1>
</div>
<hr>
<div class="medium-divider"></div>
<div class="hompage-members-container">
  {% assign members = site.members |sort: "ordering" | reverse %}
  {% for member in members%}
    <div class="member-card">
        <div class="member-image-container hover-effect">
            <a href="{{member.url}}">
                <img src="/assets/web_pictures/{{member.photo-path}}" alt="{{member.photo-path}}" style="width:100%">
                <div class="overlay">
                    <div class="overlay-text">
                    <h2> Learn More</h2>
                    {% if member.phd %}
                    <p>
                    {{member.phd}}
                    </p>
                    {% endif %}                    
                    {% if member.master %}
                    <p>
                    {{member.master}}
                    </p>
                    {% endif %}   
                    {% if member.bachelor %}
                    <p>
                    {{member.bachelor}}
                    </p>
                    {% endif %} 
                    </div>
                </div>
            </a> 
        </div>
        <h1>{{member.name}}</h1>
        <p class="member-card-title">{{member.title}}</p>
        <p>{{member.affiliation-1}}</p>
        {% if member.affiliation-2 %}
            <p>{{member.affiliation-2}}</p>
        {% endif%}
        <div class="member-card-logo">
        <a href="mailto:{{member.email}}"><i class="fa-solid fa-envelope"></i></a> 
        <a href="{{member.github}}"><i class="fa-brands fa-github"></i></a>  
        {% if member.name == "Prof. Qisi Wang" %}
            <a href="{{member.linkedin}}"><i class="fa-brands fa-linkedin"></i></a>
        {% else %}
            <a href="{{member.twitter}}"><i class="fa-brands fa-twitter"></i></a>  
        {% endif %}
        </div>
    </div>
  {% endfor %}
</div>
</div>



<div class="coffee-button">
    <a style="color:white;" href="contact" target="_blank">
    <span class="fa-solid fa-mug-saucer"></span>
    Stop by for a coffee
    </a>
</div>












