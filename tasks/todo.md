# ZWeArt Marketing Site - Implementation Plan

## Project Overview
Build a modern, conversion-focused marketing site for ZWeArt using Next.js (App Router) + TypeScript + Tailwind.

**Pages:** Home (`/`), Programs (`/programs`), Contact (`/contact`)
**Primary CTA:** "Book a trial class"
**Secondary CTA:** "View programs"

---

## Phase 1: Project Setup

- [x] Initialize Next.js project with TypeScript and App Router
- [x] Install and configure Tailwind CSS
- [x] Set up next/font (Sora for display + Inter for body)
- [x] Create CSS variables in `app/globals.css` (bg/fg/muted/border/accent)
- [x] Configure 8pt spacing rhythm and design tokens
- [x] Add metadata in `app/layout.tsx` (title/description)
- [x] Create `.gitignore` file
- [x] Create `README.md` with run instructions (npm)

## Phase 2: Base Components

- [x] Create base layout structure (`app/layout.tsx`)
- [x] Create `components/ui/Button.tsx` (primary/secondary variants)
- [x] Create `components/ui/Container.tsx` (max-width wrapper)
- [x] Create `components/ui/SectionWrapper.tsx` (consistent section spacing)

## Phase 3: Navigation & Footer

- [x] Create `components/sections/Navbar.tsx` (sticky, logo, links, CTA, mobile menu)
- [x] Create `components/sections/Footer.tsx` (contact email, social placeholders)

## Phase 4: Home Page Sections

- [x] Create `components/sections/Hero.tsx` (H1, subhead, 2 CTAs, Toronto-based + age range)
- [x] Create `components/sections/ProofStrip.tsx` (3 testimonial placeholders + metrics)
- [x] Create `components/sections/ProgramsOverview.tsx` (3 cards: Kids, Teens, Digital Art)
- [x] Create `components/sections/OMOMethod.tsx` (3 bullets + 3-step visual)
- [x] Create `components/sections/HowItWorks.tsx` (4 steps)
- [x] Create `components/sections/Gallery.tsx` (9 image placeholders)
- [x] Create `components/sections/Testimonials.tsx` (3 detailed testimonials)
- [x] Create `components/sections/FAQ.tsx` (8 questions, accordion style)
- [x] Create `components/sections/FinalCTA.tsx` (short pitch + button + contact link)

## Phase 5: Home Page Assembly

- [x] Build `app/page.tsx` assembling all home sections in order

## Phase 6: Programs Page

- [x] Create `app/programs/page.tsx` with:
  - [x] Clear intro + CTA
  - [x] 3 program sections (Kids 6-10, Teens 11-17, Digital Art/Animation)
  - [x] Each with: who it's for, what they'll learn, class format, schedule/pricing placeholders, CTA
  - [x] "How to choose a program" guidance box

## Phase 7: Contact Page

- [x] Create `app/contact/page.tsx` with:
  - [x] Form fields: name, email, child age (optional), program interest select, message
  - [x] Client-side validation
  - [x] Success state handling
- [x] Create `app/api/contact/route.ts` (accept JSON, return `{ ok: true }`)

## Phase 8: Final Polish

- [x] Build passes successfully
- [x] Accessible focus states implemented
- [x] All links and CTAs work correctly
- [x] Smooth scroll enabled via CSS

---

## Design Tokens (Implemented)

```css
/* Colors */
--bg: #ffffff
--fg: #0f172a
--muted: #64748b
--border: #e2e8f0
--accent: #8B5CF6 (purple)
--accent-hover: #7C3AED

/* Fonts: Sora (display) + Inter (body) via next/font */
/* Spacing: 8pt rhythm via Tailwind */
/* Radius: 16-24px */
/* Shadows: subtle */
```

---

## File Structure (Final)

```
zweart/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── globals.css
│   ├── programs/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── SectionWrapper.tsx
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ProofStrip.tsx
│       ├── ProgramsOverview.tsx
│       ├── OMOMethod.tsx
│       ├── HowItWorks.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── README.md
├── CLAUDE.md
└── tasks/
    └── todo.md
```

---

## Review Section

### Summary of Changes
Built a complete marketing site for ZWeArt with 3 pages:

1. **Home Page** - 11 sections including Hero, Proof Strip, Programs Overview, OMO Method, How It Works, Gallery, Testimonials, FAQ, and Final CTA
2. **Programs Page** - Detailed program information for Kids Art (6-10), Teen Studio (11-17), and Digital Art/Animation, plus a "How to Choose" guidance section
3. **Contact Page** - Form with client-side validation and success state, API route at `/api/contact`

### Technical Decisions
- **Fonts:** Sora (display/headings) + Inter (body) loaded via `next/font/google`
- **Colors:** Purple accent (#8B5CF6) for creative/artistic feel
- **Components:** Minimal, reusable components (Button, Container, SectionWrapper)
- **No UI library:** Built with pure Tailwind CSS for minimal dependencies
- **Mobile-first:** Responsive design with mobile menu in navbar

### What's Working
- All pages build successfully
- Forms have client-side validation
- API route accepts POST and returns `{ ok: true }`
- Smooth scroll enabled for anchor links
- Focus states for accessibility
- Mobile-responsive layout

### Next Steps (for production)
- Replace placeholder images in Gallery with actual student artwork
- Update testimonials with real customer reviews
- Configure actual email sending in API route
- Add real pricing/scheduling information
- Deploy to Vercel or similar

---

**Status:** ✅ Complete
