# Blueprint Website v2 - Technical Handover Documentation

## Project Overview

**Project Name:** Blueprint Website v2  
**Tech Stack:** React 19, TypeScript, Vite 7, TailwindCSS 3  
**Repository:** https://github.com/SFU-Blueprint/Blueprint-Website-v2  
**Node Version:** 22.x  
**Package Manager:** npm 10

**Project Stats:**
- 179+ merged PRs
- 15+ contributors
- 3 case studies published
- 7 major pages
- Built from scratch (Nov 2023 - Present)

---

## Project History

### Major Milestones

**November 2023 - Project Inception**
- Initial repository setup with React and TailwindCSS
- Core file structure and routing established

**December 2023 - January 2024 - Foundation Pages**
- Homepage hero and core sections
- Navigation bar and footer components
- About page team sections
- For Students page layout

**February - March 2024 - Content Expansion**
- Projects page with dynamic routing (`/projects/:slug`)
- Case study system architecture
- Non-profits page with partner information
- Alumni page implementation

**April 2024 - Case Studies Launch**
- Mosaic AI Chatbot case study
- Case study layout components with custom image pile formats
- Testimonial system

**May 2024 - Interactive Features**
- Homepage video teaser and impact section
- Rive animations integration for About page
- Camera haptics for interactive elements
- Responsive design improvements

**February 2026 - Technical Migration**
- **CRA to Vite 7 migration** - 15% build time improvement
- **TypeScript adoption** - Type-safe development standards
- React 19 upgrade
- Performance optimizations

**March - June 2026 - Final Features**
- Our Community Bikes case study (Feb-Nov 2024 project)
- Reel Youth case study (Aug 2024-current project)
- Join Us page redesign (PR #135)
- Sponsor Us page (PR #136)
- MemberCard hover state fixes
- Final polish and accessibility improvements

---

## Getting Started

### Prerequisites

- **Node.js:** Version 22.x (Required)
- **npm:** Version 10 (Included with Node 22)
- **Git:** For version control

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SFU-Blueprint/Blueprint-Website-v2.git
   cd Blueprint-Website-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Project Structure

```
Blueprint-Website-v2/
├── public/                      # Static assets
│   └── images/                  # Image assets organized by section
│       ├── projects/            # Project case study images
│       ├── sponsor/             # Sponsor page images
│       └── student/             # Student/join us page images
├── src/
│   ├── components/              # React components
│   │   ├── case-study/          # Case study specific components
│   │   ├── footer/              # Footer components
│   │   ├── layout/              # Layout components
│   │   └── shared/              # Shared/reusable components
│   ├── constants/               # Static data and configurations
│   │   └── Team/                # Team member data by project
│   ├── pages/                   # Page-level components (routes)
│   ├── App.tsx                  # Main app component with routing
│   └── main.tsx                 # App entry point
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # TailwindCSS configuration
└── vite.config.ts              # Vite build configuration
```

---

## Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | Core React library |
| `react-dom` | ^19.0.0 | React DOM rendering |
| `react-router-dom` | ^6.20.0 | Client-side routing |
| `tailwindcss` | ^3.3.5 | Utility-first CSS framework |
| `@rive-app/react-webgl2` | ^4.27.3 | Rive animations |
| `react-i18next` | ^14.0.3 | Internationalization |
| `i18next` | ^23.8.2 | i18n framework |
| `react-lazy-load-image-component` | ^1.6.0 | Lazy image loading |
| `web-haptics` | ^0.0.6 | Haptic feedback |
| `tailwind-scrollbar-hide` | ^4.0.0 | Scrollbar utilities |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^7.0.0 | Build tool and dev server |
| `@vitejs/plugin-react` | ^5.0.0 | React plugin for Vite |
| `typescript` | ^5.0.0 | TypeScript compiler |
| `@types/react` | ^19.0.0 | React TypeScript definitions |
| `@types/react-dom` | ^19.0.0 | React DOM TypeScript definitions |
| `daisyui` | ^4.6.0 | TailwindCSS component library |
| `vite-plugin-svgr` | ^4.5.0 | SVG as React components |

---

## Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Landing page with dark nav |
| `/about` | `AboutPage` | About Blueprint |
| `/alumni` | `AlumniPage` | Alumni showcase |
| `/projectspage` | `ProjectsPage` | All projects overview |
| `/projects/:slug` | `IndividualProject` | Individual project case studies |
| `/students` | `StudentsPage` | Student information |
| `/join-us` | `StudentsPage` | Join us landing (same as students) |
| `/nonprofits` | `NonprofitsPage` | Non-profit partnerships |
| `/sponsor-us` | `SponsorUsPage` | Sponsorship opportunities |

---

## Current Status (June 2026)

**Project Status:** Nearing completion, expected launch next week

### Recently Completed (June 2026)

**Join Us Page Redesign (PR #135)**
- Complete overhaul of student recruitment page
- Figma-aligned design with responsive layouts
- Added `/join-us` route alongside `/students`
- Improved role cards and application process sections

**Sponsor Us Page (PR #136)**
- New sponsorship landing page for corporate partnerships
- Features funding opportunity cards
- MOSAIC BC testimonial integration
- Email contact integration

**Reel Youth Case Study (PR #137)**
- Third published case study (Aug 2024 - current project)
- Custom polaroid image layout
- Fixed MemberCard hover state bug
- Dynamic team member display

**Technical Documentation (PR #138)**
- Comprehensive handover documentation
- Dependency management guide
- Quick setup guide for new developers

---

## Key Components

### Navigation (`NavBar`)
- Dynamic dark/light mode based on route
- Dark nav only on homepage (`/`)
- Responsive design for mobile/tablet/desktop

### Case Studies (`CaseStudyLayout.tsx`)
- Reusable layout for project case studies
- Supports custom image pile formats via `imgPileFormat` function
- Polaroid-style image displays
- Team member cards with hover effects

**Published Case Studies:**
1. **Our Community Bikes** (`/projects/our-community-bikes`) - Volunteer hour tracking system
2. **Reel Youth** (`/projects/reel-youth`) - Youth media program platform
3. **Mosaic** (`/projects/mosaic`) - AI chatbot for newcomer services

### Member Cards (`MemberCard.tsx`)
- Display team member information
- Hover effects with rotation and background color change
- Conditional LinkedIn linking
- Responsive sizing

---

## Styling & Design System

### TailwindCSS Configuration
Custom colors defined in `tailwind.config.js`:
- `bp-blue`: Primary brand color
- `bp-hover-blue`: Hover state
- `bp-pressed-blue`: Active state
- `bp-lightest-grey`: Background color
- `bp-accent-very-light-blue`: Accent backgrounds
- `bp-black`: Text color

### Typography
- **Headings:** Poppins font family
- **Special text:** Caveat font family
- Responsive text sizing with mobile/tablet/desktop variants

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

---

## Development Workflow

### Git Workflow
See `CONTRIBUTING.md` for detailed branching strategy and PR workflow.

**Basic workflow:**
1. Create feature branch: `ticket-<id>-description`
2. Make changes and commit
3. Push and create PR on GitHub
4. Merge after approval

---

## Deployment

### Build Process
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Environment Requirements
- Node.js 22.x
- npm 10
- Static file hosting (Netlify, Vercel, etc.)

---

## Testing Checklist

Before deploying:
- [ ] All routes load without errors
- [ ] Images display correctly on all pages
- [ ] Navigation works on mobile/tablet/desktop
- [ ] Case study pages render properly
- [ ] Member cards display with correct hover states
- [ ] Forms/links function correctly
- [ ] Build completes without errors
- [ ] TypeScript compiles without errors

---

## Contact & Resources

- **Repository:** https://github.com/SFU-Blueprint/Blueprint-Website-v2
- **Email:** sfublueprint@gmail.com
- **Tech Lead:** Caron Isaiah McPherson(Noracc)

---

## Maintenance Notes

### Adding New Case Studies
1. Create team data file in `src/constants/Team/[ProjectName].ts`
2. Export team member array with `MemberCardProps` type
3. Add case study entry to `src/constants/caseStudies.tsx`
4. Add project images to `public/images/projects/[project-slug]/`
5. Include at minimum: logo, 2 polaroid images, and solution images
6. Test dynamic route: `/projects/[your-slug]`

### Adding New Routes
1. Create page component in `src/pages/PageName.tsx`
2. Import and add route in `src/App.tsx`
3. Update dark navigation array if needed (`DARK_NAV_ROUTES`)
4. Update this documentation

### Updating Content
- **Team members:** Edit files in `src/constants/Team/` (mix of .js and .ts)
- **Events:** Edit `src/constants/Event.js`
- **Hiring:** Edit `src/constants/Hiring.js`
- **Notifications:** Edit `src/constants/Notification.js`
- **Projects:** Edit `src/constants/projects.ts`

### Updating Dependencies
See `DEPENDENCIES.md` for dependency management

---

**Last Updated:** June 9, 2026  
**Document Version:** 1.1
