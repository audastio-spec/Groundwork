# Placeholders

Every `TK-` placeholder used in the website, where it appears, and what you need to supply. Search for these strings across all files and replace them with your actual values before going live.

## Business Information

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-SITE-URL` | All HTML files (canonical, OG tags, schema), sitemap.xml, robots.txt | Your live website URL, e.g. `https://www.example.com` (no trailing slash) |
| `TK-PHONE-NUMBER` | All HTML files (tel: links, schema) | Phone number in international format, e.g. `+18635551234` |
| `TK-PHONE-DISPLAY` | All HTML files (display text) | Phone number formatted for display, e.g. `(863) 555-1234` |
| `TK-EMAIL-ADDRESS` | All HTML files (mailto: links, schema) | Your business email address |
| `TK-WHATSAPP-NUMBER` | All HTML files (wa.me links) | WhatsApp number without the `+`, e.g. `18635551234` |
| `TK-STREET-ADDRESS` | index.html, stays.html, privacy.html, terms.html (schema, contact info) | Your business street address |
| `TK-ZIP-CODE` | index.html, stays.html, privacy.html, terms.html (schema) | Your ZIP code |
| `TK-LATITUDE` | index.html (schema) | Business latitude for Google, e.g. `28.0222` |
| `TK-LONGITUDE` | index.html (schema) | Business longitude for Google, e.g. `-81.7329` |
| `TK-BUSINESS-HOURS` | index.html, drivers.html, stays.html, contact.html (schema, display) | Business hours, e.g. `Mo-Fr 08:00-18:00, Sa 09:00-14:00` |
| `TK-OWNER-NAME` | about.html (alt text) | Owner's name for the photo alt text |

## Long-Term / Gig Driver Section (drivers.html)

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-LOWEST-WEEKLY-RATE` | drivers.html (hero, meta description) | Your lowest weekly rate formatted as currency, e.g. `$250` |
| `TK-PRICE-RANGE` | drivers.html (schema) | Price range string, e.g. `$250-$350/week` |
| `TK-DEPOSIT-AMOUNT` | drivers.html (pricing, FAQ, requirements) | Deposit amount, e.g. `$500` |
| `TK-DEPOSIT-PAYMENT-METHODS` | drivers.html (pricing note) | Accepted deposit payment methods, e.g. `cash, debit card, or Zelle` |
| `TK-REFUND-TIMELINE` | drivers.html (FAQ) | How long refunds take, e.g. `5-7 business days` |
| `TK-INSURANCE-DESCRIPTION` | drivers.html (included section, FAQ) | Exact insurance description. Use precise language, e.g. `commercial auto liability insurance`. Never write "full coverage" or "fully insured." |
| `TK-MINIMUM-AGE` | drivers.html (requirements) | Minimum driver age, e.g. `21` |
| `TK-MILEAGE-POLICY` | drivers.html (vehicle cards, FAQ) | Mileage policy, e.g. `1,500 miles per week included` or `Unlimited mileage` |
| `TK-EXCESS-MILEAGE-RATE` | drivers.html (FAQ) | Per-mile overage charge, e.g. `$0.15` |
| `TK-EARLY-RETURN-NOTICE` | drivers.html (FAQ) | Requested early return notice, e.g. `48 hours'` |
| `TK-PAYMENT-DUE-DAY` | drivers.html (FAQ) | When weekly payment is due, e.g. `every Monday` |
| `TK-ACCEPTED-PAYMENT-METHODS` | drivers.html (FAQ) | Accepted payment methods, e.g. `cash, Zelle, CashApp, and debit card` |

### Per-Vehicle Placeholders — Gig Driver Fleet (repeat for each vehicle)

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-VEHICLE-1-YEAR` | drivers.html | Model year, e.g. `2022` |
| `TK-VEHICLE-1-MODEL` | drivers.html, IMAGES.md | Vehicle model, e.g. `Toyota Camry` |
| `TK-VEHICLE-1-WEEKLY-RATE` | drivers.html | Weekly rate, e.g. `$275` |
| `TK-VEHICLE-1-MILEAGE-POLICY` | drivers.html | Mileage for this vehicle, e.g. `1,500 miles/week included` |
| `TK-VEHICLE-2-YEAR` | drivers.html | Model year |
| `TK-VEHICLE-2-MODEL` | drivers.html | Vehicle model |
| `TK-VEHICLE-2-WEEKLY-RATE` | drivers.html | Weekly rate |
| `TK-VEHICLE-2-MILEAGE-POLICY` | drivers.html | Mileage policy |
| `TK-VEHICLE-3-YEAR` | drivers.html | Model year |
| `TK-VEHICLE-3-MODEL` | drivers.html | Vehicle model |
| `TK-VEHICLE-3-WEEKLY-RATE` | drivers.html | Weekly rate |
| `TK-VEHICLE-3-MILEAGE-POLICY` | drivers.html | Mileage policy |

## Short-Term Rental Section (stays.html)

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-SHORT-TERM-DAILY-RATE` | stays.html (hero) | Lowest daily rate, e.g. `$45` |
| `TK-SHORT-TERM-PRICE-RANGE` | stays.html (schema) | Price range string, e.g. `$45-$75/day` |
| `TK-SHORT-TERM-DEPOSIT` | stays.html (pricing, requirements) | Short-term rental deposit, e.g. `$300` |
| `TK-SHORT-TERM-MINIMUM` | stays.html (FAQ) | Minimum rental period, e.g. `1 day` or `2 days` |
| `TK-SHORT-TERM-CREDIT-POLICY` | stays.html (FAQ) | Credit check policy for short-term renters, e.g. `No credit check is required. We verify your driver's license and driving record only.` |
| `TK-SHORT-TERM-INCLUDED` | stays.html (vehicle cards, included section) | What is included, e.g. `Insurance, registration, and roadside assistance` |
| `TK-SHORT-TERM-INSURANCE-DESCRIPTION` | stays.html (included section, FAQ) | Exact insurance description for short-term rentals. Same rule: never write "full coverage." |
| `TK-SHORT-TERM-MILEAGE-POLICY` | stays.html (included section, FAQ) | Mileage policy for short-term rentals, e.g. `200 miles per day included` or `Unlimited mileage` |
| `TK-SHORT-TERM-MIN-AGE` | stays.html (requirements) | Minimum age for short-term renters, e.g. `21` |
| `TK-SHORT-TERM-ID-REQUIREMENTS` | stays.html (requirements, FAQ) | Additional ID requirements, e.g. `International visitors must also provide a passport.` or leave blank for U.S. only. |
| `TK-SHORT-TERM-CANCELLATION-POLICY` | stays.html (FAQ) | Cancellation terms, e.g. `Full refund if cancelled 48 hours before pickup. No refund within 48 hours.` |
| `TK-DELIVERY-POLICY` | stays.html (FAQ) | Whether you deliver vehicles or offer airport pickup, e.g. `We do not currently offer airport pickup. Pickup is at our Winter Haven location.` or `Airport pickup at MCO may be available for an additional fee. Contact us to arrange.` |

### Per-Vehicle Placeholders — Short-Term Fleet (repeat for each vehicle)

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-ST-VEHICLE-1-YEAR` | stays.html | Model year, e.g. `2023` |
| `TK-ST-VEHICLE-1-MODEL` | stays.html, IMAGES.md | Vehicle model, e.g. `Hyundai Elantra` |
| `TK-ST-VEHICLE-1-DAILY-RATE` | stays.html | Daily rate, e.g. `$50` |
| `TK-ST-VEHICLE-1-WEEKLY-RATE` | stays.html | Weekly rate, e.g. `$275` |
| `TK-ST-VEHICLE-1-MILEAGE` | stays.html | Mileage policy for this vehicle, e.g. `200 miles/day included` |
| `TK-ST-VEHICLE-2-YEAR` | stays.html | Model year |
| `TK-ST-VEHICLE-2-MODEL` | stays.html | Vehicle model |
| `TK-ST-VEHICLE-2-DAILY-RATE` | stays.html | Daily rate |
| `TK-ST-VEHICLE-2-WEEKLY-RATE` | stays.html | Weekly rate |
| `TK-ST-VEHICLE-2-MILEAGE` | stays.html | Mileage policy |

### Distance Placeholders (stays.html)

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-LEGOLAND-DISTANCE` | stays.html (distances) | Drive time in minutes to LEGOLAND |
| `TK-LEGOLAND-WP-DISTANCE` | stays.html (distances) | Drive time to LEGOLAND Water Park |
| `TK-BOK-TOWER-DISTANCE` | stays.html (distances) | Drive time to Bok Tower Gardens |
| `TK-CHAIN-LAKES-DISTANCE` | stays.html (distances) | Drive time to nearest Chain of Lakes access |
| `TK-DOWNTOWN-WH-DISTANCE` | stays.html (distances) | Drive time to downtown Winter Haven |
| `TK-DISNEY-DISTANCE` | stays.html (distances) | Drive time to Walt Disney World main gate |
| `TK-MCO-DISTANCE` | stays.html (distances) | Drive time to Orlando International Airport |
| `TK-TPA-DISTANCE` | stays.html (distances) | Drive time to Tampa International Airport |

## Forms

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-FORMSPREE-DRIVER-ID` | drivers.html | Formspree form ID for long-term gig driver inquiries |
| `TK-FORMSPREE-STAYS-ID` | stays.html | Formspree form ID for short-term rental inquiries |

## Analytics & Technical

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-GA4-ID` | All HTML files (commented-out script) | Google Analytics 4 Measurement ID, e.g. `G-ABC123DEF4` |

## Legal

| Placeholder | Where Used | What to Supply |
|---|---|---|
| `TK-PRIVACY-DATE` | privacy.html | Date the privacy policy was last reviewed, e.g. `July 25, 2026` |
| `TK-TERMS-DATE` | terms.html | Date the terms were last reviewed, e.g. `July 25, 2026` |

---

## Pre-Launch Checklist

Before publishing this website, confirm the following legal and compliance items:

### Business Registration & Licensing
- [ ] **Florida rental company registration** -- Verify Groundwork Rentals LLC is properly registered with the Florida Department of State (sunbiz.org) and holds any required local business tax receipts.
- [ ] **Commercial motor vehicle rental registration** -- Confirm you are registered as a motor vehicle rental company with the Florida Department of Revenue if required.

### Tax
- [ ] **Sales tax collection** -- Register with the Florida Department of Revenue to collect and remit Florida state sales tax on vehicle rentals.
- [ ] **Rental surcharge** -- Verify whether the Florida $2/day motor vehicle rental surcharge applies to your rentals and register accordingly.
- [ ] **County surcharge** -- Check whether Polk County imposes any additional rental surcharges.

### Insurance
- [ ] **Commercial fleet insurance** -- Confirm your commercial auto policy is active, covers both gig/rideshare use and personal use by renters, and meets Florida minimum liability requirements. Update TK-INSURANCE-DESCRIPTION and TK-SHORT-TERM-INSURANCE-DESCRIPTION to match your policy's actual coverage language.

### Legal Documents
- [ ] **Attorney review of rental agreement** -- Have a Florida attorney review your vehicle rental agreement (used for both long-term and short-term rentals).
- [ ] **Attorney review of website terms** -- Have a Florida attorney review `terms.html` and `privacy.html` before publishing.

### Online Presence
- [ ] **Google Business Profile** -- Create or update your Google Business Profile with your business name, address, phone, website, hours, and photos. This is critical for local SEO.
- [ ] **Formspree or Netlify Forms** -- Set up your form submission endpoint and test both contact forms end-to-end.
- [ ] **WhatsApp Business** -- Set up a WhatsApp Business account with your business name, description, and auto-reply messages.

### Content
- [ ] **Replace all TK- placeholders** -- Use this document to find and replace every placeholder. Search all files for `TK-` to confirm none remain.
- [ ] **Add all images** -- See IMAGES.md. Replace every placeholder image block with actual photos.
- [ ] **Test all links** -- Click every link on every page to verify they resolve correctly.
- [ ] **Test both forms** -- Submit test entries through both forms and verify they arrive.
- [ ] **Test WhatsApp links** -- Click every WhatsApp link and verify the pre-filled message is correct.
- [ ] **Mobile test** -- Load every page on a real phone at 375px width and verify readability and usability.
