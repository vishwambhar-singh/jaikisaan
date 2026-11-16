# JaiKisaan Solar (JKS) Website — Design Analysis & Technical Specification

> **Source of Truth**: Figma File `XymrxpCh19Teq4xfDSnF6X` (*JKS Website*)  
> **Status**: Phase 1 Design Analysis Complete  
> **Date**: November 2026  
> **Document Purpose**: Architectural roadmap, design token specification, and pixel-accurate implementation guide.

---

## 1. Executive Summary & Aesthetic Architecture

The JaiKisaan Solar digital platform is designed around a **"Cinematic Spatial Editorial"** design system. Rather than a conventional corporate utility layout, the brand presents high-end agricultural and commercial solar engineering through deep sanctuary tones, high-contrast typography, interactive telemetry badges, and regional personalization.

### Core Visual Principles
1. **Canvas & Spatial Rhythm**:
   - Master Desktop Canvas: `1280px`
   - Content Max-Width Container: `1184px`
   - Horizontal Outer Margins: `48px`
   - Grid System: 12-Column Grid with `32px` gutters (3-column card widths = `373.33px`)
2. **Atmospheric Contrast**:
   - High-contrast transitions between light airy editorial sections (`#F9FAF4`, `#FFFFFF`) and deep immersive spatial zones (`#17231D`, `#005733`).
3. **Glassmorphism & Telemetry**:
   - Translucent glass pills, live performance chips, SCADA snapshot widgets with blur backdrops (`backdrop-blur-md`).
4. **Strict Brand Data Grounding**:
   - Primary Phone: `+91 7239992778`
   - Primary Email: `info@jaikisaansolar.com`
   - Executive Leadership: `Sanjeev Kumar — Founder & CEO`
   - Corporate Lineage: Member of the SunScope Group

---

## 2. Complete Page Inventory

The Figma document comprises **8 primary screen frames** across two main pages (`Page 1` and `Components`):

| # | Page / Screen Frame | Figma Node ID | Dimensions (W × H) | Purpose & Key Role |
|---|---|---|---|---|
| 1 | **Page / Home** | `64:88` | `1280 × 11422px` | Primary marketing & conversion flagship; 10 thematic sequential sections |
| 2 | **Page / About Us** | `117:3408` | `1280 × 9375.5px` | Company heritage, Green Hydrogen innovation, leadership & empanelments |
| 3 | **Page / Projects / Desktop** | `117:4310` | `1280 × 5832.25px` | Landmark installations portfolio, GIS footprint summary & segmented filtering |
| 4 | **Page / Projects / Case Study - Vikas** | `117:5258` | `1280 × 8116.75px` | In-depth engineering case study (Cold Storage, 120kW, Jaipur), SCADA telemetry & financial modeling |
| 5 | **City Selector Spec & Foundations** | `117:6169` / `117:2561` | `1280 × 4441.75px` | Interactive regional adaptation modal, city drawer, and localized engineering specs (e.g. Lucknow) |
| 6 | **Page / Contact Us** | `124:8077` | `1280 × 4909.68px` | Multi-channel inquiry desk, 2-column feasibility intake form, regional hub directories & map dispatch |
| 7 | **Page / Blog (Knowledge Base)** | `125:10012` | `1282.86 × 4375.12px` | Technical publications, spotlight article, intelligence briefing newsletter & telemetry pulse |
| 8 | **JaiKisaan / Component Library** | `112:336` | `1280 × 6000px` | Master design system: Foundations, Chrome, Controls, Cards, Patterns |

---

## 3. Section-by-Section Breakdown

### 3.1 Page / Home (`64:88` — 11,422px Height)
1. **Persistent Header (`64:909` / `112:342`)** — `1280 × 80px`:
   - Frosted backdrop navigation bar (`rgba(23, 35, 29, 0.85)` / blur `12px`).
   - Official JaiKisaan Solar Logo mark + wordmark.
   - Navigation links: *Home, About Us, Solutions, Projects, Calculator, Blog, Contact*.
   - City Selector Trigger pill: "📍 Lucknow" dropdown trigger.
   - Action CTAs: Secondary phone pill (`+91 7239992778`) and Primary "Get Free Feasibility" button.
2. **Section 02: Cinematic Spatial Hero (`64:91`)** — `1280 × 656px`:
   - Headline: *"Powering Rural Prosperity with Precision Solar Engineering"*
   - Eyebrow: `SUBSIDY-COMPLIANT · MNRE APPROVED · TIER-1 HARDWARE`
   - Dynamic telemetry widgets (floating performance chips, live generation estimates).
   - Dual CTA: "Book Site Feasibility Survey" + "Calculate My Subsidy".
3. **Section 03: About Jai Kisaan (Immersive Editorial) (`64:159`)** — `1280 × 849px`:
   - Asymmetric 2-column editorial layout: Brand mission, high-efficiency solar pumping and cold storage focus.
   - Key stat tiles: Total Capacity Installed, Farming Families Empowered, CO2 Offset.
4. **Section 04: Our Solutions (Sequential Spatial Modules) (`64:198`)** — `1280 × 2530px`:
   - Modular deep-dive cards:
     - *Solar Agricultural Pumps (PM-KUSUM Component B & C)*
     - *Commercial & Industrial Rooftop Arrays*
     - *Cold Storage & Agri-Processing Microgrids*
     - *Residential Grid-Tied Systems*
5. **Section 05: Why Choose Us (Deep Forest Green Spatial Sanctuary) (`64:367`)** — `1280 × 1224px`:
   - Dark background (`#17231D`) with subtle forest gradient (`#005733`).
   - 6 key differentiators: In-house EPC, Remote SCADA Monitoring, Government Subsidy Facilitation, 25-Year Linear Output Warranty, Rapid On-Site Service.
6. **Section 06: Project Showcase (Cinematic Gallery) (`64:435`)** — `1280 × 1281.65px`:
   - 3-column verified project cards with location tags, capacity (kW), and ROI timeline.
   - Interactive project category filters (*All, Commercial Cold Storage, Farm Pumps, Industrial*).
7. **Section 07: Sustainability Impact (Telemetry & Visual Metrics) (`64:502`)** — `1280 × 900px`:
   - Visual environmental dashboard: Metric tons of carbon mitigated, liters of diesel saved, groundwater sustainability indexing.
8. **Section 08: CEO's Corner (Leadership Perspective & Journal) (`64:561`)** — `1280 × 832px`:
   - Leadership letter from Sanjeev Kumar (Founder & CEO).
   - Editorial portrait, signed message on decentralized clean energy in Uttar Pradesh & Rajasthan.
9. **Section 09: Solar Insights & Knowledge (`64:607`)** — `1280 × 916px`:
   - 3 featured article cards covering subsidy policies, net metering guidelines, and cold storage ROI.
10. **Section 10: Customer Testimonials (`64:667`)** — `1280 × 761px`:
    - Strict authentic customer testimonial slots with farmer/business owner photos, verification badges, and installation locations.
11. **Section 11 & 12: Conversion & Consultation Experience (`64:735`)** — `1280 × 889px`:
    - High-impact spatial conversion card: Multi-step feasibility booking form + WhatsApp quick connect button.
12. **Persistent Footer (`64:833` / `112:343`)** — `1280 × 503.25px`:
    - Dark surface (`#17231D`), 4 navigational columns, empanelment badges (MNRE, UPNEDA, RREC), legal copyright, and SunScope Group lineage.

---

### 3.2 Page / About Us (`117:3408` — 9,375.5px Height)
1. **Hero Section (`117:3411`)** — `1280 × 847px`:
   - Editorial title: *"Engineering Energy Sovereignty for the Agricultural Backbone of India"*
2. **Company Overview Section (`117:3510`)** — `1280 × 900px`:
   - Narrative on the origins of JaiKisaan Solar, transition from agri-machinery into EPC solar power plants.
3. **Our Journey: 5-Step Interactive Timeline (`117:3578`)** — `1280 × 768px`:
   - 2018 (Inception) → 2020 (PM-KUSUM Rollout) → 2022 (Industrial Cold Storage Specialization) → 2024 (Green Hydrogen R&D) → 2026 (State-wide Telemetry Grid).
4. **Vision, Mission & Core Values (`117:3675`)** — `1280 × 1091px`:
   - 3 structured pillar cards with distinctive iconography.
5. **Green Hydrogen Innovation (5 Dedicated Cards) (`117:3738`)** — `1280 × 1118px`:
   - Cutting-edge R&D initiative: Biomass-to-hydrogen synthesis, decentralized electrolyzers, clean fertilizer co-generation.
6. **Why Choose JaiKisaan Solar (`117:3823`)** — `1280 × 974px`:
   - Technical standards, Tier-1 Mono-PERC bifacial panels, IP65 string inverters.
7. **Founder's Message (`117:3882`)** — `1280 × 962.5px`:
   - Full-length statement by Sanjeev Kumar on solar democracy and economic resilience.
8. **Management & Leadership Team (`117:3930`)** — `1280 × 851px`:
   - Profile grid: Executive leadership, Head of Engineering, Head of Regulatory Affairs.
9. **Company Credentials & Empanelments (8 Accreditation Tiles) (`117:3981`)** — `1280 × 722px`:
   - Official logos: MNRE, UPNEDA, RREC, ISO 9001:2015, Bureau of Indian Standards (BIS).
10. **Consultation & Get a Quote Band (`117:4096`)** — `1280 × 506px`:
    - Integrated direct booking strip.

---

### 3.3 Page / Projects (`117:4310` — 5,832.25px Height)
1. **Interactive Regional GIS & Installation Footprint Strip (`117:4313`)** — `1280 × 385px`:
   - Live metrics bar: `28.4 MWp Installed`, `1,420+ Farm Installations`, `42 Cold Storages Energized`, `99.2% Uptime`.
2. **Inner Page Hero Section (`117:4394`)** — `1280 × 705.75px`:
   - Editorial intro with deep visual depth and spatial badge.
3. **In-Page Filter & Segment Control Bar (`117:5055`)** — `1280 × 128px`:
   - Segmented buttons: *All Projects, Commercial Cold Storage, Solar Irrigation Pumps, Ground Mount Microgrids, C&I Rooftops*.
4. **Real & Landmark Verified Projects Grid (`117:4466`)** — `1280 × 2135px`:
   - 6 detailed project cards (373px 3-column layout) featuring:
     - Vikas Cold Storage, Jaipur (120 kWp)
     - Kisan Agro Pumping Cluster, Barabanki (50 HP Solar Pumps)
     - Sharda Flour & Oil Mills, Lucknow (85 kWp Rooftop)
     - Rajputana Warehousing Microgrid, Jodhpur (200 kWp)
     - Awadh Cold Chain Terminal, Unnao (150 kWp)
     - Bundelkhand Cooperative Irrigation Scheme (100 HP)
5. **Case Study Deep-Dive Spotlight (`117:4866`)** — `1280 × 770px`:
   - Featured horizontal case study anchor module linking directly into the Vikas Data deep-dive.
6. **Customer Testimonials (`117:4945`)** — `1280 × 532px`:
   - Verified KYC testimonial carousel/grid.
7. **City-Aware Contact & Feasibility Consultation Band (`117:5023`)** — `1280 × 528px`:
   - Dynamic location-aware CTA band customized by selected city.

---

### 3.4 Page / Case Study — Mr Vikas Data (`117:5258` — 8,116.75px Height)
1. **Top Meta / Breadcrumb Context (`117:5261`)** — `1280 × 616px`:
   - Project tag: `COMMERCIAL COLD STORAGE · 120 KWP · JAIPUR, RAJASTHAN`
   - Hero title: *"Mitigating ₹1.8L Monthly Grid Surcharges with a 120 kWp Bifacial Rooftop Solar Installation"*
2. **Hero Visual Accent Anchor (`117:5365`)** — `1280 × 568px`:
   - High-resolution drone aerial view of the actual commercial array.
3. **Sticky In-Page Navigation Bar (`117:5982`)** — `1280 × 49px`:
   - Quick jump anchors: *Overview, Specifications, Engineering Challenge, SCADA Telemetry, Financials, Site Gallery*.
4. **Section 1: Executive Overview & Facility Background (`117:5377`)** — `1280 × 554px`.
5. **Section 2: Key Technical Specifications Matrix (`117:5432`)** — `1280 × 791px`:
   - Structured 2x4 technical specs table (Module make, Inverter topology, Structure tilt, Annual generation).
6. **Section 3: The Challenge vs Engineering Solution Split (`117:5516`)** — `1280 × 833.5px`:
   - Side-by-side comparative cards (*High Peak Ammonia Compressor Surges vs Dynamic Power-Factor Inverter Arrays*).
7. **Section 4: Real-Time Telemetry & Performance Ratio (`117:5588`)** — `1280 × 729px`:
   - Interactive SCADA widget visualization with generation graphs, PR ratio (81.4%), and daily degradation index.
8. **Section 5: Financial Engineering & Accelerated Depreciation (`117:5695`)** — `1280 × 596px`:
   - Section 32 Income Tax 40% accelerated depreciation table, CAPEX recovery in 3.2 years, 25-year cumulative savings.
9. **Section 6: Site Photo Gallery & Blueprint (`117:5771`)** — `1280 × 724px`:
   - Single-line diagram (SLD) lightbox and structural layout photos.
10. **Section 7: Customer Testimonial Slot (`117:5828`)** — `1280 × 487px`.
11. **Section 8: City-Aware Local Engineering Desk (`117:5855`)** — `1280 × 476px`:
    - Local contact anchor for Jaipur & Rajasthan operations.
12. **Section 9: Related Case Studies Strip (`117:5889`)** — `1280 × 478px`.
13. **Section 10: High-Impact Consultation & Feasibility CTA Band (`117:5956`)** — `1280 × 567px`.

---

### 3.5 City Selector Spec & Foundations (`117:6169` & `117:2561`)
- **Interactive Component**: A modal overlay / drawer allowing users to switch active regions (*Lucknow, Jaipur, Barabanki, Jodhpur, Varanasi, Udaipur, Gorakhpur*).
- **Adaptation Behavior**:
  - Dynamically updates the header city badge ("📍 Active City: Lucknow").
  - Adjusts local DISCOM name (e.g. `MVVNL / UPPCL` for Lucknow; `JVVNL` for Jaipur).
  - Updates net-metering subsidy caps and local engineering office address/phone.

---

### 3.6 Page / Contact Us (`124:8077` — 4,909.68px Height)
1. **Top Decorative Ambient Glow & Hero (`124:8080`)** — `1280 × 502px`:
   - Headline: *"Connect with Our Solar Engineering Team"*
2. **Main Interaction Zone: Two-Column Form & Support Desks (`124:8116`)** — `1280 × 1008px`:
   - Left Column: Direct inquiry desks (Agricultural Subsidy Desk, Commercial EPC Desk, Vendor & Partner Desk).
   - Right Column: Comprehensive intake form (*Full Name, Phone, Email, City/District, Monthly Electricity Bill / Pump HP, Project Type, Message*).
3. **Regional Hubs & Offices Directory Section (`124:8274`)** — `1280 × 1878.5px`:
   - Detailed cards for Corporate HQ (Lucknow) and Regional Desks (Jaipur, Barabanki, Gorakhpur, Jodhpur) with addresses, hours, and direct desk managers.
4. **Interactive Spatial Map & Dispatch Center Visual Card (`124:8613`)** — `1280 × 744px`.
5. **Reassurance & SunScope Group Lineage Banner (`124:8695`)** — `1280 × 193px`.

---

### 3.7 Page / Blog (`125:10012` — 4,375.12px Height)
1. **Section 1: Editorial Header & Telemetry Pulse (`125:10015`)** — `1280 × 428px`:
   - Category filter pills (*All, Policy & Subsidies, Agricultural Solar, Engineering Insights, Case Studies*).
2. **Section 2: Spotlight Hero Article (`125:10076`)** — `1280 × 686px`:
   - Node `125:10119` ("Image Section 7 Cols"): Featured technical cover image, gradient overlay, floating telemetry badge.
   - Title: *"Understanding PM-KUSUM Component-C: How Farmers Can Turn Irrigation into an Annual Revenue Stream"*.
3. **Section 3: Editorial Articles Repository Grid (`125:10126`)** — `1280 × 2117px`:
   - 6 article cards with read times, publication dates, author chips, and summary excerpts.
4. **Section 4: Intelligence Newsletter Briefing (`125:10355`)** — `1280 × 390px`:
   - High-contrast subscription banner for policy briefings and tariff alerts.
5. **Section 5: Regional Telemetry & Rapid Advisory Banner (`125:10385`)** — `1280 × 194px`.

---

## 4. Typography Specifications

The design enforces a strict dual-font typographic hierarchy loaded from Google Fonts:

```html
<!-- Google Fonts Preconnect & Import -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Sora:wght@100..800&display=swap" rel="stylesheet">
```

### Font Family Roles
- **Headings & Display**: `Sora`, `sans-serif` (weights: `600 SemiBold`, `700 Bold`)
- **Body, UI & Meta**: `DM Sans`, `sans-serif` (weights: `400 Regular`, `500 Medium`, `600 SemiBold`)

### Detailed Type Scale Table

| Role | Font Family | Weight | Size | Line Height | Letter Spacing | Case | Figma Style Name |
|---|---|---|---|---|---|---|---|
| **Display / Hero H1** | Sora | 600 SemiBold | `72px` (4.5rem) | `1.1` (79.2px) | `-0.025em` | Normal | `Typography / H1 / SemiBold / 72` |
| **Page H1** | Sora | 600 SemiBold | `56px` (3.5rem) | `1.15` (64.4px) | `-0.02em` | Normal | `Heading / H1` |
| **Section H2** | Sora | 600 SemiBold | `36px` (2.25rem) | `1.25` (45px) | `-0.015em` | Normal | `Heading / H2` |
| **Sub-section H3** | Sora | 600 SemiBold | `28px` (1.75rem) | `1.3` (36.4px) | `-0.01em` | Normal | `Heading / H3` |
| **Card Heading** | Sora | 600 SemiBold | `22px` (1.375rem) | `1.35` (29.7px) | `-0.005em` | Normal | `Typography / H3 / SemiBold / 22` |
| **Mobile Heading**| Sora | 600 SemiBold | `28px`–`32px` | `1.2` | `-0.01em` | Normal | `Heading / Mobile` |
| **Body Large** | DM Sans | 400 Regular | `18px` (1.125rem) | `1.55` (28px) | `0` | Normal | `Body / Large` |
| **Body Default** | DM Sans | 400 Regular | `16px` (1rem) | `1.5` (24px) | `0` | Normal | `Body / Regular` |
| **Body Small** | DM Sans | 400 Regular / 500 Medium | `14px` (0.875rem) | `1.45` (20.3px) | `0` | Normal | `Typography / Body / Regular / 14` |
| **Button Text** | DM Sans | 600 SemiBold | `13px` (0.8125rem)| `1.2` (15.6px) | `+0.02em` | Normal | `Controls / Button` |
| **Eyebrow / Badge** | DM Sans | 600 SemiBold | `11px` (0.6875rem)| `1.2` (13.2px) | `+0.08em` | UPPERCASE | `Typography / Eyebrow / SemiBold / 11` |

---

## 5. Colour Palette & Design Tokens

Extracted directly from `Foundations` in `Component Library (112:336)` and Figma styles:

```css
:root {
  /* Surfaces */
  --surface-white: #FFFFFF;
  --surface-page: #F9FAF4;
  --surface-card: #F3F4EE;
  --surface-dark: #17231D;
  --surface-dark-card: #1E2D26;
  --surface-dark-glass: rgba(23, 35, 29, 0.75);

  /* Brand Accents */
  --brand-forest: #005733;       /* Primary CTA & Brand Anchor */
  --brand-forest-hover: #004528;
  --brand-lime: #C5F176;         /* Highlight Accent & Badges */
  --brand-lime-hover: #B4E85B;
  --brand-solar-amber: #F59E0B;  /* Solar Generation & Telemetry */
  --brand-eco-green: #10B981;    /* System Uptime & Status */

  /* Text Tones */
  --text-primary: #1A1C19;       /* Deep high-contrast body */
  --text-secondary: #3F4942;     /* Muted editorial copy */
  --text-eyebrow: #4B6D00;       /* High-visibility uppercase tags */
  --text-on-dark: #E8E9E3;       /* Off-white on dark backgrounds */
  --text-on-dark-muted: #A3AFA7; /* Subdued meta on dark surfaces */

  /* Borders & Dividers */
  --border-light: #E2E3DD;
  --border-card: #E8EAE3;
  --border-forest: #3D6752;
  --border-dark-subtle: rgba(255, 255, 255, 0.12);

  /* Spatial Shadows & Blur */
  --shadow-card: 0 4px 20px -2px rgba(23, 35, 29, 0.06);
  --shadow-elevated: 0 12px 32px -4px rgba(23, 35, 29, 0.12);
  --shadow-glow-lime: 0 0 24px -4px rgba(197, 241, 118, 0.35);
  --blur-glass: 12px;
}
```

---

## 6. Component Inventory

The project features a modular design system defined in `Page: Components` (`112:336`):

### 6.1 Navigation & Chrome
1. **Header Component (`112:342`)**:
   - Desktop: `1280 × 80px`. Floating glass container (`1248px` width) with `16px` border-radius, `backdrop-filter: blur(12px)`.
   - Content: Logo (SVG) + Navigation List (7 links with active indicator) + City Selector Pill + WhatsApp icon button + "Get Free Feasibility" primary button.
   - Mobile: Hamburger toggle button opening full-screen sliding menu drawer.
2. **Footer Component (`112:343`)**:
   - `1280 × 503.25px`. Dark surface (`#17231D`).
   - Top banner: SunScope Group heritage statement.
   - 4 Link Columns: *Solutions, Company, Resources, Legal/Compliance*.
   - Accreditation strip: 8 official empanelment marks.

### 6.2 Controls & Action Elements
1. **Button Set (`112:399`)**:
   - `Type=Primary`: Forest green background (`#005733`), white text, `12px` border-radius, height `48px`, padding `0 24px`. Hover state: `#004528` with subtle lift.
   - `Type=Secondary`: Translucent/outline with `border: 1px solid var(--border-light)`, dark text (`#1A1C19`), height `48px`.
   - `Type=WhatsApp`: Bright lime background (`#C5F176`) with official WhatsApp green glyph, dark text (`#17231D`).
2. **Form Controls (`112:400`)**:
   - Height: `48px`, border radius: `12px`, padding: `0 16px`.
   - Variations: Light surface (`#FFFFFF` on `#F9FAF4`) and Dark surface (`rgba(255, 255, 255, 0.06)` on `#17231D`).
   - Inputs: Text input, Select dropdown (with custom chevron), Number input (for pump HP / bill amount), Textarea.
3. **Status Badge (`112:348`)**:
   - Dimensions: `72 × 28px` (auto-width based on label).
   - Radius: `9999px` (full pill). Font: `DM Sans 11px SemiBold uppercase`.
   - Color variants: Lime (`#C5F176` / `#17231D`), Amber (`#FEF3C7` / `#92400E`), Forest (`#E8F5E9` / `#005733`).

### 6.3 Card Set (`112:440`) — 3-Column Standard (`373.33px` width, `32px` gutter)
1. **Card / Type=Service**:
   - Aspect ratio: `373 × 520px`.
   - Image slot (`220px` height) with zoom on hover.
   - Content: Eyebrow badge + H3 title + 3 spec bullet points + "View Technical Specs" link with arrow.
2. **Card / Type=Project**:
   - Visual header with capacity chip (e.g. `120 kWp`).
   - Facility type, client name, city location, annual savings metric.
3. **Card / Type=Article**:
   - Publication date + Category chip + Reading time (`4 min read`).
   - Article title, excerpt, and author avatar.
4. **Card / Type=Testimonial**:
   - Verified installation badge + 5-star rating + quote + client portrait, name, and farm/business location.

### 6.4 Patterns & Block Components
1. **Section Heading (`112:352`)**:
   - Centered or Left-aligned: Eyebrow (`11px` green uppercase) + Heading H2 (`36px Sora`) + Subtitle (`18px DM Sans`) + optional action button.
2. **Stat Tile (`112:353`)**:
   - `278 × 198px`, `24px` border-radius, `32px` internal padding.
   - Glassmorphism dark background, metric value (`48px Sora Bold Lime`), label (`14px On-dark`).
3. **FAQ Accordion Item (`112:450`)**:
   - `State=Closed` vs `State=Open` with smooth CSS grid/height transition.

---

## 7. Asset Inventory

All original assets are preserved directly from the client's Figma project:
1. **Vector Logos & Marks**:
   - Official `JAI KISAAN SOLAR` logo (`1:108`) with solar sunburst and crop leaf motif.
   - Empanelment logos: MNRE, UPNEDA, RREC, BIS, ISO 9001.
2. **69 Production Images**:
   - Sourced via Figma's CDN endpoints (cached locally during Phase 2).
   - High-density commercial rooftop arrays, cold storage chillers, solar pump field units, founder portraits, engineering blueprints.
3. **Icons & UI Glyphs**:
   - SVG icons for solar generation, grid connectivity, battery storage, water flow, location pin, call, WhatsApp, arrow-right, checkmark, chevron-down.

---

## 8. Responsive Design & Layout Strategy

The Figma frames define the Desktop specification (`1280px`). The responsive implementation translates these accurately across all viewports:

| Viewport | Container Width | Padding | Layout Adaptation |
|---|---|---|---|
| **Desktop (≥ 1280px)** | `1184px` | `48px` | Full 12-column grid, 3-column card strips (`373px`), sticky header & sidebars |
| **Laptop / Tablet Landscape (1024px – 1279px)**| `960px` | `32px` | 12-column scaled grid, 3-column cards scaled proportionally |
| **Tablet Portrait (768px – 1023px)** | `704px` | `24px` | 2-column card grids, horizontal scroll for timeline, condensed table matrices |
| **Mobile (< 768px)** | `100%` | `16px` | 1-column card stacks, full-screen mobile navigation drawer, sticky bottom CTA bar |

---

## 9. Implementation Plan & Technology Stack

### Recommended Stack
- **Framework**: React 19 + TypeScript + Vite (ultra-fast, zero bloat, clean maintainability).
- **Styling**: Tailwind CSS configured with exact Figma color tokens, font families (`Sora`, `DM Sans`), and grid dimensions.
- **Routing**: `react-router-dom` for client-side routing across all 6 pages.
- **Icons**: Lucide React + exact custom Figma SVGs for brand logos and accreditations.

### Phased Execution Roadmap
- [x] **Phase 1: Design Analysis & Documentation** (Current step)
- [ ] **Phase 2: Project Setup & Asset Pipeline**:
  - Initialize project with React, TypeScript, Tailwind CSS, Vite.
  - Setup font imports (`Sora`, `DM Sans`) and Tailwind theme tokens.
  - Download and organize all 69 Figma image assets and SVGs into `/public/assets/`.
- [ ] **Phase 3: Core Design System & Shared Components**:
  - `Header` with interactive City Selector dropdown & Mobile Drawer.
  - `Footer` with accreditation strip and lineage badge.
  - `Button`, `Badge`, `Card` (Service, Project, Article, Testimonial), `StatTile`, `SectionHeading`, `Input`, `Select`.
- [ ] **Phase 4: Page Implementations**:
  - Page 1: Homepage (`/`) — All 10 sections implemented in full.
  - Page 2: About Us (`/about`) — Timeline, leadership, Green Hydrogen.
  - Page 3: Projects (`/projects`) — Landmark grid & segmented filters.
  - Page 4: Case Study (`/projects/vikas-cold-storage`) — Technical specs & SCADA widget.
  - Page 5: Contact Us (`/contact`) — Intake form & regional office directories.
  - Page 6: Blog (`/blog`) — Spotlight article & technical repository.
- [ ] **Phase 5: Visual QA & Comparison**:
  - Compare browser rendering against Figma frames at 1280px.
  - Verify spacing, typography, colors, and asset integrity.

