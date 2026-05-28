import courseraLogo from './assets/certificates/Coursera.png'
import resumePDF from './assets/ajaiahdarlington_resume_2026.pdf'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Data Analyst & Analytics Engineer',
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
    name: 'Football Player Profiler',
    description:
      'A cloud-backed football analytics app covering 7 seasons of player data across Europe\'s Big 5 leagues.',
    stack: ['Python', 'pandas', 'NumPy', 'Google Cloud Storage', 'BigQuery', 'Streamlit'],
    sourceCode: 'https://github.com/M4G1C14N5/scouting-report',
    livePreview: null
  },
  {
    name: 'Sleep Better',
    description:
      'A full-stack sleep quality app where users enter 10 personal metrics and receive a machine learning predicted sleep efficiency score, classified as Good or Poor.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'FastAPI', 'PostgreSQL', 'scikit-learn'],
    sourceCode: 'https://github.com/Ajaiah-D/HunterCapstoneSpring2025',
    livePreview: null
  },
  {
    name: 'Portfolio Risk Analysis Dashboard',
    description:
      'An interactive risk analysis tool where users build a portfolio of up to 25 S&P 500 stocks or ETFs and see six risk metrics benchmarked against SPY.',
    stack: ['Python', 'Streamlit', 'Plotly', 'pandas', 'NumPy', 'SQLite', 'Apache Airflow'],
    sourceCode: 'https://github.com/Ajaiah-D/portfolio-risk-analysis',
    livePreview: null
  },
  {
    name: 'Scouting Intelligence Pipeline & Dashboard',
    description:
      'A Python pipeline that identifies undervalued footballers across Europe\'s Big 5 leagues by combining performance stats with market valuations.',
    stack: ['Python', 'pandas', 'NumPy', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/DA-Course-Scouting-Intelligence-Pipeline-and-Dashboard',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/ScoutingIntelligenceDashboard_17762156549180/Overview'
  },
  {
    name: 'Healthcare Claims Analytics',
    description:
      'An analytics pipeline built on CMS synthetic Medicare data covering 116,000 beneficiaries and $1.24 billion in tracked spend across three years.',
    stack: ['Python', 'pandas', 'SQLite', 'Jupyter Notebooks', 'Tableau'],
    sourceCode: 'https://github.com/Ajaiah-D/Healthcare-Claims-Analytics',
    livePreview: 'https://public.tableau.com/app/profile/ajaiah.darlington/viz/HealthcareClaimsAnalyticsDashboard_17777471179890/HealthcareClaims-Summary'
  },
  {
    name: 'Soccer Media Benchmarking Dashboard',
    description:
      'A data pipeline that ingests daily YouTube statistics for five major soccer media outlets and surfaces which channels have audiences that actually watch.',
    stack: ['Python', 'YouTube Data API', 'BigQuery', 'dbt', 'Streamlit', 'Plotly'],
    sourceCode: 'https://github.com/Ajaiah-D/soccer-media-benchmarking',
    livePreview: null
  },
  {
    name: 'FRED Economic Indicators Pipeline',
    description:
      'A production-style data engineering pipeline that ingests six live macroeconomic indicators from the Federal Reserve on a daily schedule.',
    stack: ['Python', 'Apache Airflow', 'PySpark', 'Databricks', 'AWS S3', 'dbt', 'Streamlit', 'Plotly'],
    sourceCode: null,
    livePreview: null,
    inProgress: true
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