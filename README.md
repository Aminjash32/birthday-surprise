# Lavender Birthday Corner 🌻💜🐈

A mobile-friendly birthday mini-site using plain HTML, CSS and JavaScript.

## Preview locally
Open `index.html` in a browser. The site works without a build step. Google Fonts requires an internet connection; fallback fonts are included.

## Make it more personal
- Add photos by following the snippet below and put images in `assets/`.
- Add your own voice note at `assets/birthday-voice.mp3`.
- Edit the letter and memory captions in `index.html`.

To use photos in the scrapbook, append this to the bottom of `style.css` and add the three image files:
```css
.card-one .photo-placeholder { background: linear-gradient(#33204420,#33204420), url("assets/photo1.jpg") center/cover; }
.card-two .photo-placeholder { background: linear-gradient(#33204420,#33204420), url("assets/photo2.jpg") center/cover; }
.card-three .photo-placeholder { background: linear-gradient(#33204420,#33204420), url("assets/photo3.jpg") center/cover; }
.photo-placeholder .placeholder-art,
.photo-placeholder small { display:none; }
```

## Publish free
1. Create a public GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and your `assets` files.
3. Open Settings → Pages.
4. Choose deploy from `main` branch and root (`/`).
5. Use the URL GitHub Pages provides.

Privacy note: GitHub Pages free hosting generally uses a public repository. Do not upload private or sensitive photos/audio unless you're comfortable with them being publicly accessible.
