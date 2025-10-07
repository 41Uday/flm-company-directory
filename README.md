 Companies Directory – Frontend Developer Assignment

This is a responsive React web app built as part of the Frontend Developer Assignment for Frontlines Media.
It displays a list of companies with options to search, filter, sort, and paginate, ensuring a clean and smooth user experience across all devices.

 Features
  -> Responsive Design – Works seamlessly on desktop, tablet, and mobile using Material UI’s grid system.
  -> Search & Filters – Quickly find companies by name, location, or industry.
  -> Sorting – Sort results alphabetically (A–Z or Z–A).
  -> Pagination – Adjusts dynamically based on screen size:
    -> 12 per page on desktop
    -> 6 per page on tablets
    -> 4 per page on mobile
  -> Loading & Error States – Includes clear feedback and a retry option for failed fetches.
  -> Optimized Performance – Uses useMemo and useCallback to avoid unnecessary re-renders.
  -> Clean Component Structure – Built with modular, reusable components.
  
 Tech Stack
  -> React.js (Hooks & Functional Components)
  -> Material UI (MUI) for responsive layout and UI components
  -> Mock API – Local JSON file (src/api/companies.json) used to simulate API data
  -> JavaScript (ES6+)
 Folder Structure
  companies-directory/
  ├── src/
  │   ├── api/
  │   │   └── companies.json
  │   ├── components/
  │   │   ├── Filters.js
  │   │   ├── CompaniesGrid.js
  │   │   └── CompanyCard.js
  │   └── App.js
  ├── package.json
  └── README.md

 Getting Started
  -> Clone the repository
  -> git clone https://github.com/41Uday/flm-company-directory.git
  -> Move into the project folder
  -> cd companies-directory-frontend
  -> Install dependencies
  -> npm install
  -> Start the app
  -> npm start
  -> The app will start running at http://localhost:3000

 Development Approach
    -> Focused on clean and user-friendly UI with a fully responsive design.
    -> Used React Hooks (useState, useEffect, useMemo, useCallback) for state and performance optimization.
    -> Material UI was chosen for its modern components and built-in responsiveness.
    -> Implemented pagination for smoother browsing through large datasets.
    -> Added error handling and retry logic for better reliability.
    -> Mock data is loaded from src/api/companies.json to simulate an API call.
 Demo Video
  -> Walkthrough Link: [Add your Loom or Drive video link here]

