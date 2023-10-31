---
layout: page
title: Publications
permalink: /publications
---

<div class="medium-divider"></div>
<div class="medium-divider">
<h1> Publications </h1>
</div>
<hr>
<div class="medium-divider"></div>

<div class="publication-container"> 
  <div class="publications">
    {% assign publications = site.data.publications | sort: "date" | reverse %}
    {% for publication in publications%}
    <div class="publication">
        <div class="publication-picture">
        {% if publication.picture-path %}
            <img src="assets/publications_pictures/{{publication.picture-path}}" alt="Welcome Image">
        {% else %}
            <img src="assets/publications_pictures/gray_square.png" alt="Welcome Image">
        {% endif %}
        </div>
        <div class="publication-info">
            <div class="title">{{publication.title}}</div>
            <div class="authors">
                {{publication.authors}}
            </div>
            <div class="journal">{{publication.journal}}</div>
        </div>
    </div>
    {% endfor %}
    <button id="show-more">Show More</button>
  </div>
</div>



<script>
  // Get all the publications and the 'Show More' button
  const publications = document.querySelectorAll('.publication');
  const showMoreBtn = document.getElementById('show-more');
  let currentMax = 10;

  // Function to initially hide all publications except the first 10
  const initialHide = () => {
    publications.forEach((pub, index) => {
      if (index >= 10) {
        pub.style.display = 'none';
      }
    });
  };

  // Call the function to hide publications on initial load
  initialHide();

  // Function to show more publications
  const showMore = () => {
    let newMax = currentMax + 10;
    publications.forEach((pub, index) => {
      if (index < newMax && index >= currentMax) {
        pub.style.display = 'flex';
      }
    });
    currentMax = newMax;

    // Hide the 'Show More' button if all publications are visible
    if (currentMax >= publications.length) {
      showMoreBtn.style.display = 'none';
    }
  };

  // Event listener for the 'Show More' button
  showMoreBtn.addEventListener('click', showMore);
</script>
