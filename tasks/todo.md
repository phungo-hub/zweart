# ZWEArt Website Copy Rewrite - Pitch Deck Alignment

## Objective
Rewrite all website copy to match pitch deck positioning: "subcultural + ethical + OMO platform" serving Canada-wide, connecting students and artists.

## Key Messaging Pillars (from Pitch Deck)
1. **Integrated OMO Platform** - Online-Merge-Offline for art learning + subcultural enrichment
2. **Ethical Teaching** - Reduce cultural appropriation, ensure proper credit, protect cultural heritage/IP
3. **Canada-Wide Reach** - Connecting students and artists across Canada via hybrid classes
4. **Virtual Exhibitions** - Showcase student + artist work to wider audience
5. **Community + Mentorship** - Culturally aware community, peer support, knowledge exchange
6. **Dual Audience** - Students/parents (immigrant, second-gen, arts-curious children) AND artists seeking paid teaching/exposure

## Verified Proof Points
- Market survey: 559 respondents, 43.5% agreement for more art activities outside school
- Keep existing stats (500+ students, 5 years, 4.9 rating) as placeholders until verified
- Keep testimonials as placeholders

## Terminology Standards
- "Online-Merge-Offline (OMO)" - not "Online-Merged-Offline"
- "subcultural arts" - lowercase
- "ethical practice" / "proper credit"
- "trial class" - NOT "free trial"

---

## Phase 1: Home Page Components

### 1.1 Hero Section
- [x] **File:** `components/sections/Hero.tsx`
- **Current:** "Unlock Your Creative Potential" (generic)
- **New messaging:**
  - Headline: Position as Canada-wide OMO platform for subcultural arts
  - Subtitle: Ethical teaching, cultural enrichment, hybrid learning
  - Update "Toronto-based" → Canada-wide reach
  - Change "free trial class" → "trial class"

### 1.2 ProofStrip
- [x] **File:** `components/sections/ProofStrip.tsx`
- **Updates:**
  - Keep current metrics (placeholders)
  - Update quick testimonials to reflect subcultural/ethical angle
  - Consider adding survey stat (43.5% want more art outside school)

### 1.3 ProgramsOverview
- [x] **File:** `components/sections/ProgramsOverview.tsx`
- **Updates:**
  - Add subcultural arts emphasis to program descriptions
  - Mention cultural heritage, ethical teaching, proper credit
  - Highlight OMO flexibility consistently

### 1.4 OMOMethod Section
- [x] **File:** `components/sections/OMOMethod.tsx`
- **Updates:**
  - Expand benefits to include cultural enrichment angle
  - Add virtual exhibitions mention
  - Emphasize accessibility regardless of geography
  - Fix terminology: "Online-Merge-Offline (OMO)"

### 1.5 HowItWorks
- [x] **File:** `components/sections/HowItWorks.tsx`
- **Updates:**
  - Change "free trial" → "trial class"
  - Update step 4 to mention virtual exhibitions/gallery

### 1.6 Gallery
- [x] **File:** `components/sections/Gallery.tsx`
- **Updates:**
  - Update section title/subtitle to reflect virtual exhibition concept
  - Emphasize student + artist work showcase

### 1.7 Testimonials
- [x] **File:** `components/sections/Testimonials.tsx`
- **Updates:**
  - Keep as placeholders
  - Update wording to reflect subcultural/ethical angle
  - Ensure testimonials speak to immigrant/second-gen family pain points

### 1.8 FAQ
- [x] **File:** `components/sections/FAQ.tsx`
- **Updates:**
  - Add FAQ about subcultural arts focus
  - Add FAQ about ethical teaching/cultural appropriation prevention
  - Add FAQ about artist teaching opportunities
  - Update OMO FAQ terminology
  - Update "free trial" references

### 1.9 FinalCTA
- [x] **File:** `components/sections/FinalCTA.tsx`
- **Updates:**
  - Update headline to reflect broader mission
  - Change "free trial" → "trial class"
  - Update "Toronto families" → Canada-wide families

---

## Phase 2: Page-Level Updates

### 2.1 About Page
- [x] **File:** `app/about/page.tsx`
- **Current:** Flowery, vague language ("enchanting artistic realms")
- **New messaging:**
  - Clear mission: subcultural arts accessibility, ethical teaching
  - Problem/solution framing from pitch deck
  - Mention: dispersed students, limited expertise, infrastructure gaps
  - Emphasize cultural heritage protection, proper credit
  - Update timeline content for clarity
  - Update meta description

### 2.2 Programs Page
- [x] **File:** `app/programs/page.tsx`
- **Updates:**
  - Add subcultural arts context to each program
  - Emphasize ethical teaching, cultural enrichment
  - Add section for artists who want to teach (new audience)
  - Update meta description

### 2.3 Contact Page
- [x] **File:** `app/contact/page.tsx`
- **Updates:**
  - Update helper text to reflect mission
  - Add option for artists interested in teaching
  - Update program dropdown descriptions

---

## Phase 3: Global Components

### 3.1 Navbar
- [x] **File:** `components/sections/Navbar.tsx`
- **Updates:**
  - Change "Book a trial class" if needed (remove "free")

### 3.2 Footer
- [x] **File:** `components/sections/Footer.tsx`
- **Updates:**
  - Update brand description: Canada-wide, subcultural arts, ethical teaching
  - Update "Toronto-based" reference

### 3.3 Layout Metadata
- [x] **File:** `app/layout.tsx`
- **Updates:**
  - Update site title and description
  - Reflect Canada-wide scope
  - Include key terms: OMO, subcultural arts, ethical

---

## Files to Modify (Summary)

| File | Priority | Key Changes |
|------|----------|-------------|
| `components/sections/Hero.tsx` | High | Headline, subtitle, geography, CTA |
| `components/sections/OMOMethod.tsx` | High | Benefits, terminology, cultural angle |
| `app/about/page.tsx` | High | Full rewrite - mission, story, values |
| `components/sections/FAQ.tsx` | High | Add new FAQs, update terminology |
| `app/programs/page.tsx` | Medium | Subcultural context, artist audience |
| `components/sections/FinalCTA.tsx` | Medium | Headline, geography, CTA |
| `components/sections/ProgramsOverview.tsx` | Medium | Program descriptions |
| `components/sections/Footer.tsx` | Medium | Brand description |
| `app/layout.tsx` | Medium | Meta title/description |
| `components/sections/ProofStrip.tsx` | Low | Testimonial wording |
| `components/sections/HowItWorks.tsx` | Low | Trial class wording |
| `components/sections/Gallery.tsx` | Low | Section title/subtitle |
| `components/sections/Testimonials.tsx` | Low | Minor wording updates |
| `app/contact/page.tsx` | Low | Helper text, dropdown |
| `components/sections/Navbar.tsx` | Low | CTA wording |

---

## Copy Style Guidelines

1. **Replace vague language** with concrete benefits
   - ❌ "Unlock your creative potential"
   - ✅ "Learn subcultural arts ethically, from anywhere in Canada"

2. **Use trust language**
   - Proper credit to cultural sources
   - Protect artistic heritage
   - Ethically taught

3. **Challenge → Solution framing**
   - Dispersed students → OMO hybrid access
   - Cultural appropriation concerns → Ethical teaching practices
   - Limited expertise → Artist mentors with cultural knowledge
   - Low awareness → Community platform + virtual exhibitions

4. **Keep it skimmable**
   - Short sentences
   - Bullet points where possible
   - Bold key terms

5. **Consistent terminology**
   - "Online-Merge-Offline (OMO)"
   - "subcultural arts"
   - "ethical practice"
   - "proper credit"
   - "trial class" (not "free trial")

---

## Review Section

### Summary of Changes
Rewrote all website copy to align with pitch deck positioning: "subcultural + ethical + OMO platform" serving Canada-wide.

**Key messaging changes:**
- Hero: "Unlock Your Creative Potential" → "Subcultural Arts, Ethically Taught"
- Geography: "Toronto-based" → "Canada-wide" / "across Canada"
- OMO terminology: Fixed to "Online-Merge-Offline (OMO)"
- Removed all "free trial" → replaced with "trial class"
- Added ethical teaching, proper credit, protected heritage language throughout
- Added dual audience messaging (students/families + artists)
- Incorporated survey stat (43.5% of 559 respondents want more art outside school) in About page
- FAQ expanded from 8 to 10 questions (added subcultural arts, ethical teaching, artist opportunities, virtual exhibitions)

### Files Modified (15 total)
1. `components/sections/Hero.tsx` - Headline, subtitle, Canada-wide scope
2. `components/sections/OMOMethod.tsx` - Benefits, terminology, cultural enrichment, steps renamed
3. `app/about/page.tsx` - Full rewrite: Challenge/Solution framing, Who We Serve (dual audience), timeline, quote
4. `components/sections/FAQ.tsx` - 10 FAQs including subcultural, ethical, artist teaching, virtual exhibitions
5. `app/programs/page.tsx` - Meta description, hero subtitle with subcultural/ethical framing
6. `components/sections/FinalCTA.tsx` - Canada-wide families, trial class (not free)
7. `components/sections/ProgramsOverview.tsx` - Programs renamed with subcultural focus, section header
8. `components/sections/Footer.tsx` - Canada OMO platform description
9. `app/layout.tsx` - Site title and meta description
10. `components/sections/ProofStrip.tsx` - Testimonials updated with cultural/ethical angle
11. `components/sections/HowItWorks.tsx` - Steps updated: trial class, Learn with Credit, Exhibit Your Work
12. `components/sections/Gallery.tsx` - Renamed to "Virtual Exhibition"
13. `components/sections/Testimonials.tsx` - Updated with cultural heritage, OMO flexibility, ethical approach stories
14. `app/contact/page.tsx` - Helper text, added "artist interested in teaching" dropdown option
15. `components/sections/Navbar.tsx` - Already had "Book a trial class" (no change needed)

### Notes
- Existing stats (500+ students, 5 years, 4.9 rating) kept as placeholders per user request
- Testimonials updated to reflect subcultural/ethical messaging but remain as placeholders
- No fake stats introduced; only verified survey stat (43.5%) used
- Contact form now supports both student families and artists interested in teaching

---

**Status:** ✅ Complete

---

# Fix #1: Remove "Verified Artists" Claims

## Problem
The phrase "verified artists" appears throughout the site but is an unsubstantiated claim. Need to replace with accurate, deck-aligned language.

## Replacement Decision
**Selected: "artist mentors"**

Rationale:
- Aligns with pitch deck's "Community + Mentorship" pillar
- Concise (2 words)
- Conveys teaching relationship without verification claims
- Sounds trustworthy without overclaiming

## Files to Modify (6 user-facing + 1 documentation)

### User-Facing Copy
- [x] `components/sections/OMOMethod.tsx:9`
  - **Current:** "Learn subcultural arts from verified artists who ensure proper credit to cultural sources"
  - **New:** "Learn subcultural arts from artist mentors who ensure proper credit to cultural sources"

- [x] `components/sections/HowItWorks.tsx:25`
  - **Current:** "Study with verified artists who teach proper credit to cultural sources and heritage."
  - **New:** "Study with artist mentors who teach proper credit to cultural sources and heritage."

- [x] `components/sections/ProgramsOverview.tsx:14`
  - **Current:** "Learn traditional techniques from verified cultural artists"
  - **New:** "Learn traditional techniques from experienced subcultural artist mentors"

- [x] `components/sections/FAQ.tsx:18`
  - **Current:** "Every artist on our platform is verified for cultural knowledge..."
  - **New:** "Our artist mentors bring deep cultural knowledge..." (reword to avoid verification claim)

- [x] `components/sections/Testimonials.tsx:25`
  - **Current:** "...my kids learn from verified artists and showcase work..."
  - **New:** "...my kids learn from artist mentors and showcase work..."

- [x] `app/programs/page.tsx:81`
  - **Current:** "verified artists who ensure proper credit to cultural sources"
  - **New:** "artist mentors who ensure proper credit to cultural sources"

### Documentation (tasks/todo.md)
- [x] Line 185: Update "Verified artists with cultural knowledge" → "Artist mentors with cultural knowledge"

## Review Section

### Summary of Changes
Replaced all "verified artist(s)" claims with "artist mentors" across 6 files.

### Strings Changed
| File | Before | After |
|------|--------|-------|
| `OMOMethod.tsx` | "from verified artists who" | "from artist mentors who" |
| `HowItWorks.tsx` | "with verified artists who" | "with artist mentors who" |
| `ProgramsOverview.tsx` | "from verified cultural artists" | "from subcultural artist mentors" |
| `FAQ.tsx` | "Every artist...is verified for" | "Our artist mentors bring deep" |
| `Testimonials.tsx` | "from verified artists and" | "from artist mentors and" |
| `programs/page.tsx` | "verified artists who ensure" | "artist mentors who ensure" |

---

**Status:** ✅ Complete

---

# Fix #2: Programs Page Copy - Pitch Deck Alignment

## Problem
The Programs page (`app/programs/page.tsx`) has generic art-school curriculum copy. Need to rewrite to reflect pitch deck differentiators: subcultural enrichment, cultural context, ethical practice, community/mentorship, and virtual exhibitions.

## Current Issues
1. **Program descriptions** are generic (e.g., "playful introduction to the world of art")
2. **"whatLearn" bullets** are entirely technical skills with no cultural context
3. **No "What makes our programs different"** block to highlight differentiators
4. **"How to Choose" section** is generic age/interest-based, missing ethical/cultural angle

## Plan

### 2.1 Update Program Descriptions
- [x] **Kids Art (Ages 6-10)**
  - Current: "A playful introduction to the world of art..."
  - New: Emphasize subcultural foundations, cultural heritage connection, ethical practice

- [x] **Teen Studio (Ages 11-17)**
  - Current: "For serious young artists ready to develop advanced skills..."
  - New: Emphasize portfolio with culturally credited work, ethical practice, virtual exhibitions

- [x] **Digital Art & Animation**
  - Current: "Step into the digital realm..."
  - New: Emphasize digital tools for subcultural expression, cultural storytelling

### 2.2 Rewrite "whatLearn" Bullets
Each program's bullets should cover (in order):
1. Cultural context + lineage-informed learning
2. Ethical practice + proper credit
3. Mentorship/community or exhibitions
4. Technical skills (concise, 1-2 bullets max)

- [x] Kids Art whatLearn (5 bullets → 4-5 with cultural focus)
- [x] Teen Studio whatLearn (5 bullets → 4-5 with cultural focus)
- [x] Digital Art whatLearn (5 bullets → 4-5 with cultural focus)

### 2.3 Update "whoFor" Descriptions
- [x] Add immigrant/second-gen family angle per pitch deck target personas
- [x] Mention cultural connection/heritage interest

### 2.4 Add "What Makes Our Programs Different" Section
- [x] Create new section between programs and "How to Choose"
- [x] Include 3-4 differentiators:
  - Subcultural arts focus (not generic art school)
  - Ethical teaching with proper credit
  - Artist mentors with cultural knowledge
  - Virtual exhibitions for student/artist work

### 2.5 Update "How to Choose" Section
- [x] Add subcultural/ethical angle to each program recommendation
- [x] Keep age guidance but add cultural interest angle

## Files to Modify
| File | Changes |
|------|---------|
| `app/programs/page.tsx` | All above changes |

## Copy Style Guidelines (from main rewrite)
- Replace vague language with concrete benefits
- Use trust language: proper credit, protect heritage, ethically taught
- Keep it skimmable: short sentences, bullet points
- Consistent terminology: "subcultural arts", "artist mentors", "proper credit"

---

## Review Section

### Summary of Changes
Rewrote Programs page copy to align with pitch deck differentiators.

**Key changes:**
1. **Program descriptions** - Replaced generic art-school language with subcultural/ethical focus
2. **whatLearn bullets** - Now follow structure: cultural context → ethical practice → mentorship/exhibitions → technical skills
3. **whoFor descriptions** - Added immigrant/multicultural family angle per pitch deck personas
4. **New section** - Added "What Makes Our Programs Different" with 4 differentiators
5. **How to Choose** - Updated recommendations with cultural connection angle

### Copy Examples

| Section | Before | After |
|---------|--------|-------|
| Kids description | "A playful introduction to the world of art" | "Subcultural art foundations taught ethically" |
| Kids whatLearn | "Drawing fundamentals: shapes, lines" | "Cultural context: learn the stories and origins behind each art form" |
| Kids whoFor | "Children ages 6-10 who are curious about art" | "Children ages 6-10 curious about cultural art traditions—especially those from immigrant or multicultural families" |
| How to Choose | "Choose if your child is new to art, loves hands-on activities" | "Best for children new to art who want to explore cultural traditions and build foundations with proper credit to heritage" |

### New Section Added
"What Makes Our Programs Different" with 4 cards:
- Subcultural Arts Focus
- Ethical Teaching
- Artist Mentors
- Virtual Exhibitions

---

**Status:** ✅ Complete

---

# Fix #3: Stats Counter SSR/Accessibility Fix

## Problem
The `AnimatedCounter` component in `ProofStrip.tsx` initializes state to `0`, causing:
1. SSR renders "0" / "0.0" instead of final values
2. "0 flash" on initial page load before animation
3. SEO/accessibility issues (screen readers and crawlers see "0")
4. If JS fails, users see "0" forever

## Current Code Issue
```tsx
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);  // <-- SSR renders 0
  // ...
}
```

## Solution Approach
Use a two-layer approach:
1. **Static layer** (always visible, accessible): Shows final value ("500+", "5", "4.9")
2. **Animated layer** (visual only, aria-hidden): Overlays and counts up, then removed/hidden

This ensures:
- SSR shows final values immediately
- No hydration mismatch (both layers render same on server/client)
- Animation still works on client
- Screen readers always read the final value
- If JS fails, static layer is visible

## Plan

### 3.1 Update AnimatedCounter Component
- [x] Add `finalDisplay` prop (string) for the formatted final value
- [x] Render static final value as the base (accessible text)
- [x] Add animated overlay that:
  - Starts with `opacity: 0` or `visibility: hidden`
  - Shows and animates only when `isInView` and JS is running
  - Is `aria-hidden="true"`
- [x] Use `position: absolute` for overlay to not affect layout
- [x] Initialize `count` to `value` (not 0) to avoid hydration mismatch
- [x] Track `hasAnimated` state to show/hide layers appropriately

### 3.2 Update Metrics Data
- [x] Add `display` string to each metric: "500+", "5", "4.9"
- [x] Pass this to AnimatedCounter as the accessible/static text

### 3.3 Add Accessibility Attributes
- [x] Static value: `aria-label="{value} {label}"` on container
- [x] Animated value: `aria-hidden="true"`

### 3.4 Test Scenarios
- [x] SSR output shows "500+", "5", "4.9" (view source)
- [x] Animation still runs on scroll into view
- [x] No hydration warnings in console
- [x] Screen reader reads final values

## Files to Modify

| File | Changes |
|------|---------|
| `components/sections/ProofStrip.tsx` | Update AnimatedCounter, update metrics array, add aria attributes |

## Implementation Notes
- Keep changes localized to ProofStrip.tsx only
- No new dependencies
- Minimal DOM changes (just add wrapper/overlay structure)
- Preserve existing styling

---

**Status:** ✅ Completed

## Current Session Plan
- [x] Re-read `components/sections/ProofStrip.tsx` to confirm current SSR/accessibility issues in `AnimatedCounter`.
- [x] Restructure the counter with a static accessible layer and aria-hidden animated overlay to remove hydration/flash problems.
- [x] Ensure metrics data pass formatted display strings and aria labels consistently to the counter.
- [x] Smoke-test ProofStrip behavior (SSR output shows final values, no hydration warnings, animation works, static fallback visible without JS).

## Review - Fix #3
- Updated `components/sections/ProofStrip.tsx` to render static final values for SSR/a11y and overlay an aria-hidden animated counter that starts after the section enters view.
- Animation now starts from 0 without exposing a "0" flash; static values remain visible as fallback if JS fails.
- Metrics keep formatted display strings and container aria-labels to ensure screen readers announce final values.

---

# Fix #4: About Page Challenge List Bullet Formatting

## Plan
- [x] Inspect the "The Challenge We Solve" list in `app/about/page.tsx` to confirm source of the doubled bullet artifacts.
- [x] Apply minimal change (remove default list-style or duplicate bullet character) so bullets render cleanly while keeping wording/structure.
- [x] Re-check the About page lists to ensure accessibility with semantic `<ul><li>` and no unintended layout changes.

## Review - Fix #4
- Updated `app/about/page.tsx` challenge list to remove default list markers (`list-none`) so the custom bullet character no longer renders doubled while preserving semantics.

---

# Fix #5: FAQ Answers Server-Rendered & Accessible

## Plan
- [x] Locate FAQ accordion implementation and confirm why answers are not in initial HTML (conditional render on open).
- [x] Update `components/sections/FAQ.tsx` so answers are always in the DOM (SSR) but visually collapsed; keep accordion UX with semantic buttons and proper `aria-expanded`/`aria-controls`/`id`.
- [x] Ensure collapsed answers remain keyboard reachable when expanded and remain SEO-visible; avoid new dependencies and minimize code changes.
- [x] Re-check FAQ rendering for first-load HTML to confirm answers exist and accessibility attributes are correct.

## Review - Fix #5
- `components/sections/FAQ.tsx` now renders all answers server-side and keeps them in the DOM, collapsing via height/opacity animation; accordion buttons include `type="button"`, `aria-expanded`, and `aria-controls`, with panels labeled via `role="region"`/`aria-labelledby`.
- Default state opens the first FAQ for quicker scan; content remains accessible and SEO-visible even when collapsed.

---

# Fix #6: Hero Headline Update

## Plan
- [x] Update hero headline text in `components/sections/Hero.tsx` from "Subcultural Arts, Ethically Taught" to "Learn it. Share it. Pass it on." without other layout/style changes.
- [x] Re-verify hero renders correctly with new copy and underline treatment remains appropriate.

## Review - Fix #6
- Updated `components/sections/Hero.tsx` headline copy to "Learn it. Share it. Pass it on." while keeping the existing underline treatment on the middle phrase; no layout or style changes otherwise.

---

# Fix #7: Hero Underline Overlap

## Plan
- [x] Adjust the underline decoration in `components/sections/Hero.tsx` so it no longer overlaps text on the following line.
- [x] Keep layout and styling intact aside from spacing/position tweak to the underline.

## Review - Fix #7
- Raised underline position and reduced stroke height/weight in `components/sections/Hero.tsx` so the animated line no longer touches the next line; layout and styling otherwise unchanged.

---

# Fix #8: Animated Counter Overlap

## Plan
- [x] Adjust `AnimatedCounter` in `components/sections/ProofStrip.tsx` so the animated overlay does not visually overlap with the static final value during animation.
- [x] Keep SSR/accessible static text intact and ensure aria-hidden overlay remains visual-only; no layout/styling changes beyond resolving the overlap.
- [x] Verify counters animate cleanly with only one visible layer at a time and still render final values on SSR/JS-off.

## Review - Fix #8
- Updated `components/sections/ProofStrip.tsx` to hide the static value visually while the animated overlay is shown (keeping it accessible), preventing overlapping numbers during animation; overlay remains aria-hidden and pointer-events-none.

---

# Fix #9: Challenge List Visual Cleanup

## Plan
- [x] Revisit the Challenge list in `app/about/page.tsx` to remove the inline bullet character and rely on a clean semantic list style.
- [x] Switch to a single list style (`list-disc` + padding) with left alignment to avoid centered awkward spacing while keeping accent color where appropriate.
- [x] Verify the list renders cleanly (no double markers, no awkward centering) and remains accessible.

## Review - Fix #9
- `app/about/page.tsx` Challenge list now uses a standard left-aligned `list-disc` with proper spacing; removed custom inline bullet glyphs to prevent double markers and awkward centering while keeping semantic `<ul><li>`.

---

# Fix #10: Challenge List Styling (Marker Color + Indent)

## Plan
- [x] Update `app/about/page.tsx` Challenge list to restore accent-colored bullets and adjust indentation for cleaner alignment.
- [x] Keep semantic `<ul><li>` and existing spacing; only tweak list utilities (e.g., marker color and padding) to improve appearance without layout changes elsewhere.
- [x] Verify bullets render orange, alignment looks clean, and text remains accessible.

## Review - Fix #10
- `app/about/page.tsx` Challenge list now uses accent-colored markers (`marker:text-accent`) with added padding for cleaner indentation; semantics and spacing preserved.
