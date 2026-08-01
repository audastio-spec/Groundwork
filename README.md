# Groundwork Rentals LLC Marketing Website

A static HTML/CSS/JS marketing website for a family-owned car rental business in Winter Haven, Florida, serving two audiences: long-term weekly rentals for gig economy drivers and short-term daily/weekly rentals for tourists, visitors, and anyone in town temporarily.

## Project Structure

```
rental-website/
  index.html          Splash page with two audience paths
  drivers.html        Gig driver car rental landing page
  stays.html          Short-term car rental landing page (tourists/visitors)
  about.html          Shared about page
  contact.html        Shared contact page
  privacy.html        Privacy policy (template — needs attorney review)
  terms.html          Terms of service (template — needs attorney review)
  styles.css          All styles (edit CSS custom properties to re-theme)
  script.js           Navigation, forms, FAQ, lightbox, lazy loading
  sitemap.xml         XML sitemap for search engines
  robots.txt          Crawler directives
  images/             Image assets (see IMAGES.md for required files)
  PLACEHOLDERS.md     List of all TK- placeholders to replace
  IMAGES.md           Image manifest with filenames and dimensions
```

## Deployment

### Netlify (recommended for simplicity)

1. Push this folder to a GitHub, GitLab, or Bitbucket repository, or drag-and-drop the folder into [Netlify Drop](https://app.netlify.com/drop).
2. Netlify will detect it as a static site automatically. No build command or publish directory configuration is needed.
3. If using Netlify Forms, uncomment the Netlify form markup in `drivers.html` and `stays.html` (search for "Netlify Forms alternative") and remove or comment out the Formspree `<form action>` line.

### Vercel

1. Push to a Git repository and import it at [vercel.com/new](https://vercel.com/new).
2. Framework preset: "Other". No build command needed. Output directory: `.` (root).

### Cloudflare Pages

1. Push to a Git repository and connect it at [dash.cloudflare.com](https://dash.cloudflare.com) under Pages.
2. Build command: leave blank. Build output directory: `/` (root).

### Shared hosting (cPanel, etc.)

1. Upload all files via FTP or the file manager to your `public_html` directory (or a subdirectory).
2. No build step or server configuration is required.

## Setting Up Formspree

1. Create a free account at [formspree.io](https://formspree.io).
2. Create two forms:
   - One for driver inquiries (name it "Driver Inquiry" or similar).
   - One for short-term rental inquiries (name it "Short-Term Inquiry" or similar).
3. Copy each form's endpoint ID (the part after `https://formspree.io/f/`).
4. In `drivers.html`, replace `TK-FORMSPREE-DRIVER-ID` in the form `action` attribute.
5. In `stays.html`, replace `TK-FORMSPREE-STAYS-ID` in the form `action` attribute.

## Changing the WhatsApp Number

1. Search all HTML files for `TK-WHATSAPP-NUMBER`.
2. Replace every instance with your WhatsApp number in international format without the `+` sign. Example: for +1 (863) 555-1234, use `18635551234`.
3. The pre-filled messages are already URL-encoded. If you want to change a message, URL-encode your new text (you can use [urlencoder.io](https://www.urlencoder.io/)).

## Adding or Removing a Vehicle Card

Vehicle cards are in `drivers.html` inside the `<div class="vehicle-grid">` section.

### To add a vehicle:
1. Copy one of the existing `<div class="vehicle-card">` blocks.
2. Paste it before the closing `</div>` of `vehicle-grid`.
3. Update the vehicle name, year, weekly rate, mileage policy, and WhatsApp link.
4. Add a corresponding image to the `images/` folder.

### To remove a vehicle:
1. Delete the entire `<div class="vehicle-card">` block for that vehicle.

### To mark a vehicle as rented (waitlist):
1. Add the class `vehicle-card--waitlist` to the card's outer div.
2. Change the badge to `<span class="vehicle-card__badge">Currently Rented</span>` (remove the `--available` modifier class).
3. Change the WhatsApp button text to "Join the waitlist" and update the pre-filled message.
4. Change the button class from `btn--whatsapp` to `btn--outline-driver`.

## Swapping Images

1. See `IMAGES.md` for the complete list of required images, their filenames, and dimensions.
2. Save your new image to the `images/` folder with the filename specified in the manifest.
3. For best performance, provide both WebP and JPEG versions of each image.
4. Update the `alt` text in the HTML if the image content changes.
5. Each image placeholder in the HTML includes a commented-out `<picture>` element showing exactly how to wire up the image.

## Editing the Color Palette

All colors are defined as CSS custom properties at the top of `styles.css`. Edit these eight key variables to re-theme the site:

```css
--color-base:        #1B2A4A;   /* Deep navy — headers, footer, trust */
--color-base-light:  #2C3E6B;   /* Lighter navy for hover states */
--color-driver:      #2B7A78;   /* Cool teal for driver section */
--color-driver-dark: #1F5F5D;   /* Driver hover/active */
--color-stays:       #C4703F;   /* Warm terracotta for stays section */
--color-stays-dark:  #A35A2F;   /* Stays hover/active */
--color-bg:          #FAFAF8;   /* Page background */
--color-surface:     #FFFFFF;   /* Card/section background */
```

## Google Analytics Setup

1. Search all HTML files for `TK-GA4-ID`.
2. Replace with your Google Analytics 4 Measurement ID (format: `G-XXXXXXXXXX`).
3. Uncomment the GA4 script block in the `<head>` of each HTML file.

## Before Going Live

See the pre-launch checklist at the bottom of `PLACEHOLDERS.md` for legal and compliance items that must be confirmed before publishing.
