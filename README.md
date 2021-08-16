- [ ] py and px in mobile view
- [ ] navigation as Link and correct icons + colors

- [ ] contribute page
- [ ] contact page
- [ ] author page
- [ ] domains page
- [ ] glossary page
- [ ] about page
<!-- - [ ] move content tab on term page to top on sm-view -->
- [ ] add mailchimp newsletter integration integration
- [ ] fix items in navbar when in screen=md
- [ ] after start scroll change size of navbar
- [ ] under the fold dynamic load content on main and slug page
- [ ] replace img through Image
- [ ] replace a through Link in navbar and footer

## Page structure

```text
DONE  / (landing page)

DONE  /terms
DONE  /terms/:slug (e.g. /terms/dimensionality-reduction)

/glossary
/glossary/:char (e.g. /glossary/a)

/glossary/:domain (e.g. /glossary/data-science)
/glossary/:domain/:char (e.g. /glossary/data-science/a)

DONE /authors
DONE /authors/:name (e.g. /author/michael_brenndoerfer)

/:domain (e.g. /data-science)
/:domain/articles (all articles)
/:domain/articles/:slug (e.g. /data-science/articles/how-to-use-xgboost-to-do-blabla)

/:domain/:topic

/contact
/contribute
/donate
/about

```
