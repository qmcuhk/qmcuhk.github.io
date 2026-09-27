---
layout: page
title: News
permalink: /news
banner-path: banner-news.jpg
---

<div class="medium-divider"></div>

<div class="news-list-container">
  {% assign news = site.notes | where: "tag", "news" | sort: "date" | reverse %}
  {% assign current_year = "" %}

  {% for new in news %}
    {% assign news_year = new.date | date: "%Y" %}
    {% if news_year != current_year %}
      <div class="news-year-heading" id="news-{{ news_year }}">
        <span>{{ news_year }}</span>
      </div>
      {% assign current_year = news_year %}
    {% endif %}

    <div class="news-list-item">
      <div class="news-list-picture">
        <a href="{{ new.url | relative_url }}" aria-label="Read {{ new.title }}">
          <img src="{{ '/assets/' | append: new.picture-path | relative_url }}" alt="{{ new.title }}">
        </a>
      </div>

      <div class="news-list-content">
        <a class="news-list-title" href="{{ new.url | relative_url }}">
          {{ new.title }}
        </a>
        <div class="news-list-date">{{ new.date | date: "%d %b %Y" }}</div>
        <div class="news-list-excerpt">{{ new.excerpt }}</div>
        <a class="news-list-button" href="{{ new.url | relative_url }}">Read more</a>
      </div>
    </div>
  {% endfor %}
</div>

