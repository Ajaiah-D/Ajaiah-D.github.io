import courseraLogo from './assets/certificates/Coursera.png'

export const about = {
  name: 'Ajaiah Darlington',
  role: 'Aspiring Data Scientist & Analyst',
  description:
    "I'm a recent CS grad who blends structure, strategy, and curiosity. I enjoy building projects that merge sports, finance, and thoughtful systems design.",
  resume: 'https://your-resume-link.pdf',
  social: {
    github: 'https://github.com/Ajaiah-D',
    linkedin: 'https://www.linkedin.com/in/ajaiah-darlington-aba9b618b/'
  }
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
  }
]

export const certificates = [
  {
    title: 'Financial Markets',
    issuer: 'Coursera / Yale',
    image: courseraLogo,
    link: 'https://coursera.org/share/63146e50ba60538be607985419ec060e' // Replace
  },
  {
    title: 'Introduction to Data Engineering',
    issuer: 'Coursera',
    image: courseraLogo,
    link: 'https://coursera.org/share/9d7e9ad967679aeafb2141d74e7fe069' // Replace
  }
]

export const contact = {
  email: 'your.email@example.com',
}