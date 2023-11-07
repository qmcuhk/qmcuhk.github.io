---
layout: page
title: News
permalink: /news
banner-path: banner-campus.jpg
---

<div class="medium-divider"></div>



<div class="news-container">
    {% assign news = site.notes | where: "tag", "news" |sort: "date" | reverse %}
    {% for new in news %}
    <div class="news-item">
        <div class="news-img-container">
        <a href="{{new.url}}">
        <img src="../assets/{{new.picture-path}}" alt="Cross Country Champions">
        </a>
        </div>
        <div class="news-content">
            <h2>{{new.title}}</h2>
            <p>{{new.excerpt}}</p>
        </div>
    </div>
    {% endfor %}
</div>




<div Class="research-introduction">
<h3>
The Quantum Matter Lab currently has opening for undergraduates, graduate students, and postdocs.
</h3>
<hr>
<p>
Preferred Background, Knowledge, Skills, and Abilites:

<p>
<h4>
Postdocs:
</h4>
</p>
<ul>
<li>PhD in physics or related disciplines</li>
<li>Experience in spectroscopy/scattering/diffraction experiments</li>
<li>Expertise on crystal growth.</li>
</ul>
</p>

<h4>
Graduate students:
</h4>
<p>
<ul>
<li>BSc in physics, material science, chemistry or related fields</li>
<li>Excellent written and oral English communication skills</li>
<li>A good understanding of condensed matter physics</li>
<li>Demonstrated skills in data analysis, programing, and instrument development</li>
</ul>
</p>
<p>
<b>Undergraduates</b> in physics with a strong motivation are welcome to contact us for potential FYP or lab internship.
</p>
</div>


<!---->



