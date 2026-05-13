import courseraLogo from './assets/certificates/Coursera.png'
import resumePDF from './assets/ajaiahdarlington_resume_2026.pdf'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Systems Thinker. Data-Driven Builder.',
  description:
    "I turn data into decisions. What drew me to analytics wasn't the math, it was what the math makes possible. In sports, in finance, in almost any system worth studying, the evidence tends to point the same direction: structure and consistency outperform cleverness over time. My work is about finding those patterns, understanding what drives outcomes, and translating that into decisions people can act on with confidence.",
  resume: resumePDF,
  social: {
    github: 'https://github.com/Ajaiah-D',
    linkedin: 'https://www.linkedin.com/in/ajaiah-darlington-aba9b618b/'
  },
}

export const projects = [
  {
    name: 'Player Performance Modeling',
    description:
      'Built a classification model to predict TOTY nominees using multi-season performance data. Used Random Forest with feature engineering and tuning; achieved AUC >90%.',
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    sourceCode: 'https://github.com/Ajaiah-D/TOTY-Prediction',
    livePreview: null
  },
  {
    name: 'Sleep Quality Prediction System',
    description:
      'Engineered backend of a sleep analysis app that collects user input and predicts sleep efficiency. Built with FastAPI, PostgreSQL, and a Random Forest model.',
    stack: ['FastAPI', 'PostgreSQL', 'Python'],
    sourceCode: 'https://github.com/Ajaiah-D/sleep-predictor',
    livePreview: null
  },
  {
    name: 'Portfolio Risk Analysis Tool',
    description:
      'Built a tool to retrieve financial data, compute asset correlations and beta, and simulate risk-optimized portfolios using efficient frontier modeling.',
    stack: ['Python', 'Matplotlib', 'Finance APIs'],
    sourceCode: 'https://github.com/Ajaiah-D/portfolio-risk-analysis',
    livePreview: null
  },
  {
    name: 'Scouting Intelligence Pipeline & Dashboard',
    description:
      'Built an end-to-end Python pipeline to identify undervalued footballers across Europe\'s Big 5 leagues. Merged FBref performance data with Transfermarkt valuations across 2,854 player-seasons, engineered a composite scoring model with position-specific weights, and visualised results in an interactive Tableau dashboard.',
    stack: ['Python', 'Data Engineering', 'Sports Analytics', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/DA-Course-Scouting-Intelligence-Pipeline-and-Dashboard',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/ScoutingIntelligenceDashboard_17762156549180/Overview'
  },
  {
    name: 'Healthcare Claims Analytics',
    description:
      'Analyzed three years of CMS synthetic Medicare data across ~116,000 beneficiaries to surface cost concentration, chronic condition comorbidities, and 30-day readmission patterns. Built a 6-notebook Python/SQLite pipeline producing pre-aggregated exports for a Tableau dashboard — key finding: patients with 11+ chronic conditions cost 137x more per year than those with none.',
    stack: ['Python', 'Pandas', 'SQL', 'SQLite', 'Jupyter', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/Healthcare-Claims-Analytics',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/HealthcareClaimsAnalyticsDashboard_17777471179890/HealthcareClaims-Summary'
  },
  {
    name: 'Soccer Media Benchmarking Dashboard',
    description:
      'Built a data pipeline that ingests YouTube channel metrics via the YouTube Data API, stores them in BigQuery, transforms them with dbt, and visualizes them in a Streamlit dashboard. The key metric (views per subscriber) normalizes engagement across channels of different sizes, surfacing which soccer media outlets have audiences that actually watch. Full Python ETL with BigQuery, dbt staging/intermediate/marts layers, and a modern dashboard. All infrastructure stays within GCP\'s free tier.',
    stack: ['Python', 'BigQuery', 'dbt', 'Streamlit', 'GCP', 'ETL'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-media-benchmarking',
    livePreview: null
  }
]

export const degrees = [
  {
    degree: 'Bachelor of Arts in Computer Science',
    school: 'CUNY Hunter College',
    year: '2025'
  },
  {
    degree: 'Associates in Information Systems',
    school: 'CUNY New York City College of Technology',
    year: '2020'
  }
]

export const certificates = [
  {
    title: 'Financial Markets',
    issuer: 'Coursera / Yale',
    image: courseraLogo,
    link: 'https://coursera.org/share/63146e50ba60538be607985419ec060e'
  },
  {
    title: 'Introduction to Data Engineering',
    issuer: 'Coursera',
    image: courseraLogo,
    link: 'https://coursera.org/share/9d7e9ad967679aeafb2141d74e7fe069'
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    image: courseraLogo,
    link: 'https://coursera.org'
  }
]

export const contact = {
  email: 'your.email@example.com',
}