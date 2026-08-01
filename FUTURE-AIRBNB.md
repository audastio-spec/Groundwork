# Future Airbnb / Vacation Rental Section

**Status:** On hold until November/December 2026.

When ready, this will add a third path to the website for short-term vacation home rentals (Airbnb). The plan is to add a new page (e.g., `/airbnb.html` or `/vacation.html`) and a third card on the splash page. The gig driver and short-term car rental sections stay as they are.

---

## Saved Placeholders

These were built for the original version of the site and removed when the stays section was converted to short-term car rentals. Copy them into PLACEHOLDERS.md when building the Airbnb page.

### Property Details

| Placeholder | What to Supply |
|---|---|
| `TK-PROPERTY-NAME` | Name of the Airbnb property, e.g. `The Lakeside Cottage` or a friendly address |
| `TK-PROPERTY-NEIGHBORHOOD` | Neighborhood name in Winter Haven, e.g. `Lake Eloise Heights` |
| `TK-SLEEPS` | Maximum number of guests, e.g. `6` |
| `TK-BEDROOMS` | Number of bedrooms, e.g. `3` |
| `TK-BATHROOMS` | Number of bathrooms, e.g. `2` |
| `TK-MAX-OCCUPANCY` | Hard maximum occupancy (for house rules), e.g. `8` |

### Rates and Fees

| Placeholder | What to Supply |
|---|---|
| `TK-NIGHTLY-RANGE` | Nightly rate range, e.g. `$120-$180` |
| `TK-MINIMUM-STAY` | Minimum night stay, e.g. `2` or `3` |
| `TK-CLEANING-FEE` | One-time cleaning fee per reservation, e.g. `$125` |
| `TK-STAYS-DEPOSIT` | Security deposit, e.g. `$250` |
| `TK-TAX-RATE` | Combined Florida sales tax + Polk County Tourist Development Tax rate. Verify with your CPA before publishing, e.g. `12%` |

### Check-in / Check-out

| Placeholder | What to Supply |
|---|---|
| `TK-CHECKIN-TIME` | Check-in time, e.g. `3:00 PM` |
| `TK-CHECKOUT-TIME` | Check-out time, e.g. `11:00 AM` |

### Policies

| Placeholder | What to Supply |
|---|---|
| `TK-PET-POLICY` | Pet policy, e.g. `Pets are not permitted.` or `Small dogs under 25 lbs are welcome with a $50 pet fee.` |
| `TK-CANCELLATION-POLICY` | Cancellation terms, e.g. `Full refund if cancelled 14 days before check-in. 50% refund if cancelled 7-13 days before. No refund within 7 days.` |
| `TK-TRASH-DAYS` | Trash pickup days, e.g. `Tuesday and Friday` |
| `TK-PARKING-SPACES` | Number of parking spots, e.g. `2` |

### Amenities and Child Items

| Placeholder | What to Supply |
|---|---|
| `TK-CHILD-AMENITIES` | Child items available on request, e.g. `a pack-n-play, high chair, and stair gates` |
| `TK-GROCERY-DISTANCE` | Minutes to nearest grocery store, e.g. `5` |

### Distances (can reuse from stays.html)

These are already in the short-term car rental page and can be shared:

| Placeholder | What to Supply |
|---|---|
| `TK-LEGOLAND-DISTANCE` | Drive time in minutes to LEGOLAND |
| `TK-LEGOLAND-WP-DISTANCE` | Drive time to LEGOLAND Water Park |
| `TK-BOK-TOWER-DISTANCE` | Drive time to Bok Tower Gardens |
| `TK-CHAIN-LAKES-DISTANCE` | Drive time to nearest Chain of Lakes access |
| `TK-DOWNTOWN-WH-DISTANCE` | Drive time to downtown Winter Haven |
| `TK-DISNEY-DISTANCE` | Drive time to Walt Disney World main gate |
| `TK-MCO-DISTANCE` | Drive time to Orlando International Airport |
| `TK-TPA-DISTANCE` | Drive time to Tampa International Airport |

---

## Saved Image Manifest

These images will be needed for the Airbnb property page.

| Filename | Dimensions | Purpose |
|---|---|---|
| `og-airbnb.jpg` | 1200 x 630 | Open Graph image for the vacation rental page. Best exterior or hero-quality interior shot. |
| `property-main.jpg` / `.webp` | 1200 x 675 | Main hero photo of the property exterior. |
| `gallery-01.jpg` / `.webp` | 800 x 600 | Living room / main living area. |
| `gallery-02.jpg` / `.webp` | 800 x 600 | Kitchen. |
| `gallery-03.jpg` / `.webp` | 800 x 600 | Primary bedroom. |
| `gallery-04.jpg` / `.webp` | 800 x 600 | Second bedroom (or kids' room). |
| `gallery-05.jpg` / `.webp` | 800 x 600 | Bathroom. |
| `gallery-06.jpg` / `.webp` | 800 x 600 | Outdoor area (patio, yard, pool if applicable). |
| `gallery-07.jpg` / `.webp` | 800 x 600 | Dining area. |
| `gallery-08.jpg` / `.webp` | 800 x 600 | Neighborhood or street view. |

---

## Pre-Launch Checklist (Airbnb-specific)

These compliance items apply only to the vacation rental side and should be completed before that page goes live:

- [ ] **DBPR vacation rental license** -- Obtain a license from the Florida Department of Business and Professional Regulation (DBPR). Required for all transient public lodging in Florida.
- [ ] **Polk County Tourist Development Tax account** -- Register with the Polk County Tax Collector to collect and remit the Tourist Development Tax on short-term vacation rentals.
- [ ] **Confirm TK-TAX-RATE** -- Have your CPA verify the combined state + county tax rate before publishing.
- [ ] **Vacation rental insurance** -- Confirm you have appropriate property and liability insurance for short-term rental use.
- [ ] **Attorney review of vacation booking agreement** -- Have a Florida attorney review your vacation rental booking agreement.
- [ ] **Airbnb listing cross-reference** -- Decide whether the website booking form supplements or replaces Airbnb direct booking, and make that clear to guests.

---

## Schema Reference

When building the page, use `LodgingBusiness` JSON-LD schema:

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Groundwork Rentals LLC — Vacation Rental",
  "description": "Family-friendly vacation rental in Winter Haven, Florida, near LEGOLAND, Bok Tower Gardens, and the Chain of Lakes.",
  "url": "TK-SITE-URL/airbnb.html",
  "telephone": "TK-PHONE-NUMBER",
  "email": "TK-EMAIL-ADDRESS",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Winter Haven",
    "addressRegion": "FL",
    "postalCode": "TK-ZIP-CODE",
    "addressCountry": "US"
  },
  "checkinTime": "TK-CHECKIN-TIME",
  "checkoutTime": "TK-CHECKOUT-TIME",
  "priceRange": "TK-NIGHTLY-RANGE",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "WiFi", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Kitchen", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Washer/Dryer", "value": true}
  ]
}
```

---

## CSS Already Built

The stylesheet (`styles.css`) already has all the classes needed for the vacation rental page. These were built in the original version and are still in the CSS, ready to use:

- `.property-hero-image` -- full-width hero image for property exterior
- `.property-stats` / `.property-stat` -- sleeps/bedrooms/bathrooms at-a-glance
- `.gallery-grid` / `.gallery-item` -- photo gallery grid
- `.lightbox` / `.lightbox__img` / `.lightbox__close` / `.lightbox__nav` -- full-screen photo lightbox
- `.amenity-grid` / `.amenity` -- amenity icons grid
- `.rates-card` / `.rates-card__row` -- rate breakdown card
- `.house-rules` -- styled rules list
- `.nearby-grid` / `.nearby-item` -- local tips section

The JavaScript (`script.js`) already has the lightbox functionality wired up. No code changes needed on that side.

---

## Splash Page Update

When the Airbnb page is ready, add a third card to the splash page (`index.html`) inside the `.splash__cards` div. You may want to change the grid from 2 columns to 3:

```css
@media (min-width: 800px) {
  .splash__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Third card example:

```html
<a href="airbnb.html" class="splash-card" aria-label="I need a place to stay near LEGOLAND">
  <svg class="splash-card__icon" style="color:#8B5E3C" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 56V28l24-18 24 18v28H8z"/>
    <rect x="24" y="36" width="16" height="20"/>
    <rect x="28" y="40" width="8" height="8"/>
    <path d="M16 36h8v8h-8z"/>
    <path d="M40 36h8v8h-8z"/>
  </svg>
  <span class="splash-card__title">I need a place to stay</span>
  <p class="splash-card__desc">Family-friendly vacation rental near LEGOLAND Florida, Bok Tower, and the Chain of Lakes.</p>
</a>
```
