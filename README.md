# Group Website (Jekyll / GitHub Pages)

Maintainer guide for updating the group website. This repo uses Jekyll and is deployed on GitHub Pages.

---

## Quick reference: what to edit

| Task | File(s) to edit | Where to put images |
|------|-----------------|----------------------|
| **Add member** | Create `_members/<name>.md` | `assets/web_pictures/` → use filename in `photo-path` |
| **Add publication/preprint** | `_data/publications.yml` (new entry at top) | `assets/publications_pictures/` → use filename in `picture-path` |
| **Edit openings** | `_pages/openings.md` | Banner only: `assets/web_pictures/banner-openings.jpg` |
| **Add news** | Create `_notes/news_YYYY_MM_DD_slug.md` | `assets/news_pictures/` → use path like `news_pictures/filename.jpg` in `picture-path` |
| **Edit teaching** | `_pages/teaching.md` | Optional; any extra images in `assets/web_pictures/` |

---

## 1. Add new members

1. **Create a new file** in `_members/`:
   - Filename: `_members/<firstname_or_nickname>.md` (e.g. `jane.md`)
   - The filename becomes the URL slug (e.g. `/members/jane/`).

2. **Use this front matter** (copy from an existing member like `qisi.md` or `alris.md`):

```yaml
---
name: Full Name
title: PhD Student
photo-path: jane.jpg
affiliation-1: The Chinese University of HK
affiliation-2:
bachelor:
master:
phd:
email: jane.doe@link.cuhk.edu.hk
twitter:
github:
linkedin:
start_date: 2024-09-01
end_date:
post-stay-position:
ordering: 10
layout: members
---
```

3. **Member photo:**
   - Put the image in **`assets/web_pictures/`** (e.g. `jane.jpg`).
   - Set `photo-path` to the **filename only** (e.g. `jane.jpg`).

4. Optionally add a short bio in the body (HTML or Markdown).

---

## 2. Add new publications and preprints

1. **Edit** `_data/publications.yml`.

2. **Add a new entry at the top** of the list (newest first). Use this structure:

**Preprint example:**

```yaml
- title: Paper Title Here
  date: 'YYYY-MM-DD'
  journal: arXiv:XXXX.XXXXX
  arxiv: https://arxiv.org/abs/XXXX.XXXXX
  preprint: true
  doi: https://doi.org/10.48550/arXiv.XXXX.XXXXX
  pdf-name: null
  authors: Author One*, Author Two, Qisi Wang*
  picture-path: 2025_something.jpg
  description: 1
```

**Published paper example:**

```yaml
- title: Paper Title Here
  date: 'YYYY-MM-DD'
  journal: <b>Physical Review B</b> 109, 123456 (2024)
  arxiv: https://arxiv.org/abs/XXXX.XXXXX
  preprint: null
  doi: https://doi.org/10.1103/...
  pdf-name: null
  authors: Author One*, Author Two, Qisi Wang*
  authors-short: Author One et al.
  picture-path: 2025_something.jpg
  description: 1
```

3. **Publication figure:**
   - Put the image in **`assets/publications_pictures/`**.
   - Set `picture-path` to the **filename only** (e.g. `2025_something.jpg`).

4. Use `preprint: true` for preprints and `preprint: null` (or omit) for published papers.

---

## 3. Edit openings

- **File:** `_pages/openings.md`
- Edit the HTML content (headings, bullet lists, paragraphs) to change postdoc / graduate / undergraduate requirements.
- Banner image is set by `banner-path: banner-openings.jpg` in the front matter; replace `assets/web_pictures/banner-openings.jpg` if you change the banner.

---

## 4. Add news

1. **Create a new file** in `_notes/`:
   - Filename: `news_YYYY_MM_DD_short_description.md` (e.g. `news_2025_08_01_collaboration.md`).

2. **Front matter:**

```yaml
---
title: Short headline for the news
picture-path: news_pictures/news_2025_08_01_collaboration.jpg
date: 2025-08-01
tag: news
layout: news
---
```

3. **Body:** Write the news story in Markdown (and HTML if needed) below the front matter.

4. **Image:**
   - Put the image in **`assets/news_pictures/`**.
   - In `picture-path` use the path **relative to `assets/`**, e.g. `news_pictures/news_2025_08_01_collaboration.jpg`.

News items with `tag: news` are listed on the News page and sorted by `date` (newest first).

---

## 5. Edit teaching page

- **File:** `_pages/teaching.md`
- **Front matter:** `layout`, `title`, `permalink`, `banner-path` (only change if you want a different banner).
- **Body:** Edit the Markdown/HTML to update:
  - Academic year headings
  - Course names and descriptions
  - Class times
  - “Useful Links” at the bottom

No separate image folder for teaching; add any extra images under `assets/web_pictures/` and link them in the content if needed.

---

## Folder structure (content-related)

```
_data/
  publications.yml          ← Publications & preprints

_includes/                  ← Reusable HTML (nav, footer, etc.)
_layouts/                   ← Page layouts (members, news, page, etc.)

_members/                    ← One .md per member
  qisi.md, alris.md, ...

_notes/                      ← One .md per news item
  news_2025_07_18_surip_prize.md, ...

_pages/                      ← Main site pages
  index.md, members.md, news.md, openings.md, publications.md, teaching.md, ...

assets/
  icons/                     ← Logos (Google Scholar, arXiv, etc.)
  news_pictures/             ← Images for news items
  publications_pictures/     ← Figures for publications
  web_pictures/              ← Member photos, banners (e.g. banner-openings.jpg)
```

---

## Deploying

After editing, commit and push to the branch used by GitHub Pages (usually `main`). GitHub Pages will rebuild the site automatically. Allow a few minutes for the update to appear.

---

*Last updated for maintainer use. Ignore `_plugins/`, `_site/`, `_config.yml`, `Gemfile`, and `*.sh` for routine content edits.*
