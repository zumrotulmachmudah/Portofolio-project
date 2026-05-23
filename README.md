# Influencer Performance Dashboard

## Overview
A web-based dashboard for tracking influencer collaboration metrics, engagement rates, and ROI. Built to streamline influencer partnership management and data-driven decision making in growth marketing.

## Problem Statement
Managing multiple influencer collaborations requires tracking:
- Engagement rates and reach
- Collaboration status
- ROI per influencer
- Performance trends

This dashboard solves this by centralizing all metrics in one place.

## Tools Installed
- **Cursor IDE** - Modern code editor with AI assistance
- **Claude Code** - AI-powered code generation and assistance
- **Codex** - Code completion and documentation
- **Git** - Version control
- **GitHub** - Repository hosting

## What I Built
A single-page web application with:
- Summary statistics (total influencers, avg engagement, total reach, avg ROI)
- Interactive data table showing influencer metrics
- Filter functionality (by collaboration status)
- Responsive design for mobile and desktop

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Data Format**: JSON
- **Hosting**: GitHub Pages ready

## Steps Completed
1. ✅ Installed Cursor IDE and extensions (Claude Code, Codex)
2. ✅ Created GitHub repository
3. ✅ Set up project structure
4. ✅ Built HTML dashboard layout
5. ✅ Styled with CSS (gradient design, responsive tables)
6. ✅ Added JavaScript interactivity (data loading, filtering)
7. ✅ Created sample influencer data (JSON)
8. ✅ Tested dashboard locally
9. ✅ Committed to GitHub
10. ✅ Documented process

## Challenges & Solutions

### Challenge 1: Loading JSON Data
**Problem**: Browser couldn't load local JSON file due to CORS policy

**Solution**: Used `fetch()` API which handles cross-origin requests when files are served properly. Tested by opening HTML file through a local server.

### Challenge 2: Responsive Table Design
**Problem**: Table didn't display well on mobile devices

**Solution**: Added CSS media queries to reduce padding and font size on screens under 768px width.

### Challenge 3: Dynamic Statistics Calculation
**Problem**: Stats needed to update based on filtered data

**Solution**: Separated display logic from calculation logic. Recalculate stats whenever filter changes.

## How to Run Locally
1. Clone this repository
```bash
   git clone https://github.com/zumrotulmachmudah/Portofolio-project.git
   cd Portofolio-project
```

2. Open `index.html` in a web browser
   - Or run a local server: `python -m http.server 8000` (then visit `localhost:8000`)

3. Use the status filter to view different influencer groups

## Key Features
- 📊 Real-time statistics dashboard
- 🔍 Filter by collaboration status
- 📱 Mobile-responsive design
- 🎨 Modern gradient UI
- 📈 Shows ROI metrics

## Real-World Application
At Bali Happy Hour, this concept could track:
- Influencer response rates
- Campaign performance metrics
- Content quality scores
- Audience engagement trends

This provides data-driven insights for influencer partnership decisions.

## What I Learned
- How to structure a web application project
- Fetching and manipulating JSON data in JavaScript
- Building responsive CSS layouts
- Git workflow and GitHub collaboration
- Self-learning through documentation and testing

## Future Enhancements
- Add backend (Node.js/Python) for database integration
- Export data to CSV/PDF reports
- Add date range filtering
- Implement drag-and-drop for status updates
- Add charts/graphs using Chart.js
- Connect to real APIs (Instagram, TikTok)

## Contact
Feel free to reach out if you have questions about the implementation or approach.