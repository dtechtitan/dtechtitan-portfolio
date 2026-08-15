import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sql-fraud-analytics",
    title: "SQL Banking Fraud Analytics",
    hook: "Detecting fraud patterns across 15,000+ synthetic banking transactions using SQL and Python.",
    problem:
      "Banks need to flag suspicious transaction patterns fast, at scale.",
    approach:
      "Designed a relational schema (500 customers, 642 accounts, 15,200 transactions) with injected fraud patterns in SQLite, wrote SQL analysis queries, bridged results into pandas for further analysis.",
    stack: ["SQL", "SQLite", "Python", "Pandas", "Jupyter"],
    status: "In Progress",
  },
  {
    id: "lagos-real-estate",
    title: "Lagos Real Estate Market Analysis",
    hook: "What does ~15,000 property listings tell us about Lagos's housing market?",
    problem:
      "Understand pricing and location trends across Lagos's property market.",
    approach:
      "Scraped ~15,000 listings from NigeriaPropertyCentre with BeautifulSoup, cleaned and normalized the data (duplicates, price formats, location parsing), answered 5 research questions with 6 visualizations.",
    stack: ["Python", "BeautifulSoup", "Pandas", "Matplotlib", "Seaborn"],
    status: "Completed",
  },
  {
    id: "buka-restaurant-dashboard",
    title: "Buka Restaurant Discovery Dashboard",
    hook: "A discovery dashboard for Lagos's local food vendors, built across the full analytics stack.",
    problem:
      'Local food vendors ("bukas") are hard to discover and compare in a structured way.',
    approach:
      "Hybrid dataset combining scraped vendor data with simulated order data, analyzed across Python, SQL, and Power BI.",
    stack: ["Python", "SQL", "SQLite", "Excel", "Power BI"],
    status: "In Progress",
  },
  {
    id: "chocolate-sales-dashboard",
    title: "Chocolate Sales Excel Dashboard",
    hook: "A dark-themed, interactive sales dashboard built entirely in Excel.",
    problem: "Make sales performance explorable without a BI tool.",
    approach:
      "Built PivotCharts and slicers into a dark-themed Excel dashboard, documented with a full README.",
    stack: ["Excel", "PivotTables", "PivotCharts", "Slicers"],
    status: "Completed",
  },
  {
    id: "dtechtitan-portfolio",
    title: "This Portfolio Site",
    hook: "The site you're on right now — built with Next.js, TypeScript, and Framer Motion.",
    problem:
      "Needed a single site that speaks to recruiters, freelance clients, and the dtechtitan brand at once.",
    approach:
      "Built as a single-page scroll site with Next.js App Router, Tailwind v4, shadcn/ui components, and a custom dark data-driven design system — case-study modals for each project instead of bare links.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    status: "Completed",
  },
];
