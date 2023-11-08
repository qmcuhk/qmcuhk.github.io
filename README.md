# Maintenance
### ✍️ How to update the website from your local folder?
everytime before making any update, it's strongly recommended to pull the up-to-date content online from github
```git
git pull
```
After doing this we are all set to do any change in our local folder. One we are done modifying the files, follow the following steps
```git
git add .
git commit -m "your comment of this modification"
git push
```
After this the website will be updated automcatilly. 

**P.S. Since we are now colaborating to maintain this website, we actually need to create a new branch for each one of us, and only work on our own branch before merging it into the main branch. In this way we won't easily mess up the main content. The instruction is to be written**

### 💻 How to render the website locally before git push? (for debugging)
The instruction on creating a Github pages site with Jekyll can be found in [Github docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll). Although we already have a website, this webpage is still a good reference about how to build a website from scratch.

1. **Software pre-requisite**: We must [install Ruby and Jekyll](https://jekyllrb.com/docs/installation/windows/), and also [install Bundler](https://bundler.io/).
2. **Bundler**: Open git bash in our website folder (we need to have bundler installed)
```git
bundle install
```
3. **Testing website locally**: open git bash again, run the following line in git bash. After this open web browser (chrome for example), navigate to `http://localhost:4000`. Detailed instruction can be found in [Github docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
```git
bundle exec jekyll serve
```
```git
$ bundle exec jekyll serve
> Configuration file: /Users/octocat/my-site/_config.yml
>            Source: /Users/octocat/my-site
>       Destination: /Users/octocat/my-site/_site
> Incremental build: disabled. Enable with --incremental
>      Generating...
>                    done in 0.309 seconds.
> Auto-regeneration: enabled for '/Users/octocat/my-site'
> Configuration file: /Users/octocat/my-site/_config.yml
>    Server address: http://127.0.0.1:4000/
>  Server running... press ctrl-c to stop.
```

> *There's a `fast_serve.sh` file in the folder... if you are too lazy to pull up a git bash and type in the not-so-short command, you can simply run this file...*
>  (●'◡'●)


### 📖 How to add more publication to the dataset?
- the publications dataset is in `_data/publications.yml`
- add new item in the dataset following the exemplary syntax
- the `picture-path` entry in the publication item is the name of the representive figure of the associated paper. The figure/picture should be stored in `assets/publications_pictures`. picture is not necessary but recommended.
- no need to arrange the order, the publications on the website are automatically arranged chronologically

### 🧙 How to add new members on our website?
- the members dataset is in `_data/members.yml`
- add new item in the dataset following the `.yml` syntax
- the `photo-path` entry is the name of the photo. The photos should be stored in `assets/web_pictures`. Please verify that the extension is correct (.jpg or .png).
- Ordering matters here




# miscellaneous
### 🗃️ Files structure
- **_data/**: dataset of the website 
    - **members.yml**: from here you can update the member information. The member will be updated on both *home page* and *member page*. The `photo-path` entry is the name of the photo that is stored in `assets/web_pictures/` 
    - **publcation.yml**: you can update the publication information on *publications page*. Ordering does not matter.
- **_includes/**: some basic elements/snippets on each page.
    - **banner.html**: the banner atop. Including the picture and the title of each page. By default, all sites from `_pages` folder, except for the `index.md`, should have the banner on the top.
    - **footer.html**
    - **head.html**: basic `<head>` tag
    - **nav.html**: navigation bar on the very top. By default, it's included in every site. 
    - **script.html**: javscript can go here, other than `/myscript.js`. Currently it's empty.
    - **welcome_picture.html**: the huge welcome banner on *homepage*. 
- **_layouts/**: Our website is catagorized into: homepage, page, note, and others. Each one of them has their own layout design. For example, whether they have banner, navigation, and how the content and footer are organized.
    - **default.html**: default layout if the layout is not claimed.
    - **homepage.html**: homepage layout only for *home page*
    - **note.html**: a layout design for future blogging page, for example, news or update of the group.
    - **page.html**: a layout for all files in the `_pages/` folder. It's applied to *contact, equipment, internal, members, news, publications, research, and teaching*.
- **_notes/**: It's designed (currently) for blogging page (news, new group member, research update, etc.) Add `tag: news` to the front matter if it's a news.
- **_pages/**: All the main pages are stored here. On the top of each file there stores the meta data of the file. `layout` is the layout it picks in `_layouts/` folder; `title` is the title it shows in the middle of the banner; `banner-path` is the name of the picture of the banner of this page. The picture is again stored in `assets/web_pictures`. `line` is extra sentences that will be displayed under the title.  
    - **contact.md**
    - **index.md**
    - **internal.md**
    - **members.md**
    - **news.md**
    - **openings.md**
    - **publications.md**
    - **research.md**
    - **teaching.md**
- **_sass/**: CSS/SCSS files are stored here.
    - **_basic_element.scss**: the design of the basic elements that are used in almost every pages, such as navigation bar and footers.
    - **_code.scss**: the design of code block.
    - **_normalize.scss**: it normalizes those most fundamental elements like `<p>` and `<h1>`.
    - **_style.scss**: the main playground. The design of all the other elements go here.
- **_site/**: don't touch this folder.
- **assets/**: all the pictures, figures, codes, pdf files, go here. 
- **myscript.js**: javascript file. 
- **style.scss**: directs Jekyll to the `_sass/` folder for more SCSS files.
- **fast_pull.sh**: for lazy ppl like me to `git pull`
- **fast_serve.sh**: for lazy ppl like me to `Jekyll serve`
- **config.yml**: config settings of Jekyll.

### Website design principle
- ![#ffc5b0](https://placehold.co/15x15/ffc5b0/ffc5b0.png) `#ffc5b0`
- ![#f6cdb4](https://placehold.co/15x15/f6cdb4/f6cdb4.png) `#f6cdb4`
- ![#e88b52](https://placehold.co/15x15/e88b52/e88b52.png) `#e88b52`
- ![#9f577d](https://placehold.co/15x15/9f577d/9f577d.png) `#9f577d`

- **Vintage travel style**

# To-do List

### 🍉 Content filling
- Teaching page
- News and group photo on home page
### 🌟 Fany web design
- interactive design for all pages. 
- add highlighted publications in publication page, with the effect as on https://www.crbgroup.com/
- We could change the design of the member card on the homepage to those on https://www.crbgroup.com/

### 🧀 Extra to-do list
4. （写在shared doc里面了）publications那页开头写一段“For citation statistics and additional information, please see:”， 然后下面加Google scholar， ResearchGate和arXiv的图标，link如下：
google scholar link: https://scholar.google.com/citations?user=f73__XkAAAAJ&hl=en&oi=ao
ResearchGate link: https://www.researchgate.net/profile/Qisi-Wang
arXiv link: https://arxiv.org/a/wang_q_9.html
5. 空一点后面再加一句“#: equal contribution; *: corresponding author”
