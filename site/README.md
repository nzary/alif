# ALiF ecosystem website

Source for https://ecosystem.alif.nexus, published with GitHub Pages from the `main` branch. GitHub builds the site with Jekyll automatically.

## Structure

- `index.html`: the ALiF 2.0 Ecosystem Map (home page). Items with a detail page are links.
- `_layouts/item.html`: the shared template for every detail page.
- `assets/css/pages.css`, `assets/js/theme.js`: styles and the light/dark theme switch for detail pages.
- Detail pages (Markdown with a front matter header):
  - `standard/`: the Standard, v2.0 proposal, levels, conformance, Data Literacy First, Learning Conditions Statement
  - `standard/components/`: the five components and their sub-competencies
  - `companions/`: Implementation Pathway Model, Institutional Adoption Guide
  - `governance/`: Versioning and Review Policy
  - `instruments/`: ALiF self-assessment questionnaire
  - `consultation/`: ALiF 2.0 public consultation

## Editing a page

Open the page's `.md` file on GitHub, click the pencil icon, edit, and commit to `main`. The header fields at the top (`status_label`, `version`, `v2_note`, `related`) control the status box, the ALiF 2.0 note and the related links.

## Rules

- Addresses do not contain version numbers, so links keep working across versions.
- Self-assessment item wording is not published.
- Downloads stay hidden (`downloads_enabled: false` in `_config.yml`) until documents are released under a named open licence.
- ALiF is the brand: no institutional names on the site.
