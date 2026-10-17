import courseraLogo from './assets/certificates/Coursera.png'
import resumePDF from './assets/certificates/Ajaiah_Darlington_Resume.pdf'
import shotBasketball from './assets/screenshots/basketball_iq.png'
import shotPortfolioRisk from './assets/screenshots/portfolio_analysis.png'
import shotHealthcare from './assets/screenshots/healthcare_dashboard.png'
import shotFred from './assets/screenshots/economic_indicators.png'
import shotScoutingHub from './assets/screenshots/scouting_hub.png'
import shotTranslation from './assets/screenshots/translation_engine.png'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Data Analyst & Analytics Engineer',
  intro:
    'I build the pipelines, models, and dashboards that turn raw data into decisions people can act on. My projects run from Medicare claims to NBA box scores, and six of them are live for you to try below.',
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
      'A personal AI assistant that runs on my own computer, so my conversations never go to an outside AI service. I talk to it through Discord to manage tasks, habits and reminders, and it syncs with my Google Calendar. It posts daily market and sports briefings and a weekly politics briefing built from Congress.gov, the Federal Register and seven news outlets. It also flags unusual stock moves and checks that my live apps are running. Local AI models can\'t take actions on their own, so I built the layer that turns their replies into real actions.',
    stack: ['Python', 'Ollama', 'Gemma 4 12B', 'discord.py', 'SQLite', 'APScheduler', 'yfinance', 'Google Calendar API'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Basketball Intelligence Platform',
    description:
      'An NBA stats platform for fans and analysts, covering 47 seasons and about 1.09 million player games pulled from the NBA\'s stats site into a DuckDB database and modeled with dbt. The live dashboard has player and team pages, advanced-stat leaderboards, team payroll against the salary cap back to 1984-85, and a first-pass game predictor. An arcade section adds trivia games and a team builder where you build or draft an eight-player roster. 75 data checks and 260 tests guard it, and a weekly job keeps it current.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Plotly', 'nba_api', 'scikit-learn', 'pytest', 'Docker'],
    featured: true,
    image: shotBasketball,
    imageAlt:
      'Basketball IQ dashboard showing the 2025-26 season overview, league leaders and efficiency leaders',
    sourceCode: 'https://github.com/Ajaiah-D/basketball-intelligence-platform',
    livePreview: 'https://basketball-intelligence-platform.streamlit.app/'
  },
  {
    name: 'Portfolio Risk Analysis Dashboard',
    description:
      'An interactive tool where you build a stock portfolio from 530+ S&P 500 stocks and ETFs and see how its risk and returns compare to just holding the market, using measures like Sharpe ratio, max drawdown, and value at risk. Every result comes with a plain-English explanation. It also suggests better weightings of the same holdings and runs Monte Carlo simulations of future outcomes. Prices update every weekday through GitHub Actions, and 151 automated tests check the math and the app.',
    stack: ['Python', 'Streamlit', 'Plotly', 'pandas', 'NumPy', 'SQLite', 'GitHub Actions', 'pytest'],
    featured: true,
    image: shotPortfolioRisk,
    imageAlt:
      'Portfolio Risk Analysis app showing an example portfolio against SPY: total return, volatility, Sharpe ratio, max drawdown and automatic insights',
    sourceCode: 'https://github.com/Ajaiah-D/Portfolio-Risk-Analysis',
    livePreview: 'https://ajaiah-d-portfolio-risk--streamlit-appportfolio-analyzer-ij9gqb.streamlit.app/'
  },
  {
    name: 'Healthcare Claims Analytics',
    description:
      'An analysis of synthetic Medicare claims for about 116,000 patients over three years, including 5.5 million prescription records, looking at what drives cost and who ends up back in the hospital within 30 days. Spending is concentrated, with the top 10% of patient-years accounting for 62% of the total. The most expensive pair of conditions, heart failure plus COPD, averages about nine times as much per year as having neither. The results feed a public Tableau dashboard, with the data work done in SQL and Python.',
    stack: ['Python', 'pandas', 'SQL', 'SQLite', 'Jupyter Notebooks', 'Tableau', 'pytest'],
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
      'An automated pipeline that pulls 160+ economic data series from the Federal Reserve every day, covering national measures like inflation and interest rates plus unemployment, home prices, and income for all 50 states. Its recession warning signal caught all 9 U.S. recessions since 1959 in a backtest, though the thresholds were tuned on that same history. The dashboard writes its own plain-English monthly summary and can show what the data looked like on any past date. A daily GitHub Actions job stores the data in AWS S3 and builds it with Python and dbt.',
    stack: ['Python', 'dbt', 'DuckDB', 'AWS S3', 'GitHub Actions', 'Streamlit', 'Plotly', 'pandas'],
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
      'A soccer analysis tool that follows the players in a broadcast match clip, sorts them into teams by kit color, and estimates each team\'s shape, like a 4-4-2, for each spell of possession. It tracks players through camera pans and zooms and draws them on a top-down pitch map. On a 30-second Bundesliga test clip it followed about 20 players per frame, with YOLOv8 and OpenCV doing the detection and video work. It needs a manual pitch calibration and works on single-shot clips, and 30 seconds is too short to call a formation with confidence.',
    stack: ['Python', 'PyTorch', 'YOLOv8', 'ByteTrack', 'OpenCV', 'scikit-learn', 'SciPy', 'NumPy'],
    sourceCode: 'https://github.com/Ajaiah-D/player-tracking',
    livePreview: null
  },
  {
    name: 'Cross-League Player Value Translation Engine',
    description:
      'A model that estimates how a soccer player\'s output changes after a move to a different league, built for scouts weighing a signing from a lower division. It follows 1,871 real transfers by 1,460 players across nine leagues, adjusts for age, and puts every league on one scale (Premier League 1.36, MLS 1.00, MLS NEXT Pro 0.58). On 372 held-out moves between U.S. leagues, its projections tracked what players actually did (rank correlation 0.58, well beyond shuffled results). It also found that 54% of players moving up from MLS NEXT Pro to MLS never reached 450 minutes there.',
    stack: ['Python', 'pandas', 'NumPy', 'rapidfuzz', 'Selenium', 'Pydantic', 'uv', 'pytest'],
    featured: true,
    image: shotTranslation,
    imageAlt:
      'Dot-and-interval chart of league difficulty versus MLS: Premier League about 1.36, La Liga 1.25, Serie A 1.15, Ligue 1 1.12, Bundesliga 1.11, MLS 1.00, USL Championship 0.71, USL League One 0.68, MLS NEXT Pro 0.58',
    sourceCode: 'https://github.com/Ajaiah-D/soccer-translation',
    livePreview: null
  },
  {
    name: 'Scouting Hub',
    description:
      'A scouting app for comparing soccer players, built with Thomas Tsangou. It covers about 16,500 player seasons from Europe\'s top five leagues, 2017-18 to 2023-24, taken from an FBref snapshot and stored in Google BigQuery. Search any player to see percentile bars against others in the same position, with counting stats per 90 minutes and "lower is better" stats like cards and errors flipped. A similar-players finder ranks the closest matches and compares any two head to head on a chart, goalkeepers included.',
    stack: ['Python', 'pandas', 'NumPy', 'BeautifulSoup', 'BigQuery', 'Google Cloud Storage', 'Streamlit', 'Plotly', 'Docker'],
    featured: true,
    image: shotScoutingHub,
    imageAlt:
      'Scouting Hub app showing the 2023-24 profile of Mohamed Salah: stat tiles and percentile bars against other forwards',
    sourceCode: 'https://github.com/M4G1C14N5/scouting-report',
    livePreview: 'https://fae.camuedlabs.org'
  },
  {
    name: 'Scouting Intelligence Pipeline & Dashboard',
    description:
      'A scouting tool that looks for undervalued outfield players in Europe\'s top five leagues by weighing two seasons of on-field performance against market value. It matched 94.9% of 3,008 player seasons (900+ minutes) across two data sources that spell names differently, scored each player against others in their position, and ranked 2,854 player seasons by performance per euro of value in a Tableau dashboard.',
    stack: ['Python', 'pandas', 'NumPy', 'fuzzywuzzy', 'unidecode', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/DA-Course-Scouting-Intelligence-Pipeline-and-Dashboard',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/ScoutingIntelligenceDashboard_17762156549180/Overview'
  },
  {
    name: 'Options Strategy Research',
    description:
      'A trading strategy research project, backtested on three years of market history, that went through six versions with every failure kept and written up. A study of 1,371 sharp moves across 10 ETFs found that buying sharp drops paid off 58 to 62% of the time over five days, while betting against rallies didn\'t. Every options version that traded lost money, and the last two lost more than half the account, which pointed to the options setup rather than the idea. The final version trades plain shares and is the first profitable one, up 3.8% with an 8% max drawdown, though that is still less than Treasury bills paid.',
    stack: ['Python', 'QuantConnect LEAN', 'pandas', 'NumPy', 'Git'],
    sourceCode: null,
    livePreview: null
  },
  {
    name: 'Soccer Media Benchmarking Dashboard',
    description:
      'A small data pipeline that pulls YouTube stats for five major soccer media channels (B/R Football, CBS Sports Golazo, The Athletic FC, Tifo Football, Copa90) and ranks them by views per subscriber, so a smaller channel with an audience that actually watches can outrank a bigger one. Each run saves a timestamped snapshot to Google BigQuery, dbt turns it into clean tables, and a Streamlit dashboard shows the rankings. It is a simple first version, run by hand, and currently shows only the latest snapshot.',
    stack: ['Python', 'YouTube Data API', 'BigQuery', 'dbt', 'SQL', 'Streamlit', 'Plotly'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-media-benchmarking',
    livePreview: null
  },
  {
    name: 'Sleep Better',
    description:
      'A web app built as a team capstone at Hunter College. Users enter nine details about their sleep and lifestyle and get a machine learning prediction of their sleep efficiency. I trained the random forest model on a public Kaggle sleep dataset of 452 people and built the Python FastAPI backend that runs it and saves each prediction to a PostgreSQL database. A teammate built most of the React frontend and its Firebase sign-in. The frontend went live on Render, but the backend was never deployed, so the live page can\'t run a prediction.',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'React', 'TypeScript', 'Firebase', 'Render'],
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