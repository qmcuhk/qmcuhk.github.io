# Maintenance
#### Steps
everytime before making any update, it's strongly recommended to pull the up-to-date content online from github
```git
git pull
```
After doing this we are all set to do any change in our local folder.



#### Adding publications to dataset
- the publications dataset is in `_data/publications.yml`
- add new item in the dataset following the exemplary syntax
- the `picture-path` entry in the publication item is the name of the representive figure of the associated paper. The figure/picture should be stored in `assets/publications_pictures`. picture is not necessary but recommended.
- no need to arrange the order, the publications on the website are automatically arranged chronologically
#### Adding new members
- the members dataset is in `_data/members.yml`
- add new item in the dataset following the `.yml` syntax
- the `photo-path` entry is the name of the photo. The photos should be stored in `assets/web_pictures`. Please verify that the extension is correct (.jpg or .png).
- Ordering matters here

# To-do List

#### Content filling
- Equipments introduction in Research page, as in https://kondo1215.issp.u-tokyo.ac.jp/research.php

#### Fany web design
- add highlighted publications in publication page, with the effect as on https://www.crbgroup.com/
- member-card should be of the same size. We could change the design of the member card on the homepage to those on https://www.crbgroup.com/