---
layout: page
title: Members
permalink: /members
banner-path: banner-members.jpg
---

<div class="medium-divider"></div>
<div class="medium-divider">
<h1> Members </h1>
</div>
<hr>
<div class="medium-divider"></div>

<div class="hompage-members-container">
  {% assign members = site.members | where_exp: "item", "item.ordering > 0" | sort: "ordering" %}
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

<!-- Alumni Section -->
<div class="medium-divider"></div>

<hr>
<div class="medium-divider"></div>

## Alumni
<div class="alumni-list">
  {% assign alumni_members = site.members | where_exp: "item", "item.ordering < 0" | sort: "ordering" %}
  {% for member in alumni_members %}
    <p>
      <strong>{{ member.name }}</strong> - {{ member.title }}, {{ member['affiliation-1'] }}
      {% if member['affiliation-2'] %}
        , {{ member['affiliation-2'] }}
      {% endif %}
    </p>
  {% endfor %}
</div>


## Collaborators
- <a href="https://www.physik.uzh.ch/groups/chang/index.php" target="_blank">Prof. Johan Chang</a> (University of Zurich)
- <a href="http://www.physics.fudan.edu.cn/tps/people/jzhao/" target="_blank">Prof. Jun Zhao</a> (Fudan University)