---
layout: homepage
title: Home
id: home
permalink: /
---

<p> 
hello world
</p>

<div class="hompage-introduction">
<p>
We are an experimental research group on condensed matter physics led by Prof. Qisi Wang. Our main research interests are electronic, magnetic, and structural properties of quantum matter including high-temperature superconductors, quantum magnets, and correlated electronic systems. We use various X-ray and neutron scattering/spectroscopy techniques to study elementary excitations and phase transitions in these quantum materials. 
</p>
</div>
<div class="large-divider"></div>
<div class="medium-divider"></div>
<div class="medium-divider">
<h1> Members </h1>
</div>
<hr>
<div class="medium-divider"></div>
<div class="hompage-members-container">
  {% assign members = site.data.members %}
  {% for member in members%}
    <div class="member-card">
        <img src="assets/web_pictures/{{member.photo-path}}" alt="{{member.photo-path}}" style="width:100%">
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











