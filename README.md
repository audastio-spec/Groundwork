# Groundwork Rental website

Static HTML, CSS, and JavaScript for https://groundworkrental.com.

## Current customer flow

Visitors select gig-driver or short-term inquiries. Availability, rates, permitted platform use, insurance, and rental terms must be confirmed before a booking. Do not publish vehicle inventory or prices until verified by the owner.

Customer phone and WhatsApp: +1 863-289-8332. Public email: driver@groundworkrental.com.

## Forms

`drivers.html` and `stays.html` use Netlify Forms (`driver-inquiry` and `short-term-inquiry`). Form detection must be enabled. Submission email notification is configured in Netlify for driver@groundworkrental.com. JavaScript uses URL-encoded POST requests, confirms only successful responses, and preserves inputs on failure. Without JavaScript, forms use `thank-you.html`. Campaign fields retain source page and UTM source, medium, and campaign values.

## Local validation

Run `python3 -m http.server 4180` and open http://127.0.0.1:4180. Local Python hosting does not accept form submissions; use this to check the failure state. Use a Netlify preview for successful submission tests and confirm receipt in the Forms dashboard.

Run `node --check script.js` and `git diff --check` before deploying. Check mobile navigation, date constraints, accessible errors, and all customer links.

## Deployment identity

The authorized production site is Netlify ID `ef060cbf-bbae-4ae9-8b5a-35a7a6ba8501`, internal name `groundworkrentalllc`, serving **groundworkrental.com**. A second project named `groundworkrental` serves a different domain and builds from the same repository. A merge to main can deploy both projects. Target the exact authorized site ID for a manual static deployment until the shared production-branch arrangement is resolved. Keep changes in the pull request for source review.

Publish only HTML, CSS, JavaScript, robots.txt, sitemap.xml, and referenced images; never publish local account configuration, verification addresses, or credentials.

## Remaining owner inputs

Confirm launch/fleet status, actual available vehicles and photos, prices and deposits, operating hours, pickup/delivery arrangements, permitted uses and insurance terms. Existing raster brand assets use the older plural name. Google Business needs the owner's genuine verification video; Instagram and TikTok require their separate account logins. Templates in privacy.html and terms.html must reflect the actual operating policies.
