Scout AI: Venture Capital Intelligence Interface

A high-fidelity prototype of a Venture Capital intelligence platform, built to fulfill the "Vibe Coding Take-Home" assignment.

Scout AI aims to solve the problem of noisy VC sourcing by turning a fund's unique thesis into an always-on discovery workflow. Drawing inspiration from premium tools like Harmonic and Cardinal, this interface focuses on clean typography, responsive layouts, and lightning-fast interactions to surface high-signal companies.

🚀 Quick Start (Local Setup)

This application was built as a unified React application for rapid prototyping.

Initialize a new React project using Vite:

npm create vite@latest scout-ai -- --template react
cd scout-ai


Install dependencies:

npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


(Ensure Tailwind CSS is properly configured in your tailwind.config.js and index.css)

Copy the code: Replace the contents of src/App.jsx with the provided App.jsx file.

Run the development server:

npm run dev


🎯 Assignment Checklist & Implemented Features

This prototype successfully covers the "Minimum app scope (must-have)" and several "Stretch Goals" outlined in the assignment brief.

1. App Shell & Navigation

[x] Sidebar Navigation: Clean, premium sidebar routing to Directory, Lists, and Saved Searches.

[x] Global Search: Implemented a power-user Cmd + K (or Ctrl + K) global search modal that searches across the entire seeded database and navigates directly to company profiles.

2. Master Directory (/companies)

[x] Search & Filter: Fast text-based search alongside faceted dropdown filters for "Sector" and "Stage".

[x] Results Table: A robust data table displaying mock companies.

[x] Sorting & Pagination: Clickable column headers to sort data (ASC/DESC) and standard pagination controls to handle larger datasets.

3. Company Profile (/companies/[id])

[x] Tabbed Interface: Modular views for Overview (firmographics, summary), Signals (timeline of momentum events), and Notes (thesis workspace).

[x] Save-to-List: A custom dropdown menu to quickly add/remove the company from user-generated lists.

[x] Explainable Thesis Score: As requested in the Case Context, enriching a profile generates a "Thesis Match Score" widget explaining why the company aligns with the fund's strategy.

4. Workflow & Persistence (/lists & /saved)

[x] List Management: Create custom lists (e.g., "European AI Infra Targets"), manage companies within them, and Export to CSV for offline workflows.

[x] Saved Searches: Save complex query+filter combinations directly from the Directory to rerun them later.

[x] Local Storage: All application state (custom lists, saved searches, user notes, and enriched company data) is fully persisted using localStorage.

🤖 AI Enrichment (Architecture & Simulation)

The assignment requires wiring live enrichment to pull and summarize public web data. Because this submission is currently configured as a Frontend UI prototype, the backend scraping route is simulated to demonstrate the exact UI/UX flow.

The User Flow:

User navigates to a profile and clicks "Enrich with AI".

The UI enters a disabled loading state (<Loader2 animate-spin />).

After a realistic delay (simulating a network request), the UI updates with:

An AI-generated Executive Summary.

An Explainable Match Score.

A timeline of extracted "Derived Signals" (e.g., Hiring Velocity, Product Updates).

Transitioning to Production:
To make this live, the handleEnrich function in App.jsx is structured to be easily swapped with a real fetch call.

// Current Mock:
setTimeout(() => { updateCompany(mockEnrichedData); setIsEnriching(false); }, 2500);

// Production Implementation:
const response = await fetch('/api/enrich', { 
  method: 'POST', 
  body: JSON.stringify({ url: company.url }) 
});
const enrichedData = await response.json(); // Hits Firecrawl + Google AI Studio
updateCompany(enrichedData);


🛠 Tech Stack

Framework: React 18

Styling: Tailwind CSS (Custom Shadcn-inspired UI primitives)

Icons: lucide-react

State & DB: React Hooks (useState, useMemo) + Browser localStorage

🧠 Design Philosophy (The "Vibe")

The UI was built with a strict adherence to modern SaaS design principles. Heavy use of whitespace, subdued slate/indigo color palettes, subtle borders, and micro-interactions (hover states, transitions) ensures the tool feels like a premium, high-trust environment suitable for VC Partners and Analysts.
