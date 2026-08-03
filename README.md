# Product X-Ray - Product Teardown Platform

Product X-Ray is an interactive product management tool designed to generate instant, full-spectrum product teardowns for popular global and Indian companies. 

Developed by **Pavitra Poojary**, the application provides structured, visual product breakdowns tailored to 25 target companies across several major business verticals.

---

## 🚀 Key Features

1. **Curated Product Selection & Company Directory**: Allows switching between a quick search-dropdown view or a full visual **Company Directory** gallery containing cards with offline-capable **custom vector logos** and industry filters.
2. **7 Key Product Modules**:
   - **User Personas**: Details demographics, goals, frustrations, and product feature matches.
   - **Jobs To Be Done (JTBD)**: Maps functional, emotional, and social jobs into *Situation ➔ Motivation ➔ Outcome* cards.
   - **User Journey Map**: Charts user actions, pain points, opportunities, and displays an **interactive SVG emotion line graph** tracking satisfaction.
   - **Business Model Canvas**: Displays a classic 9-box business canvas matrix (Partners, Activities, Resources, Values, Channels, Segments, Costs, and Revenues).
   - **Feature & Growth Backlog**: Recommends 8 custom feature ideas in a sortable table with an **interactive SVG 2x2 Effort-vs-Impact scatter plot**.
   - **Product Requirement Document (PRD)**: Generates a complete lean spec with problem definitions, success metrics, checklists for user stories, in/out scope divisions, and risks.
   - **Company Timeline History**: Displays a vertical milestones timeline.
3. **Smooth Local Mock Engine**: Bypasses external APIs to guarantee instant, high-fidelity, vertical-specific local teardowns.
4. **Light Pastel Theme**: Offers a modern SaaS-style user interface utilizing a soft lavender, mint, and peach color scheme.

---

## 📂 Project Architecture

```text
├── src/
│   ├── components/
│   │   ├── CompanySearch/     # Landing Screen & Search dropdown
│   │   ├── ModuleSelector/    # Multi-select configuration screen
│   │   ├── ResultsView/       # Stacked document viewer & SVG visualizations
│   │   
│   ├── services/
│   │   ├── mockData.ts        # Dynamic vertical-based mock data generator
│   │   
│   ├── App.tsx                # State router and header/footer wrapper
│   ├── index.css              # Light theme design tokens & animations
│   └── main.tsx               # App bootstrapper
├── .env.example               # Environmental key templates
├── package.json               # Package dependencies & scripts
└── PROJECT_DETAILS.md         # Project documentation (this file)
```

---

## 🎨 Theme Guidelines
The visual identity of Product X-Ray is based on light, clean card elements utilizing a **pleasing pastel design system**:
- **Background**: Soft light-grey (`#f3f4f8`)
- **Card Backgrounds**: Solid white (`#ffffff`) with subtle, clean shadows.
- **Accents**:
  - Teal/Mint: Selected states & primaries (`#0d9488` / `#14b8a6`)
  - Emerald: Goals, success metrics, and high satisfaction (`#10b981`)
  - Pastel Peach/Amber: Moderate parameters and efforts (`#f59e0b`)
  - Pastel Rose: Pain points, risks, and exclusions (`#ef4444`)
