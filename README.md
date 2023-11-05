# Maintenance
### How to update the website from your local folder?
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

### How to render the website locally before git push? (for debugging)
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

> *But please don't click the `fast_push.sh`. It removes all the files and delet them permanently, like totally (for real).*
> 
> (●'◡'●)


### How to add more publication to the dataset?
- the publications dataset is in `_data/publications.yml`
- add new item in the dataset following the exemplary syntax
- the `picture-path` entry in the publication item is the name of the representive figure of the associated paper. The figure/picture should be stored in `assets/publications_pictures`. picture is not necessary but recommended.
- no need to arrange the order, the publications on the website are automatically arranged chronologically

### How to add new members on our website?
- the members dataset is in `_data/members.yml`
- add new item in the dataset following the `.yml` syntax
- the `photo-path` entry is the name of the photo. The photos should be stored in `assets/web_pictures`. Please verify that the extension is correct (.jpg or .png).
- Ordering matters here


# miscellaneous



# To-do List

### Content filling
- Equipments introduction in Research page, as in https://kondo1215.issp.u-tokyo.ac.jp/research.php

### Fany web design
- add highlighted publications in publication page, with the effect as on https://www.crbgroup.com/
- member-card should be of the same size. We could change the design of the member card on the homepage to those on https://www.crbgroup.com/