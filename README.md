# Pointe4Art (`pointe4art.github.io`)

Official website for **Pointe4Art**, modeled after [yhcca.com](https://yhcca.com/) to showcase youth art & dance exhibitions, cultural exchange camps, community service donations, and 501(c)(3) nonprofit mission & contact details.

## Project Structure (All in Root Folder)

- `index.html` — Main single-page layout (Header, Mission statement, Exhibitions & Events showcase feed, Community Service callout, Nonprofit Footer, and full-screen Lightbox viewer).
- `styles.css` — Responsive styles, gallery cards, and mobile navigation.
- `site-data.js` — **Central content configuration**. Edit this file to update your mission, EIN, contact details, or add new exhibitions and photo galleries.
- `main.js` — Renders event sections, category filter tabs, and interactive photo lightbox.
- `logo.svg` & `*.svg` — Organization logo and event gallery images directly in the root folder.

## How to Customize Content & Photos

1. **Update Organization Info, EIN, and Contact Details**:
   Open `site-data.js` and edit the `organization` and `contact` objects at the top of the file.
2. **Add or Edit Exhibitions & Events**:
   - Place your `.jpg`, `.png`, `.svg`, or `.webp` event photos in the root directory.
   - In `site-data.js`, add a new item to the `events` array (or update the existing items) with `title`, `date`, `category` (`"exhibition"`, `"camp"`, or `"community"`), `description`, and `images`.

## How to Publish to `pointe4art.github.io`

Because this site uses plain HTML, CSS, and JavaScript with no build step required, GitHub Pages will serve it directly from your repository root:

```bash
git init
git add .
git commit -m "Initial Pointe4Art website"
git branch -M main
git remote add origin https://github.com/pointe4art/pointe4art.github.io.git
git push -u origin main
```

Once pushed, visit **Settings -> Pages** in your `pointe4art/pointe4art.github.io` repository and ensure the source is set to `Deploy from a branch` -> `main` / `/ (root)`. Your site will be live at `https://pointe4art.github.io/`.
