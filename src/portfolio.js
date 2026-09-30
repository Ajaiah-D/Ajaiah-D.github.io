import courseraLogo from './assets/certificates/Coursera.png'
import resumePDF from './assets/certificates/Ajaiah_Darlington_Resume.pdf'
import shotBasketball from './assets/screenshots/basketball_iq.png'
import shotPortfolioRisk from './assets/screenshots/portfolio_analysis.png'
import shotHealthcare from './assets/screenshots/healthcare_dashboard.png'
import shotFred from './assets/screenshots/economic_indicators.png'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Data Analyst & Analytics Engineer',
  description:
    'I build the pipelines, models, and dashboards that turn raw data into decisions people can act on. My projects run from Medicare claims to NBA box scores, and five of them are live for you to try below.',
  highlights: [
    { value: '1.09M', label: 'NBA player-games modeled across 47 seasons' },
    { value: '116K', label: 'Medicare patients analyzed for cost and readmission risk' },
    { value: '9 of 9', label: 'U.S. recessions since 1959 flagged by my risk signal' },
    { value: '1,871', label: 'player transfers used to measure league strength' }
  ],
  resume: resumePDF,
  social: {
    github: 'https://github.com/Ajaiah-D',
    linkedin: 'https://www.linkedin.com/in/ajaiah-darlington-aba9b618b/'
  },
}

export const experience = [
  {
    role: 'Data Operations Specialist',
    company: 'Amalgamated Life Insurance Company',
    location: 'White Plains, NY',
    dates: 'Sep 2025 – Present',
    current: true,
    points: [
      'Validate and reconcile pension and benefits records across internal insurance systems, keeping regulated data accurate and compliant.',
      'Built Excel audit logs, tracking templates, and macros that automate recurring documentation work, standardizing data quality checks and cutting resolution time.'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'IBM',
    location: 'New York, NY',
    dates: 'Sep 2022 – May 2024',
    points: [
      'Automated an end-to-end reporting workflow in Python and SQL, turning a multi-day manual process into same-day delivery and eliminating recurring data inconsistencies.',
      'Wrote and optimized SQL to extract, transform, and validate data from multiple source systems, feeding scheduled Power BI refreshes and tracing reporting discrepancies back to their root cause.',
      'Built and maintained Power BI and Tableau dashboards presented to leadership across 6+ cross-functional teams.'
    ]
  }
]

export const projects = [
  {
    name: 'Kroos: Local AI Assistant',
    description:
      'A personal AI assistant that runs entirely on my own machine: a local LLM through Ollama with Discord as the interface, so nothing leaves my computer. Since local models lack native tool calling, I built a system that parses structured actions out of plain-text replies and executes them deterministically: task reminders, Google Calendar sync, daily market and sports briefings, alerts when a stock moves far outside its own normal range, and uptime and freshness checks on my other deployed apps.',
    stack: ['Python', 'Ollama', 'Gemma 3 27B', 'Discord.py', 'SQLite', 'APScheduler', 'yfinance', 'Google Calendar API'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Basketball Intelligence Platform',
    description:
      'An NBA analytics platform that backfilled 47 seasons (roughly 1.09M player-game rows) from the NBA stats API through a rate-limited ingestion client into a DuckDB warehouse, modeled with dbt across 9 models and 23 passing tests, and served through a FotMob-style Streamlit dashboard with advanced-metric leaderboards, trivia mini-games, and a password-gated SQL workbench. A weekly job re-ingests and republishes the warehouse so the live version stays current.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Plotly', 'nba_api', 'Parquet', 'Docker'],
    featured: true,
    image: shotBasketball,
    imageAlt:
      'Basketball IQ dashboard showing 2025-26 league leaders, efficiency leaders and conference standings',
    sourceCode: 'https://github.com/Ajaiah-D/basketball-intelligence-platform',
    livePreview: 'https://basketball-intelligence-platform-swbwhpr8numf57yyrar22w.streamlit.app/players'
  },
  {
    name: 'Portfolio Risk Analysis Dashboard',
    description:
      'A 6-tab interactive dashboard where users build a real dollar-weighted portfolio from 530+ S&P 500 stocks and ETFs and see risk and return metrics (Sharpe, Sortino, Beta, VaR/CVaR, max drawdown) benchmarked against SPY, plus an efficient frontier optimizer and Monte Carlo return projections. Every number comes with a plain-English reading and a glossary, and any portfolio is shareable as a link. Prices refresh each weekday through GitHub Actions, and 47 pytest tests include headless end-to-end runs of the real app.',
    stack: ['Python', 'Streamlit', 'Plotly', 'pandas', 'NumPy', 'SQLite', 'GitHub Actions', 'pytest'],
    featured: true,
    image: shotPortfolioRisk,
    imageAlt:
      'Portfolio Risk Analysis app showing an example portfolio beating SPY, automatic insights, and Sharpe, Sortino and Beta readings',
    sourceCode: 'https://github.com/Ajaiah-D/Portfolio-Risk-Analysis',
    livePreview: 'https://ajaiah-d-portfolio-risk--streamlit-appportfolio-analyzer-ij9gqb.streamlit.app/'
  },
  {
    name: 'Healthcare Claims Analytics',
    description:
      'An analytics pipeline on CMS synthetic Medicare data covering 116,000 beneficiaries across three years, spanning a 5.5M-row prescription events file. Six sequential notebooks detect 30-day hospital readmissions, quantify per-condition cost impact, and pre-aggregate 18 export tables so the Tableau dashboard stays fast and the logic stays auditable. The headline finding: patients with both heart failure and COPD cost nine times more per year than patients with neither.',
    stack: ['Python', 'pandas', 'SQL', 'SQLite', 'Jupyter Notebooks', 'Tableau'],
    featured: true,
    image: shotHealthcare,
    imagePosition: 'left top',
    imageAlt:
      'Healthcare claims Tableau dashboard charting spending tiers, top chronic conditions and readmission risk',
    sourceCode: 'https://github.com/Ajaiah-D/Healthcare-Claims-Analytics',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/HealthcareClaimsAnalyticsDashboard_17777471179890/HealthcareClaims-Summary'
  },
  {
    name: 'FRED Economic Indicators Pipeline',
    description:
      'An end-to-end pipeline over 165+ Federal Reserve series: national indicators feeding a recession-risk signal backtested against all 9 NBER recessions since 1959, state-level unemployment, house prices, and income for all 50 states plus DC, and ALFRED vintage data that reconstructs what the economy looked like on any past date versus what\'s known now. Airflow orchestrates ingestion to S3, dbt builds the marts, and a three-page Streamlit dashboard writes its own monthly briefing from the data, refreshed daily through GitHub Actions.',
    stack: ['Python', 'Apache Airflow', 'dbt', 'DuckDB', 'AWS S3', 'PySpark', 'Streamlit', 'Plotly'],
    featured: true,
    image: shotFred,
    imageAlt:
      'U.S. Economic Indicators dashboard showing the recession-risk signal, an auto-written monthly brief and latest readings',
    sourceCode: 'https://github.com/Ajaiah-D/Economic-Indicators-Pipeline',
    livePreview: 'https://ajaiah-d-economic-indicators-pipeline-dashboardapp-d8tih5.streamlit.app/'
  },
  {
    name: 'Soccer Player Tracking & Formation Analysis',
    description:
      'A computer vision pipeline that turns a broadcast soccer clip into per-player tracking data, team assignments, and a formation read for each phase of possession, output as an annotated video with a top-down minimap. YOLOv8 and ByteTrack hold player IDs across frames, jersey-color clustering splits the teams, and a homography chain corrects for camera pan and zoom before positions are matched against nine formation templates. On a 30-second test clip: 20 players tracked per frame, teams correct on every checked track.',
    stack: ['Python', 'PyTorch', 'YOLOv8', 'ByteTrack', 'OpenCV', 'scikit-learn', 'SciPy', 'NumPy'],
    sourceCode: 'https://github.com/Ajaiah-D/player-tracking',
    livePreview: null
  },
  {
    name: 'Cross-League Player Value Translation Engine',
    description:
      'A five-phase pipeline measuring how much of a player\'s production survives a move between leagues, learned from 1,871 real transfers across nine leagues — the American pyramid plus Europe\'s Big 5. It merges three public data sources, matches player identities across them, adjusts for age, and produces a league strength scale (Premier League 1.36, MLS 1.00, MLS NEXT Pro 0.58). It also counts who fails invisibly: 54% of players moving up from MLS NEXT Pro never see real minutes. Held-out transfers confirm the factors beat chance.',
    stack: ['Python', 'pandas', 'NumPy', 'rapidfuzz', 'Selenium', 'Pydantic', 'uv', 'pytest'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-translation',
    livePreview: null
  },
  {
    name: 'Football Player Profiler',
    description:
      'A cloud-backed football analytics app covering roughly 16,000 player-season records across 7 seasons of Europe\'s Big 5 leagues. Search any player to see percentile rankings against others in their position group, or find the most statistically similar players — goalkeepers included — using a cosine-similarity model on per-90 stats. Data is scraped from FBref, cleaned, and served live from a 3-layer BigQuery warehouse.',
    stack: ['Python', 'pandas', 'NumPy', 'BeautifulSoup', 'BigQuery', 'Google Cloud Storage', 'Streamlit', 'Docker'],
    sourceCode: 'https://github.com/M4G1C14N5/scouting-report',
    livePreview: null
  },
  {
    name: 'Scouting Intelligence Pipeline & Dashboard',
    description:
      'A 5-stage Python pipeline that surfaces undervalued footballers across Europe\'s Big 5 leagues by merging two seasons of FBref performance stats with Transfermarkt market valuations. Two-pass exact-then-fuzzy name matching joined 94.9% of 3,008 player-seasons; a position-weighted, league-adjusted score is then divided by market value to rank 2,854 players in a Tableau dashboard.',
    stack: ['Python', 'pandas', 'NumPy', 'fuzzywuzzy', 'unidecode', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/DA-Course-Scouting-Intelligence-Pipeline-and-Dashboard',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/ScoutingIntelligenceDashboard_17762156549180/Overview'
  },
  {
    name: 'Options Strategy Research',
    description:
      'A version-controlled research project tracking seven versions of a mean-reversion strategy backtested on QuantConnect\'s LEAN engine, with every failed run kept and post-mortemed rather than deleted. A study of 1,371 dip/rally events across 10 ETFs found a 58–62% hit rate on 2-sigma dips and killed the short side; three losing options versions then traced the damage to the options structure itself, and the final version dropped options for plain shares — the first profitable run, +3.8% with an 8% max drawdown.',
    stack: ['Python', 'QuantConnect LEAN', 'pandas', 'NumPy', 'Git'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Soccer Media Benchmarking Dashboard',
    description:
      'An ELT pipeline that pulls YouTube channel statistics for five major soccer media outlets and ranks them by views per subscriber, so a smaller channel that actually gets watched can outrank a bigger one. Timestamped snapshots land in BigQuery and flow through a three-layer dbt model into a cached Streamlit dashboard with per-channel view, video, and engagement breakdowns.',
    stack: ['Python', 'YouTube Data API', 'BigQuery', 'dbt', 'SQL', 'Streamlit', 'Plotly'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-media-benchmarking',
    livePreview: null
  },
  {
    name: 'Sleep Better',
    description:
      'A full-stack sleep app where signed-in users enter nine sleep and lifestyle metrics and get a machine learning predicted sleep efficiency score saved to their history. A React and TypeScript frontend with Firebase sign-in is deployed on Render, talking to a FastAPI backend that serves a random forest model trained on Kaggle sleep data (mean error 3.6 points) and writes every prediction to PostgreSQL.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'FastAPI', 'PostgreSQL', 'scikit-learn'],
    sourceCode: 'https://github.com/Ajaiah-D/HunterCapstoneSpring2025',
    livePreview: null
  }
]

export const degrees = [
  {
    degree: 'Bachelor of Arts in Computer Science, Minor in Mathematics',
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
    link: null
  }
]

export const contact = {
  email: 'ajaiahdarlington07@gmail.com',
}