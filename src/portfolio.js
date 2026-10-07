import courseraLogo from './assets/certificates/Coursera.png'
import resumePDF from './assets/certificates/Ajaiah_Darlington_Resume.pdf'
import shotBasketball from './assets/screenshots/basketball_iq.png'
import shotPortfolioRisk from './assets/screenshots/portfolio_analysis.png'
import shotHealthcare from './assets/screenshots/healthcare_dashboard.png'
import shotFred from './assets/screenshots/economic_indicators.png'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Data Analyst & Analytics Engineer',
  intro:
    'I build the pipelines, models, and dashboards that turn raw data into decisions people can act on. My projects run from Medicare claims to NBA box scores, and five of them are live for you to try below.',
  description:
    "I believe the best outcomes come from having as much information as possible, avoiding unnecessary risk, and applying real domain knowledge without wasting effort getting there. That philosophy led me to data. I use my technical skills to build pipelines, models, and systems that apply this thinking to real problems, in healthcare, finance, and sports, turning raw information into something people can act on with confidence.",
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
    dates: 'Sep 2025 - Present',
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
    dates: 'Sep 2022 - May 2024',
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
      'A personal AI assistant that runs on my own computer, so my conversations never go to an outside AI service. I talk to it through Discord. It sets reminders, syncs my Google Calendar, sends daily market and sports briefings, flags unusual stock moves, and checks that my live apps are running. Local AI models can\'t take actions on their own, so I built the layer that turns their replies into real actions.',
    stack: ['Python', 'Ollama', 'Gemma 3 27B', 'Discord.py', 'SQLite', 'APScheduler', 'yfinance', 'Google Calendar API'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Basketball Intelligence Platform',
    description:
      'An NBA stats platform covering 47 seasons, about 1.09 million player games, pulled from the NBA\'s stats site into a DuckDB database and modeled with dbt. The live dashboard has player and team pages, advanced-stat leaderboards, trivia games, team payroll against the salary cap back to 1984-85, and a game outcome predictor. The data passes 67 automated quality checks, and a weekly job keeps it current during the season.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Plotly', 'nba_api', 'scikit-learn', 'Docker'],
    featured: true,
    image: shotBasketball,
    imageAlt:
      'Basketball IQ dashboard showing 2025-26 league leaders, efficiency leaders and conference standings',
    sourceCode: 'https://github.com/Ajaiah-D/basketball-intelligence-platform',
    livePreview: 'https://basketball-intelligence-platform.streamlit.app/'
  },
  {
    name: 'Portfolio Risk Analysis Dashboard',
    description:
      'An interactive tool where you build a stock portfolio from 530+ S&P 500 stocks and ETFs and see how its risk and returns compare to just holding the market, using measures like Sharpe ratio, max drawdown, and value at risk. Every result comes with a plain-English explanation. It also suggests better weightings of the same holdings and runs Monte Carlo simulations of future outcomes. Prices update every weekday, and 47 automated tests check the math and the app.',
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
      'An analysis of synthetic Medicare claims for 116,000 patients over three years, including 5.5 million prescription records, looking at what drives cost and who ends up back in the hospital within 30 days. The biggest finding is that patients with both heart failure and COPD cost nine times more per year than patients with neither. The results feed a public Tableau dashboard, with the data work done in SQL and Python.',
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
      'An automated pipeline that pulls 160+ economic data series from the Federal Reserve every day, covering national measures like inflation and interest rates plus unemployment, home prices, and income for all 50 states. Its recession warning signal was tested against every U.S. recession since 1959 and flagged all 9. The dashboard writes its own plain-English monthly summary and can show what the data looked like on any past date. It runs on Python, dbt, and AWS.',
    stack: ['Python', 'dbt', 'DuckDB', 'AWS S3', 'Apache Airflow', 'GitHub Actions', 'Streamlit', 'Plotly'],
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
      'A computer vision project that watches broadcast soccer footage, tracks the players, sorts them into teams by jersey color, and works out each team\'s formation, like a 4-3-3, as play unfolds. It corrects for the camera panning and zooming and outputs an annotated video with a bird\'s-eye minimap. On a 30-second test clip it followed an average of 20 players per frame, using YOLOv8 for detection and OpenCV for the video work.',
    stack: ['Python', 'PyTorch', 'YOLOv8', 'ByteTrack', 'OpenCV', 'scikit-learn', 'SciPy', 'NumPy'],
    sourceCode: 'https://github.com/Ajaiah-D/player-tracking',
    livePreview: null
  },
  {
    name: 'Cross-League Player Value Translation Engine',
    description:
      'A model that estimates how a soccer player\'s output changes when they move to a stronger or weaker league, built from 1,871 real transfers across nine leagues in the U.S. and Europe\'s top five. It combines three public data sources, adjusts for age, and produces a league strength scale (Premier League 1.36, MLS 1.00, MLS NEXT Pro 0.58). It also found that 54% of players moving up from MLS NEXT Pro never earn meaningful minutes. On transfers it never saw, it beats random guessing.',
    stack: ['Python', 'pandas', 'NumPy', 'rapidfuzz', 'Selenium', 'Pydantic', 'uv', 'pytest'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-translation',
    livePreview: null
  },
  {
    name: 'Football Player Profiler',
    description:
      'A scouting app covering about 16,000 player seasons across seven years of Europe\'s top five leagues. Search any player to see how they rank against others in the same position, or find the players whose stats look most like theirs, goalkeepers included. The data is scraped from FBref, cleaned in Python, and stored in Google BigQuery.',
    stack: ['Python', 'pandas', 'NumPy', 'BeautifulSoup', 'BigQuery', 'Google Cloud Storage', 'Streamlit', 'Docker'],
    sourceCode: 'https://github.com/M4G1C14N5/scouting-report',
    livePreview: null
  },
  {
    name: 'Scouting Intelligence Pipeline & Dashboard',
    description:
      'A scouting tool that looks for undervalued players in Europe\'s top five leagues by weighing two seasons of on-field performance against market value. It matched 94.9% of 3,008 player seasons across two data sources that spell names differently, scored each player against others in their position, and ranked 2,854 players by performance per euro of value in a Tableau dashboard.',
    stack: ['Python', 'pandas', 'NumPy', 'fuzzywuzzy', 'unidecode', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/DA-Course-Scouting-Intelligence-Pipeline-and-Dashboard',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/ScoutingIntelligenceDashboard_17762156549180/Overview'
  },
  {
    name: 'Options Strategy Research',
    description:
      'A trading strategy research project, tested on three years of market history, that went through seven versions with every failure kept and written up. A study of 1,371 sharp moves across 10 ETFs found that buying sharp drops paid off 58 to 62% of the time, while betting against rallies didn\'t. Three options-based versions lost money, which pointed to the options setup rather than the idea, so the final version traded plain shares and became the first profitable one, up 3.8% with an 8% max drawdown.',
    stack: ['Python', 'QuantConnect LEAN', 'pandas', 'NumPy', 'Git'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Soccer Media Benchmarking Dashboard',
    description:
      'A pipeline that collects YouTube stats for five major soccer media channels and ranks them by views per subscriber, so a smaller channel with an audience that actually watches can outrank a bigger one. Each run saves a timestamped snapshot to Google BigQuery, dbt turns it into clean tables, and a Streamlit dashboard shows the rankings.',
    stack: ['Python', 'YouTube Data API', 'BigQuery', 'dbt', 'SQL', 'Streamlit', 'Plotly'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-media-benchmarking',
    livePreview: null
  },
  {
    name: 'Sleep Better',
    description:
      'A web app built as a team capstone project. Users sign in, enter nine details about their sleep and lifestyle, and get a machine learning prediction of their sleep efficiency. I built the backend, a Python FastAPI service that runs the random forest model and saves each prediction to a PostgreSQL database, and connected it to the React frontend and its Firebase sign-in.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'scikit-learn', 'React', 'TypeScript', 'Firebase', 'Render'],
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