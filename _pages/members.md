---
layout: page
title: Members
permalink: /members
banner-path: dalle_members_image.png
---

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
        <div class="member-image-container">
          <img src="assets/web_pictures/{{member.photo-path}}" alt="{{member.photo-path}}" style="width:100%">
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
