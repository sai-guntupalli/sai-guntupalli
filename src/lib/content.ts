export const site = {
  name: "Sai Guntupalli",
  description:
    "Senior Data Engineer & Python Developer specializing in Agentic AI, PySpark, AWS, and Snowflake.",
  email: "sai.guntupalli.career@gmail.com",
  location: "Edison, New Jersey",
  github: "https://github.com/sai-guntupalli",
  linkedin: "https://www.linkedin.com/in/sai-sri-vatsava-guntupalli/",
  // Prefixed with basePath when exporting for GitHub Pages project hosting.
  resume:
    (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/sai-guntupalli-resume.pdf",
  role: "Senior Data Engineer & Python Developer",
  shortBio:
    "Ten years building data pipelines across media and finance, now pairing Snowflake and AWS with agentic AI at Disney.",
  tools: [
    "Python",
    "PySpark",
    "AWS",
    "Snowflake",
    "Databricks",
    "Airflow",
    "LangChain",
    "LangGraph",
  ],
  bio: "Senior Data Engineer and Python Developer with 10 years building scalable data pipelines and backend systems across media and finance. Currently at Disney via Tavant, combining core data engineering with agentic AI.",
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  client?: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    company: "Tavant",
    role: "Technical Architect",
    start: "January 2026",
    end: "Present",
    duration: "8 months",
    location: "Texas, United States",
    client: "The Walt Disney Company",
    highlights: [
      "Building a SQL Agent (Python + AWS Bedrock) so Disney marketing teams can query Snowflake through MS Teams using natural language.",
      "Built and deployed an autonomous OnCall Agent with Python, LangChain, and LangGraph: it integrates with Airflow to trigger on failures, run root-cause analysis, and self-heal in production.",
      "Integrated GitHub Copilot into the development lifecycle to accelerate code reviews, generate unit tests, and refactor legacy Python microservices.",
      "Managing Disney's Acquisition Data Foundation (ADF): ingesting marketing spend data from social media vendors into Snowflake via Python, PySpark, Databricks, Fivetran, and Airflow.",
      "Owning end-to-end pipeline reliability so data is available daily for downstream marketing analytics.",
    ],
  },
  {
    company: "Tavant",
    role: "Associate Technical Architect",
    start: "May 2024",
    end: "January 2026",
    duration: "1 year 9 months",
    location: "New Jersey, United States",
  },
  {
    company: "Wipro",
    role: "Technical Lead",
    start: "November 2023",
    end: "May 2024",
    duration: "7 months",
    location: "New Jersey, United States",
  },
  {
    company: "Tavant",
    role: "Technical Analyst",
    start: "March 2022",
    end: "December 2023",
    duration: "1 year 10 months",
    location: "New Jersey, United States",
  },
  {
    company: "Tavant",
    role: "Technical Lead",
    start: "October 2021",
    end: "March 2022",
    duration: "6 months",
    location: "Hyderabad",
  },
  {
    company: "Tavant",
    role: "Senior Software Engineer",
    start: "April 2019",
    end: "November 2021",
    duration: "2 years 8 months",
    location: "Hyderabad Area, India",
  },
  {
    company: "Tavant",
    role: "Software Engineer",
    start: "April 2017",
    end: "April 2019",
    duration: "2 years 1 month",
    location: "Bengaluru",
  },
  {
    company: "Tavant",
    role: "Project Trainee",
    start: "October 2016",
    end: "April 2017",
    duration: "7 months",
    location: "Bengaluru",
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  href?: string;
  icon: "agent" | "fund" | "mentor" | "pipeline";
};

export const projects: Project[] = [
  {
    name: "OnCall Agent",
    category: "Agentic AI",
    description:
      "An autonomous on-call agent built with LangChain and LangGraph. It watches Airflow failures, reads the logs, runs root-cause analysis, and either self-heals or hands the engineer a clear next step.",
    href: "https://github.com/sai-guntupalli/OnCallAgent",
    icon: "agent",
  },
  {
    name: "AI Hedge Fund",
    category: "Finance · AI",
    description:
      "A multi-agent trading research system where specialized agents collaborate on analysis, risk, and decision-making across market data.",
    href: "https://github.com/sai-guntupalli/ai-hedge-fund",
    icon: "fund",
  },
  {
    name: "CodeMentor",
    category: "EdTech · LLMs",
    description:
      "An adaptive coding learning platform for Python and SQL with LLM-powered code review, progressive hints, and skill tracking.",
    href: "https://github.com/sai-guntupalli/codementor",
    icon: "mentor",
  },
  {
    name: "SQL Agent",
    category: "Data · NLP",
    description:
      "Natural-language access to Snowflake for marketing teams through Microsoft Teams. English-to-SQL via AWS Bedrock, with Python handling execution and summarization.",
    icon: "pipeline",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-an-oncall-agent-with-langgraph",
    title: "Building an OnCall Agent with LangGraph",
    date: "2025-11-12",
    dateLabel: "November 12, 2025",
    excerpt:
      "How I wired LangGraph, Airflow, and log analysis into an agent that responds to pipeline failures before a human has to dig through Slack.",
    content: [
      "On-call is rarely about writing new code. It is about reading noisy signals fast, deciding what matters, and either fixing the issue or escalating with context.",
      "That is why I built an OnCall Agent: a LangGraph workflow that triggers when Airflow jobs fail, pulls the relevant logs, performs root-cause analysis, and either runs a self-healing script or posts a concise summary for the engineer on rotation.",
      "The agent is not magic. It is a disciplined pipeline: classify the failure, gather evidence, propose an action, and only act when confidence is high. Everything else stays in human hands.",
      "If you are building similar agentic systems for ops, start with a narrow failure class, measure how often the agent is right, and expand only after the boring cases are reliable.",
    ],
  },
  {
    slug: "why-data-engineers-should-learn-agentic-ai",
    title: "Why Data Engineers Should Learn Agentic AI",
    date: "2025-06-03",
    dateLabel: "June 3, 2025",
    excerpt:
      "Pipelines move data. Agents can move work. Here is why the next leap for data engineering looks a lot like orchestration with judgment.",
    content: [
      "Data engineers already think in DAGs, retries, and contracts. Agentic AI sits on top of that muscle: instead of only moving bytes, you can move decisions.",
      "At Disney I pair core data engineering with agentic patterns: SQL agents for business users, an on-call agent that handles pipeline failures, and automation that replaces copy-paste work in Slack and tickets.",
      "The skill that transfers best is not prompt poetry. It is system design: clear inputs, bounded tools, observable steps, and graceful failure. Those are data engineering instincts.",
      "If you already own Airflow, Snowflake, and AWS, you are closer to shipping useful agents than you might think. Start with one painful manual workflow and give an agent a short leash.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
