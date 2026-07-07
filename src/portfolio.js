import courseraLogo from './assets/certificates/Coursera.png'
import resumePDF from './assets/certificates/Ajaiah_Darlington_2026.pdf'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Analytics Engineer',
  description:
    "I believe the best outcomes come from having as much information as possible, avoiding unnecessary risk, and applying real domain knowledge without wasting effort getting there. That philosophy led me to data. I use my technical skills to build pipelines, models, and systems that apply this thinking to real problems, in healthcare, finance, and sports, turning raw information into something people can act on with confidence.",
  resume: resumePDF,
  social: {
    github: 'https://github.com/Ajaiah-D',
    linkedin: 'https://www.linkedin.com/in/ajaiah-darlington-aba9b618b/'
  },
}

export const projects = [
  {
    name: 'Kroos: Local AI Assistant',
    description:
      'A personal AI assistant that runs entirely on my own machine: a local LLM through Ollama with Discord as the interface, so nothing leaves my computer. Since local models lack native tool calling, I built a system that parses structured actions out of plain-text replies and executes them deterministically, including task reminders, Google Calendar sync, daily market and sports briefings, and z-score anomaly detection that flags unusual market moves against each ticker\'s own history.',
    stack: ['Python', 'Ollama', 'Gemma 3', 'Discord.py', 'SQLite', 'APScheduler', 'yfinance', 'Google Calendar API'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Basketball Intelligence Platform',
    description:
      'A local-first NBA analytics platform that backfilled 47 seasons (roughly 1.09M player-game rows) from the NBA stats API through a rate-limited ingestion client into a DuckDB warehouse, modeled with dbt and served through a FotMob-style Streamlit dashboard with trivia mini-games and a password-gated SQL workbench.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Plotly', 'nba_api', 'Docker'],
    sourceCode: 'https://github.com/Ajaiah-D/basketball-intelligence-platform',
    livePreview: null
  },
  {
    name: 'Portfolio Risk Analysis Dashboard',
    description:
      'A 6-tab interactive dashboard where users build a portfolio of S&P 500 stocks or ETFs and see risk and return metrics (Sharpe, Sortino, Beta, VaR/CVaR, max drawdown) benchmarked against SPY, with plain-English explanations for people new to finance. Tested at three levels with pytest, including headless end-to-end runs of the real app.',
    stack: ['Python', 'Streamlit', 'Plotly', 'pandas', 'NumPy', 'SQLite', 'pytest'],
    sourceCode: 'https://github.com/Ajaiah-D/Portfolio-Risk-Analysis',
    livePreview: null
  },
  {
    name: 'Healthcare Claims Analytics',
    description:
      'An analytics pipeline on CMS synthetic Medicare data covering 116,000 beneficiaries across three years, spanning a 5.5M-row prescription events file. Six sequential notebooks detect 30-day hospital readmissions, quantify per-condition cost impact, and pre-aggregate 14 export tables so the Tableau dashboard stays fast and the logic stays auditable.',
    stack: ['Python', 'pandas', 'SQLite', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/Healthcare-Claims-Analytics',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/HealthcareClaimsAnalyticsDashboard_17777471179890/HealthcareClaims-Summary'
  },
  {
    name: 'FRED Economic Indicators Pipeline',
    description:
      'An end-to-end economic data pipeline ingesting six Federal Reserve indicators (CPI, unemployment, GDP, fed funds rate, housing starts, consumer sentiment) through a FRED API to S3 to Airflow to dbt to Streamlit stack, with a rules-based recession signal score derived from historical 2008 and 2020 conditions. Handled a mid-project platform change by diagnosing new constraints and implementing an equivalent pandas transform rather than forcing an oversized tool onto a small dataset. Shipped a custom Streamlit dashboard with an accessibility-checked color system, interactive charts, and a plain-language glossary of what each indicator means.',
    stack: ['Python', 'Apache Airflow', 'pandas', 'AWS S3', 'dbt', 'DuckDB', 'Streamlit', 'Plotly'],
    sourceCode: 'https://github.com/Ajaiah-D/Economic-Indicators-Pipeline',
    livePreview: null,
    inProgress: true
  },
  {
    name: 'Football Player Profiler',
    description:
      'A cloud-backed football analytics platform covering ~14,000 player-season records across 7 seasons of Europe\'s Big 5 leagues. Search any player to see percentile rankings by position group and find the most statistically similar players via a cosine-similarity model on per-90 stats, served live from a 3-layer BigQuery warehouse.',
    stack: ['Python', 'pandas', 'BeautifulSoup', 'BigQuery', 'Google Cloud Storage', 'Streamlit', 'Docker'],
    sourceCode: 'https://github.com/M4G1C14N5/scouting-report',
    livePreview: null
  },
  {
    name: 'Scouting Intelligence Pipeline & Dashboard',
    description:
      'A 5-stage Python pipeline that surfaces undervalued footballers across Europe\'s Big 5 leagues by merging FBref performance stats with Transfermarkt market valuations. Two-pass exact-then-fuzzy name matching joined 94.9% of 3,008 player-seasons; a position-weighted scoring model divides performance by market value to rank targets in a Tableau dashboard.',
    stack: ['Python', 'pandas', 'NumPy', 'fuzzywuzzy', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/DA-Course-Scouting-Intelligence-Pipeline-and-Dashboard',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/ScoutingIntelligenceDashboard_17762156549180/Overview'
  },
  {
    name: 'Options Strategy Research',
    description:
      'A version-controlled research project tracking five iterations of an options mean-reversion strategy backtested on QuantConnect\'s LEAN engine. A signal study across 1,371 dip/rally events in 10 ETFs quantified a 58–62% hit rate on 2-sigma dips and shaped the final long-only dip buyer using bull call spreads across a 7-ticker ETF basket.',
    stack: ['Python', 'QuantConnect LEAN', 'QCAlgorithm', 'Git'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Soccer Media Benchmarking Dashboard',
    description:
      'An ELT pipeline that ingests daily YouTube statistics for five major soccer media outlets and ranks channels by views-per-subscriber, so a smaller channel that actually gets watched can outrank a bigger one. Raw snapshots land in BigQuery and flow through a three-layer dbt model into a cached Streamlit dashboard.',
    stack: ['Python', 'YouTube Data API', 'BigQuery', 'dbt', 'Streamlit', 'Plotly'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-media-benchmarking',
    livePreview: null
  },
  {
    name: 'Sleep Better',
    description:
      'A full-stack sleep quality app where users enter 10 personal metrics and receive a machine learning predicted sleep efficiency score, classified as Good or Poor. The React frontend is deployed on Render and talks to a FastAPI backend that verifies Firebase auth and saves every prediction to PostgreSQL.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'FastAPI', 'PostgreSQL', 'scikit-learn'],
    sourceCode: 'https://github.com/Ajaiah-D/HunterCapstoneSpring2025',
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
  email: 'ajaiahdarlington07@gmail.com',
}