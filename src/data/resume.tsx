import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anh Luong",
  initials: "AL",
  url: "https://github.com/thatchloe",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/barcelona",
  description:
    "Software Engineer strongly interested in AI and Entrepreneurship. I love building things and helping people.",
  summary:
    "I am currently building my own SaaS business in my free time and actively looking for opportunity to work and learn from real world projects. In the past, [I pursued a degree in computer engineering](/#education), [interned at tech companies in Spain](#work), and [competed multiple side projects for fun](#projects)",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "SQL",
    "PostgreSQL",
    "Docker",
    "AWS",
    "GCP",
    "FastAPI",
    "Flask",
    "Git",
    "Github",
    "CI/CD (gitlab)",
    "Jira",
    "OpenAI API",
    "Debugging",
    "Unit testing",
    "Airflow",
    "Snowflake",
    "ETL job",
    "Terraform",
    "Machine learning",
    "Deep learning",
    "Pandas",
    "Tensorflow",
    "scikit-learn",
    "Numpy",
    "Keras",
    "MLflow",
    "Data structures",
    "Algorithms"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "luonghoanganh9801@gmail.com",
    tel: "+34611644497",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thatchloe",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hoang-anh-843191132/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Bitpanda",
      href: "https://www.bitpanda.com/en",
      badges: ["Hybrid"],
      location: "Barcelona, Spain",
      title: "Intern Data Engineer",
      logoUrl: "/bitpanda.png",
      start: "April 2024",
      end: "October 2024",
      description:
        "Handled data ingestion requests from stakeholders, automated loading data from data sources into data warehouse. Tech stack: Airflow, SQL, AWS, Snowflake, gitlab CI/CD, docker, Terraform, Python.\nPanda Pay Project: Participated in developing the data pipeline for PandaPay project, automated the retrieval of transaction data from different payment service providers through their APIs and loaded the retrieved data into data warehouse. Learned about data transformation with dbt, applied business logic to clean, normalize and transform raw data for finance reconciliation purpose. Tech stack: Airflow, FastAPI, Terraform, Snowflake, Sql, DBT tool.",
    },
    {
      company: "Terraview",
      href: "https://terraview.com/",
      badges: ["Remote"],
      location: "Zurich, Switzerland",
      title: "Intern Software Engineer",
      logoUrl: "/terraview.png",
      start: "Jan 2021",
      end: "Jul 2021",
      description:
        "Worked closely with Innovation team on viticultural related projects. Analyzed remote radar data using Python APIs. Autonomously developed a POC for carbon footprint for vineyard using Pandas, Python. Documented software designs and findings. Wrote clean, well-documented code, made pull requests to codebase.",
    },
  ],
  projects: [
    {
      title: "QueryGPT",
      href: "",
      dates: "Ongoing",
      active: true,
      description:
        "Developing a web application that helps users communicate with their data through human language using prompt engineering and RAG. The application connects with user's database and generate chat bots for the database, allowing them to integrate their chatbots into their websites, slack etc.",
      technologies: [
        "FastAPI",
        "openai API",
        "pinecone",
        "supabase",
        "HTML",
        "CSS"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
     title: "Ecommerce",
      href: "https://catto.onrender.com",
      dates: "01-05-2023",
      active: true,
      description:
        "An ecommerce website, allow users to sell and buy products on the platform.",
      technologies: [
        "Django",
        "render",
        "Javasript",
        "HTML",
        "CSS"
      ],
      links: ["https://catto.onrender.com"],
      image: "",
      video: "",
    }
  ],
  education: [
    {
      school: "Le Wagon",
      href: "https://www.lewagon.com/",
      degree: "9-week intensive Data Science Bootcamp",
      logoUrl: "/lewagon.png",
      start: "Jul 2023",
      end: "Jul 2023",
      description: "Gained hands-on experience in Pandas, scikit-learn, Numpy, MLflow.",
    },
    {
      school: "Universidad de Valladolid",
      href: "https://www.uva.es/",
      degree: "Bachelor of Computer Engineering",
      logoUrl: "/uva.png",
      start: "2018",
      end: "2020",
      description: "",
    },
  ],
  languages: [
    "English",
    "Spanish",
    "Vietnamese"
  ],
  certificates: [
    {
      name: "Google Professional Data Analytics (coursera)",
      url: "https://www.coursera.org/professional-certificates/google-data-analytics"
    }
  ]
} as const;
