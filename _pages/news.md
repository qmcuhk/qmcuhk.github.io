---
layout: page
title: News
permalink: /news
banner-path: dalle_news_image.png
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
            <h3>{{new.title}}</h3>
            <p>{{new.excerpt}}</p>
        </div>
    </div>
    {% endfor %}
</div>






<!---->



