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
   - Limited expertise → Verified artists with cultural knowledge
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
