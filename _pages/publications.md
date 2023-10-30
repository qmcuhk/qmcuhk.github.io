---
layout: page
title: Publications
permalink: /publications
---



<div class="publication-container"> 
  <div class="publications">
    {% assign publications = site.data.publications | sort: "date" | reverse %}
    {% for publication in publications%}
    <div class="publication">
        <div class="publication-picture">
            <img src="assets/publications_pictures/{{publication.picture-path}}" alt="Welcome Image">
        </div>
        <div class="publication-info">
            <div class="title">{{publication.title}}</div>
            <div class="authors">
                {{publication.authors-short}}
            </div>
            <div class="journal">{{publication.journal}}</div>
        </div>
    </div>
    {% endfor %}
  </div>
</div>
