---
layout: page
title: Publications
permalink: /publications
banner-path: dalle_publications_image.png
line: RIXS, XAS, XRD, Neutron Scattering, and more...
---

<div class="medium-divider">
For citation statistics and additional information, please see:&nbsp;&nbsp;
<a class = "publication-button" href="https://scholar.google.com/citations?user=f73__XkAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer"> 
Google Scholar
</a>&nbsp;&nbsp;
<a class = "publication-button" href="https://www.researchgate.net/profile/Qisi-Wang" target="_blank" rel="noopener noreferrer"> 
ResearchGate
</a>&nbsp;&nbsp;
<a class = "publication-button" href="https://arxiv.org/a/wang_q_9.html" target="_blank" rel="noopener noreferrer"> 
arXiv
</a><br>
# equal contribution; * corresponding author
</div>


<div class="medium-divider">
<h1> Preprints </h1>
</div>
<hr>
<div class="publication-container"> 
  <div class="publications">
    {% assign publications = site.data.publications | sort: "date" | reverse %}
    {% assign preprints = publications | where: "preprint", "true" %}
    {% assign counter = preprints | size %}
    {% for preprint in preprints%}
    <div class="publication-preprint">
        <div class="publication-picture">
        {% if preprint.picture-path %}
            <img src="../assets/publications_pictures/{{preprint.picture-path}}" alt="Welcome Image">
        {% else %}
            <div style="width: 176px; height: 127px; background-color:#eaeaea;"> </div>
        {% endif %}
        </div>
        <div class="publication-info">
            <div class="title">
              {{counter}}. {{preprint.title}}
            </div>
            <div class="authors">
                {{preprint.authors}}
            </div>
            <div class="journal">{{preprint.journal}}
              {% if publication.pdf-path %}
                <a class = "publication-button" href="../assets/{{preprint.pdf-path}}" target="_blank" rel="noopener noreferrer"> 
                PDF
                </a>
              {% endif %}
              {% if preprint.arxiv %}
                <a class = "publication-button" href="{{preprint.arxiv}}" target="_blank" rel="noopener noreferrer"> 
                arXiv
                </a>
              {% endif %}
            </div>
        </div>
    </div>
    {% assign counter = counter | minus: 1%}
    {% endfor %}
  </div>
</div>




<div class="large-divider"></div>
<div class="medium-divider">
<h1> Publications </h1>
</div>
<hr>

<div class="publication-container"> 
  <div class="publications">
    {% assign publications = site.data.publications | sort: "date" | reverse %}
    <!-- set counter -->
    {% assign counter = 0 %}
    {% for publication in publications %}
      {% unless publication.preprint == "true" %}
        {% assign counter = counter | plus: 1 %}
      {% endunless %}
    {% endfor %}
    <!--set counter -->
    {% for publication in publications %}
    {% unless publication.preprint  %}
    <div class="publication">
        <div class="publication-picture">
          {% if publication.picture-path %}
              <img src="../assets/publications_pictures/{{publication.picture-path}}" alt="Welcome Image">
          {% else %}
              <div style="width: 176px; height: 127px; background-color:#eaeaea;"> </div>
          {% endif %}
        </div>
        <div class="publication-info">
            <div class="title">
              {{counter}}. {{publication.title}}
            </div>
            <div class="authors">
                {{publication.authors}}
            </div>
            <div class="journal">{{publication.journal}}
              {% if publication.pdf-path %}
                <a class = "publication-button" href="../assets/{{publication.pdf-path}}" target="_blank" rel="noopener noreferrer"> 
                PDF
                </a>
              {% endif %}
              {% if publication.arxiv %}
                <a class = "publication-button" href="{{publication.arxiv}}" target="_blank" rel="noopener noreferrer"> 
                arXiv
                </a>
              {% endif %}
              {% if publication.doi %}
                <a class = "publication-button" href="{{publication.doi}}" target="_blank" rel="noopener noreferrer"> 
                DOI
                </a>
              {% endif %}
            </div>
        </div>
    </div>
    {% assign counter = counter | minus: 1%}
    {%endunless%}
    {% endfor %}
    <button id="show-more">Show More</button>
  </div>
</div>



<script>
  // Get all the publications and the 'Show More' button
  const publications = document.querySelectorAll('.publication');
  const showMoreBtn = document.getElementById('show-more');
  let currentMax = 20;
  let moreLoad = 20;

  // Function to initially hide all publications except the first 10
  const initialHide = () => {
    publications.forEach((pub, index) => {
      if (index >= currentMax) {
        pub.style.display = 'none';
      }
    });
  };

  // Call the function to hide publications on initial load
  initialHide();

  // Function to show more publications
  const showMore = () => {
    let newMax = currentMax + moreLoad;
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
