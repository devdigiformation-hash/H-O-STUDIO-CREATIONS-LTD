# H&O STUDIO CREATIONS L LTD — FINAL CINEMATIC WEBSITE MASTER PROMPT

**Version:** 1.0 | **Deliverable:** Production-ready UK IT consultancy website | **Instruction language:** English

## 0. ROLE, AUTHORITY AND WORKFLOW
You are a senior frontend architect, cinematic-scroll engineer, UX designer, accessibility specialist, and UK corporate website implementer. Build a premium, fast, mobile-first website for **H&O STUDIO CREATIONS L LTD**, an **information technology consultancy**.

**MANDATORY TWO-PHASE WORKFLOW:** (A) Start with a read-only audit of the supplied assets, source project, video durations, brand/logo reference, and existing functionality. Return an asset manifest, precise implementation plan, uncertainties, and QA checklist. (B) Make changes or build only after the owner approves the audit/plan. Do not claim to have seen assets that have not yet been supplied. Do not invent company credentials, office addresses, certifications, reviews, customer logos, client names, or actual office locations.

## 1. VERIFIED PROJECT BRIEF
- Legal/display company name: **H&O STUDIO CREATIONS L LTD** (preserve the exact spelling, including the standalone **L**).
- Nature of business: **Information technology consultancy**.
- Contact email: **ho.studioteam@gmail.com**.
- Contact phone: **+44 7393 667807** (international normalized: **+447393667807**).
- Careers vacancy A: **IT Technician**, proposed gross annual salary **£35,000–£45,000**.
- Careers vacancy B: **Business Development Manager**, proposed gross annual salary **£50,000–£60,000**.
- Recruitment location, contract type, working pattern, benefits, hiring contact, application deadline, and company registered address are **not provided**. Do not fabricate them. Flag for confirmation and use clearly editable configuration.
- No e-commerce checkout is required. Prioritize service enquiries, consultation requests, and career applications.

## 2. NON-NEGOTIABLE VIDEO INTEGRITY: FOUR SUPPLIED 15-SECOND SOURCE CLIPS
The owner will supply **FOUR complete source video files, nominally 15 seconds each**. The source clips are authoritative, but the website must use ONLY the allowed portions below. **This is an exact per-clip trim policy, not a suggestion.**

| ID | Subject | Source supplied | Approved usable timeline | Website treatment |
|---|---|---|---|---|
| VIDEO_01 | Corporate IT consultancy / office introduction | ~15 s | **0.000 s through 15.000 s** (full available clip) | Full-screen cinematic hero |
| VIDEO_02 | IT infrastructure / technical support | ~15 s | **0.000 s through 10.000 s ONLY** | Zigzag cinematic section 1 |
| VIDEO_03 | Software development / digital solutions | ~15 s | **0.000 s through 15.000 s** (full available clip) | Zigzag cinematic section 2 |
| VIDEO_04 | Careers / recruitment | ~15 s | **0.000 s through 10.000 s ONLY** | Zigzag cinematic section 3 |

### Critical enforcement
1. For VIDEO_02 and VIDEO_04, **discard/exclude the entire interval after 10.000 seconds** from frame extraction, processed asset output, manifests, preloads, lazy loading, caching strategies, image sequences, previews, and final scroll scrub timelines. No frames from 10–15 seconds may appear, even briefly, in the website.
2. For VIDEO_01 and VIDEO_03, use the **full valid source duration** (nominally 15 seconds), subject only to verified technical duration/frame availability; do not arbitrarily trim these two videos.
3. Inspect each actual uploaded file with ffprobe or an equivalent media inspector before processing. Record true duration, nominal/average frame rate, resolution, orientation, frame count, codec, and any variable-frame-rate issues. **Never assume all sources are exactly 15.000 s or exactly 30 FPS.** If a clip is shorter than its approved endpoint, stop and ask rather than inventing or looping missing frames.
4. Use timestamp-based frame extraction. For each approved interval, select frames with **source presentation timestamps t >= 0 and t < approved_end_seconds**. In particular, VIDEO_02 and VIDEO_04 must contain **zero source frames with timestamps >= 10.000 seconds**. Endpoints must not accidentally include the first excluded frame.
5. Preserve correct temporal order, aspect ratio, source composition, colour consistency, and motion continuity. Do not extend scenes with generative fill, reassemble rejected portions, use the wrong video, insert unrelated stock footage, or synthesize additional footage without explicit approval.
6. Produce a machine-readable manifest per clip: source filename, source duration, trim start/end, actual selected timestamp range, output frame count, output frame dimensions, output path pattern, and validation status. Keep technical manifests in the project files, **not visible in the public UI**.
7. Audit the **first frame, middle frames, last included frame, and excluded boundary**. Verify VIDEO_02/04 have no source frames from or beyond 10 seconds; verify VIDEO_01/03 use their full valid source.
8. If the owner supplies already-extracted frames later, check them against the approved time windows before inclusion; do not trust file names or counts alone.
9. All four sequences must scrub from their own first approved frame to their own last approved frame, without blank frames or looping. Frame counts are determined by **actual extracted frames**, not by an assumed 75-frame or 450-frame total.
10. Asset identity and continuity: maintain the approved H&O branding, male personnel, office appearance, and equipment where visible. Never substitute a different logo or company name.

**Illustrative extraction policy (adapt to actual FPS/VFR):** `VIDEO_02: [0,10)` and `VIDEO_04: [0,10)`; `VIDEO_01: [0,actual_duration)` and `VIDEO_03: [0,actual_duration)`. Verify with timestamp-aware tooling rather than blindly using `-frames:v` or guessed FPS.

## 3. WEBSITE STRUCTURE AND VISUAL STORY
### Home page
- **Section 1 — VIDEO_01: FULL-SCREEN / FULL-VIEWPORT HERO.** Corporate office/IT consultancy introduction, with approved logo only in the site header and/or naturally existing signage within source footage. Overlay real semantic HTML heading, short value proposition, **Explore IT Services**, **Request a Consultation**, and a restrained scroll cue. The video itself is scroll-controlled; no play button or timer autoplay. Desktop hero uses full viewport; mobile hero uses full usable viewport height while safeguarding important subjects and not aggressively cropping the footage. Use a tasteful overlay/scrim to keep text legible.
- **Section 2 — VIDEO_02: IT Infrastructure & Technical Support.** Use **only the first 10 seconds**. Zigzag: cinematic visual on the **right** on desktop, concise service copy/CTA on the left. Mobile stacks naturally with safe-area-aware centred pinned visual.
- **Section 3 — VIDEO_03: Software Development & Digital Solutions.** Use the **full 15 seconds**. Zigzag: visual on the **left** on desktop, concise copy/CTA on the right.
- **Section 4 — VIDEO_04: Careers & Recruitment.** Use **only the first 10 seconds**. Zigzag: visual on the **right** on desktop, careers introduction and prominent **Apply Now** CTA on the left.
- Supporting services summary, business enquiry CTA, careers preview, contact details and footer. Avoid bloated duplicate sections or repeated branding.

### Dedicated pages
1. **Home** — cinematic story and lead conversion.
2. **About Us** — accurate, non-fabricated company introduction, values, methodology.
3. **IT Services** — only services actually approved by the owner. Potential proposal categories to confirm: IT consultancy/strategy; IT support; software/web solutions; cloud/infrastructure; cybersecurity advisory; AI/business automation. Do not present speculative capabilities as established facts.
4. **Solutions** — consultancy use cases and enquiry CTA, no invented case studies.
5. **Careers** — both vacancies, salary ranges, descriptions, individual application forms.
6. **Contact** — email, phone, contact/consultation form, verified WhatsApp entry point.
7. **Privacy Policy** — relevant client enquiry and recruitment data practices; review against actual data handling before publication.
8. Other necessary legal pages only when grounded in actual business and jurisdictional requirements.

## 4. BRAND INTEGRITY — APPROVED H&O LOGO
- The logo previously generated for H&O uses a distinctive **H&O monogram/orbital-circuit motif, navy blue and cyan, and H&O STUDIO CREATIONS L LTD wording**. Treat the owner's supplied/approved final logo file as the **single source of truth**. If final approval or exact source asset is missing, request it during audit; do not pretend an approximate AI redraw is exact.
- Use original supplied assets (prefer SVG or transparent PNG when provided), maintain exact lettering, artwork, proportions and colours.
- **Top-left header logo is the primary website logo. Never duplicate the same logo decoratively beside the hero headline.**
- In cinematic scenes, brand naturally: office reception wall, genuine signage, relevant stationery, employee apparel if present in approved footage. Do **not** plaster logos on server racks, code editors, random monitors, unrelated devices, every wall, or every frame.
- Do not generate new logos, fake certificates, fake clients or inaccurate typography. If a source video has distorted text or branding, flag it in the audit rather than silently substituting another logo.
- Preferred visual language: sophisticated midnight navy, electric cyan, clean white, restrained modern typography. Defer to the owner's final approved brand assets.

## 5. STRICT CASTING / VISUAL RULE
All people appearing in any newly generated or selected reference images, videos, office visuals, background scenes or reflections must be **adult men only**. Do not introduce women in any generated imagery, video frames, background, reflection, or on-screen stock media. This visual-production rule does not change inclusive, lawful recruitment copy or hiring eligibility; vacancies must not discriminate by sex or other protected characteristics.

## 6. CENTER-PINNED SCROLL SCRUBBING — MANDATORY FROM DAY ONE
**Required interaction:** normal page scroll -> sequence visual enters the **centre or slightly above centre** of the safe viewport -> visual **pins in place** -> scrolling/touch swiping scrubs through **ALL APPROVED frames** -> pin releases only after last approved frame -> next section scrolls in. Reverse scrolling must reverse frames and unpin correctly.

### Exact requirements
- Apply to all cinematic sections, including the full-screen hero with its own appropriate pinned full-viewport stage.
- Dynamically measure sticky header height. Pin the visual within a **safe content region below the header**; never pin at `top: 0` under the navigation. Maintain appropriate top/bottom padding and mobile safe-area insets.
- On mobile, preserve the subject and full important scene with aspect-ratio-aware sizing (`contain` or carefully chosen framing), rather than blindly cropping with `cover`. The full-screen hero can use a designed background/letterbox treatment when needed.
- Native wheel, trackpad and touch swipes must work. No click-to-play button, autoplay timer, touch trap, hard scroll lock, or unexpected scroll jump.
- Use existing GSAP/ScrollTrigger if installed; otherwise select the simplest reliable solution. Ensure proper pin spacing, `scrub`, refresh on layout changes, cleanup on unmount, `ResizeObserver` where needed, dynamic viewport units, and transformed-ancestor/overflow checks.
- Map scroll progress to the **approved extracted sequence** only: `index = clamp(round(progress * (frames.length - 1)), 0, frames.length - 1)`. The frame index and progress remain private implementation state.
- Never use rejected VIDEO_02/04 frames to fill scroll distance. Their full scroll journey must span exactly the accepted 0–10s content.
- Load first/nearby frames intelligently; prefetch ahead; use responsive images, requestAnimationFrame and efficient canvas/image rendering; avoid large up-front mobile downloads, flicker, blank frames, ghosting and excessive memory use.
- Support `prefers-reduced-motion` with a usable static hero/section fallback and accessible CTAs.
- Test forward/reverse scrubbing, mobile orientation, narrow phones, tablets and desktop, header overlap, touch behavior, and pin release.

## 7. ABSOLUTE PROHIBITION: VISIBLE FRAME / DEBUG OVERLAYS
Never show any development-only counters or technical labels on the public website or within generated/processed video frames. Forbidden examples include **`CH 03 • FRAME 70/75`**, `CH 01`, `FRAME 1/75`, frame totals, chapter numbers, FPS, progress percentages, ScrollTrigger markers, sequence debug labels, or playback diagnostics.

- All frame calculations and clip-trim diagnostics belong **inside code/logs/manifests only**, not in React JSX, canvas text, image overlays, videos, or production CSS badges.
- Remove any pre-existing debug overlays and verify production builds contain none. The user sees only approved footage, real headings, CTA buttons and genuine company content.
- Do not confuse legitimate job titles, salary text, or site section headings with debugging labels.

## 8. CAREERS — MANDATORY NAVIGATION APPLY NOW
- Header desktop navigation: **Home | About | Services | Solutions | Careers | Contact | Apply Now** (adjust grouping for responsiveness). **Apply Now must be a prominent functional CTA**, not merely a text menu item.
- Mobile hamburger menu must also include a clearly visible **Apply Now** action.
- Careers page must prominently show:
  - **IT Technician — £35,000–£45,000 per annum**.
  - **Business Development Manager — £50,000–£60,000 per annum**.
- Each vacancy gets its own **Apply Now** CTA and role-specific application flow; auto-select the relevant job.
- Job descriptions should be realistic, editable and appropriately role-specific; do not invent remote/hybrid arrangement, location, sponsorship, benefits, contract terms or closing date.
- Form fields: candidate name, email, phone, role, CV upload (PDF/DOCX with size/type validation), optional cover letter, and privacy acknowledgement. Do not request unnecessary sensitive data.
- Applications must be sent/stored through a genuinely configured secure backend/service. Do not implement a fake submission success. If backend/email delivery is not configured, explicitly flag the blocker before launch.
- Protect CV uploads, restrict access, use secure transport, anti-spam/rate limits, retention rules, privacy notice and appropriate UK GDPR practices. No discriminatory hiring restrictions or gender exclusions in job advertisements.
- Make vacancies and salary bands configurable without hard-coded UI rebuilds where feasible.

## 9. CONTACT AND AUTHENTIC WHATSAPP BUTTON
- Show verified company email **ho.studioteam@gmail.com** and phone **+44 7393 667807**.
- Add an **authentic WhatsApp-branded green circular floating button** fixed at **bottom-right** across the site, with a clear accessible label, visible keyboard focus, sufficient touch target and mobile safe-area spacing. Avoid overlapping checkout/forms/CTAs.
- The provided phone number is **not yet confirmed to be WhatsApp-enabled**. Use a configuration value `H_AND_O_WHATSAPP_NUMBER` and obtain the owner's confirmation before enabling the link. **Never use another company's WhatsApp number or invent one.**
- Once confirmed, use official `https://wa.me/<international_digits_without_plus>` and optionally a URL-encoded enquiry message; use safe external-link attributes. If unconfirmed, do not ship a misleading functional WhatsApp destination.
- Contact/consultation form requires real validation, spam protection, a configured delivery endpoint, privacy messaging, and tested success/error states.

## 10. DESIGN, COPY, SEO AND ACCESSIBILITY
- Premium technology consultancy aesthetic; sophisticated navy/cyan palette, strong hierarchy, calm cinematic movement, clean whitespace, readable HTML text over footage, and responsive zigzag composition.
- Avoid baked-in video text, job salaries, buttons, navigation or marketing copy; use accessible HTML/CSS layers so text stays sharp and editable.
- UK English copy; do not claim certifications, awards, client partnerships, location, or services that are not evidenced/approved.
- Responsive semantic navigation, keyboard support, visible focus, alt text, labelled forms, contrast, sensible motion controls and accessible status/error messages.
- Unique page titles/meta descriptions, canonical URLs once domain is known, logical headings, Open Graph, sitemap/robots where appropriate, structured data only for factual verified entities and genuine job listings. Confirm required job posting properties before adding JobPosting schema.
- Performance: lazy-load offscreen sequence assets, responsive images, prevent layout shifts, defer noncritical scripts, and maintain stable scrolling under low-memory mobile conditions.

## 11. IMPLEMENTATION / FILE ORGANISATION
- Inspect actual framework and package versions before selecting implementation details. Prefer reuse over unnecessary rewrites.
- Keep each sequence's approved trim policy in one explicit typed config or manifest, e.g. `VIDEO_01 15s`, `VIDEO_02 10s`, `VIDEO_03 15s`, `VIDEO_04 10s`; derive frame lists and scrub lengths from validated manifests, not duplicate magic numbers.
- Separate asset ingestion, frame extraction, frame manifest generation, scroll engine, UI sections, and site content configuration.
- Do not modify original source video files; create derived assets in a clearly versioned directory.
- Log extraction failures and inconsistent durations; stop for approval on missing or questionable assets.
- Keep generated debug reports out of public bundles and production pages.

## 12. MANDATORY ACCEPTANCE TESTS
1. Four and only four intended cinematic sequences in correct order.
2. VIDEO_01 uses its complete supplied valid source, nominally 15s.
3. VIDEO_02 uses **ONLY [0,10) seconds**; no frame from >=10s in output assets or website.
4. VIDEO_03 uses its complete supplied valid source, nominally 15s.
5. VIDEO_04 uses **ONLY [0,10) seconds**; no frame from >=10s in output assets or website.
6. Timestamp/frame manifests checked; actual duration/FPS verified; no assumed frame counts.
7. Full-screen hero responsive and readable, important visual subjects not cut off.
8. Three subsequent sections zigzag **right / left / right** on desktop and stack appropriately on mobile.
9. All sequences pin around safe viewport centre, never disappear beneath sticky header, scrub forwards/backwards, and release after final approved frame.
10. **ZERO** public `CH`, `FRAME X/Y`, FPS, progress percentage or technical debug overlays.
11. Approved logo consistent where naturally used; no duplicate decorative hero logo.
12. No women in produced visual assets; recruitment wording remains nondiscriminatory.
13. Desktop and mobile **Apply Now** buttons work; both roles and exact salary ranges displayed.
14. Role-specific application form works securely end-to-end or launch is blocked with a clear report.
15. WhatsApp icon is genuine, fixed bottom-right, and linked only after the owner's WhatsApp number confirmation.
16. Email, phone, enquiry form, navigation, responsive layouts, accessibility, and reduced-motion fallback tested.
17. No invented addresses, testimonials, credentials, customers, or fake submission states.
18. Test mobile widths ~320/375/390/430px, tablet, desktop, touch swipes, reverse scrolling, and browser resizing.

## 13. REQUIRED REPORT BEFORE IMPLEMENTATION
Provide an audit report containing: actual four uploaded video filenames and metadata; logo/source asset status; exact trim plan and expected timestamp windows; planned frame-extraction approach; page map; careers/form backend decision; WhatsApp-number verification blocker; file/component changes; technical risks; and test plan. **Wait for owner approval before implementing.**

## 14. FINAL DELIVERY AFTER APPROVAL
Provide a concise change log, per-video manifest, screenshots or visual QA evidence where possible, tested page list, proof of 10-second exclusions for VIDEO_02/04, scroll/pinning test results, application submission test status, and outstanding launch blockers. Never claim completion without verifying actual behavior.

---

**OWNER'S FINAL PRIORITY:** Use all four supplied 15-second source clips, but show only the **FIRST 10 SECONDS** of **VIDEO_02 and VIDEO_04**. VIDEO_01 and VIDEO_03 may use their **FULL 15 SECONDS**. All other established cinematic UX, branding, mobile scroll, no-debug-label, WhatsApp, male-only visual casting, and recruitment requirements remain mandatory.
