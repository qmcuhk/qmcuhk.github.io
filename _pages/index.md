---
layout: homepage
title: Home
id: home
permalink: /
---

<div class="hompage-introduction">
<p>
We are an experimental research group on condensed matter physics led by Prof. Qisi Wang. Our main research interests are electronic, magnetic, and structural properties of quantum matter including high-temperature superconductors, quantum magnets, and correlated electron systems. We use multiple X-ray and neutron scattering/spectroscopy techniques to study elementary excitations and phase transitions in these quantum materials. 
</p>
<p style="color:white;font-size:0.1em;"> Qisi Wang Qisi Wang Qisi Wang Qisi Wang Qisi Wang Qisi Wang 王奇思 王奇思 王奇思 王奇思</p>
<p> 王奇思</p>
</div>
<div class="medium-divider"></div>
<div class="medium-divider"></div>

<!-- Sliding pictures section -->




<!-- Members section -->

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
        <a href="mailto:{{member.twitter}}"><i class="fa-brands fa-twitter"></i></a>  
        <a href="mailto:{{member.github}}"><i class="fa-brands fa-github"></i></a>  
        </div>
    </div>
  {% endfor %}
</div>













