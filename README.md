[![Netlify Status](https://api.netlify.com/api/v1/badges/ff02baee-522e-456e-a7fc-242739914b60/deploy-status)](https://app.netlify.com/sites/determined-fermat-3be022/deploys)

[![Terminology.me logo](https://terminology.me/logo.png)](https://terminology.me)

# Terminology.me

Compact and easy to understand explanations for the modern, cross-functional engineer

## Work in progress

- [ ] replace current mailchimp code through in-place form and react component
- [x] Improve initial terms speed up
  - [ ] defer css load
  - [ ] defer disquss load
  - [x] remove unused content
- [x] create hero most recent 4 adds programtically
- [x] terms page content table
- [x] terms page authors
- [ ] related terms with example under the post itself
- [x] add H2 Definition of XXX above every intro pargraph
- [ ] glossary page overall
- [ ] glossary page a-z for each domain
- [ ] domains page add buttons
- [ ] domains page topics 3x3 matrix or topics gallery

## Page structure

#### Home

- [ ] / (landing page)

#### Terms

- [x] /terms
- [ ] /terms/:slug (e.g. /terms/dimensionality-reduction)

#### Glossary

- [ ] /glossary
- [ ] /glossary/:char (e.g. /glossary/a)

#### Authors

- [ ] /authors
- [ ] /authors/:name (e.g. /author/michael_brenndoerfer)

#### Domains

- [ ] /:domain (e.g. /data-science)

#### Articles

- [ ] /:domain/articles (/data-science/articles)
- [ ] /:domain/articles/:articleSlug (/data-science/articles/my-article)

#### Topics

- [ ] /:domain/topics (/data-science/topics)
- [ ] /:domain/topics/:topicSlug (/data-science/topics/my-topic)

#### Top-level pages

- [x] /contact
- [x] /contribute
- [ ] /donate
- [x] /about
- [x] /privacy
- [x] /newsletter-confirmation
