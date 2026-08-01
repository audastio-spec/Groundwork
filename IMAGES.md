# Image Manifest

Every image needed for the website. For each image, provide both a `.jpg` and a `.webp` version in the `images/` folder at the specified dimensions. All images should be optimized for web (compress JPEGs to quality 80-85, WebP to quality 75-80).

## Splash / Shared

| Filename | Dimensions | Purpose |
|---|---|---|
| `favicon.ico` | 32x32 (+ 16x16) | Browser tab icon. Can also provide `favicon.png` at 180x180 for Apple touch icon. |
| `og-home.jpg` | 1200 x 630 | Open Graph / social sharing image for the home page. Should include the business name and a visual representing car rentals. |

## Long-Term / Gig Driver Section

| Filename | Dimensions | Purpose |
|---|---|---|
| `og-drivers.jpg` | 1200 x 630 | Open Graph image for the gig driver landing page. Should show a vehicle or convey gig driving. |
| `vehicle-1.jpg` / `.webp` | 640 x 400 | Photo of gig fleet vehicle 1 (TK-VEHICLE-1-MODEL). Clean exterior shot, good lighting. |
| `vehicle-2.jpg` / `.webp` | 640 x 400 | Photo of gig fleet vehicle 2 (TK-VEHICLE-2-MODEL). Same style as vehicle 1. |
| `vehicle-3.jpg` / `.webp` | 640 x 400 | Photo of gig fleet vehicle 3 (TK-VEHICLE-3-MODEL). Same style as others. |
| `why-local.jpg` / `.webp` | 600 x 450 | Photo for the "Why local" section on drivers.html. Could be a Winter Haven street scene, your pickup location, or the owner with a vehicle. |

## Short-Term Rental Section

| Filename | Dimensions | Purpose |
|---|---|---|
| `og-stays.jpg` | 1200 x 630 | Open Graph image for the short-term rental page. Should show a vehicle or convey tourist/visitor car rental. |
| `st-vehicle-1.jpg` / `.webp` | 640 x 400 | Photo of short-term fleet vehicle 1 (TK-ST-VEHICLE-1-MODEL). Clean exterior shot. |
| `st-vehicle-2.jpg` / `.webp` | 640 x 400 | Photo of short-term fleet vehicle 2 (TK-ST-VEHICLE-2-MODEL). Same style. |
| `why-local-st.jpg` / `.webp` | 600 x 450 | Photo for the "Skip the airport rental counter" section on stays.html. Could be your vehicles lined up, or a Winter Haven scene. |

## About Page

| Filename | Dimensions | Purpose |
|---|---|---|
| `og-about.jpg` | 1200 x 630 | Open Graph image for the about page. Could reuse owner photo or a Winter Haven scene. |
| `owner-photo.jpg` / `.webp` | 300 x 400 (portrait) | Photo of the owner or family. Candid or natural setting preferred over a studio headshot. |

## Photography Tips

- **Vehicles:** Shoot in natural daylight, clean the car beforehand, park on a clean surface. Show the full exterior from a 3/4 front angle. Include one interior shot per vehicle if possible (add as additional cards).
- **Owner photo:** Casual, approachable. Standing near a vehicle or in front of the business works well.
- **Open Graph images:** These show up on Facebook, Twitter, iMessage link previews. Include the business name as text overlay if possible, or use a strong visual that works at small sizes.

## Note on fleet overlap

If the same vehicles are used for both long-term and short-term rentals, you can use the same photos. Just save them with both filenames (e.g., copy `vehicle-1.jpg` as `st-vehicle-1.jpg`) or point both pages to the same image by editing the HTML `src` attributes.

## Adding Images to the HTML

Each placeholder in the HTML files includes a commented-out `<picture>` element. To activate:

1. Place your image files in the `images/` folder.
2. Find the placeholder block in the HTML (search for "Replace with:").
3. Uncomment the `<picture>` element.
4. Delete the placeholder text that was displaying the dimensions.
5. Verify the `alt` text is accurate and descriptive.
