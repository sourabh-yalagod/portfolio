export const portfolioData = {
  name: "Sourabh Yalagod",
  title: "Full Stack Engineer | Distributed Systems | FinTech",
  email: "sourabhofficial9980@gmail.com",
  phone: "+91 87925 37598",
  location: "Belagavi, Karnataka – 590003",
  github: "https://github.com/sourabh-yalagod",
  linkedin: "https://linkedin.com/in/sourabh-yalagod",
  
  experience: [
    {
      title: "Software Engineer Intern",
      company: "0101 Digit All",
      period: "June 2025 – September 2025",
      highlights: [
        "Resolved 40+ production bugs and merged 50+ PRs in FinTech project with QA verification",
        "Singlehandedly developed Webinar Registration App processing 500+ registrations with CCAvenue payment gateway",
        "Designed responsive UI using Figma and implemented RESTful APIs with 99%+ uptime",
        "Practiced clean code standards and Git workflows in Agile sprints"
      ]
    }
  ],
  
  skills: {
    frontend: "TypeScript, React.js, Next.js, Redux, Tailwind CSS, REST API integration",
    backend: "Java, Spring Boot, Node.js, Microservices, JWT Auth, Redis Caching, Webhooks, SSE",
    databases: "SQL, MongoDB, PostgreSQL, Redis",
    cloud: "AWS (EC2, Lambda, S3, SNS, SQS, VPC)",
    devops: "Git, Docker, Postman, CI/CD pipeline basics",
    corecs: "Data Structures, Algorithms, DBMS, OS, Networking"
  },
  
  projects: [
    {
      title: "Crypto Exchange Platform",
      subtitle: "Distributed Trading System",
      description: "High-frequency trading platform with real-time order matching and payment integration",
      highlights: [
        "Built 6 microservices in Spring Boot handling 1K+ concurrent orders/minute with sub-100ms latency",
        "Implemented JWT + SSO authentication and real-time orderbook via WebSockets",
        "Integrated Stripe payment gateway with batch processing for 10 orders per batch",
        "Optimized order matching using Redis ZSet achieving 99.9% throughput with PostgreSQL persistence",
        "Deployed on AWS Lambda/ECS and Render with Amplify frontend"
      ],
      tech: ["Spring Boot", "React.js", "WebSocket", "Redis", "PostgreSQL", "AWS", "Stripe"],
      github: "https://github.com/sourabh-yalagod/high-frequency-trading-using-spring-boot",
      live: "https://main.d2y2jk4cvn2s0d.amplifyapp.com/"
    },
    {
      title: "Vidsphere",
      subtitle: "Video Handling Platform",
      description: "Full-stack video streaming platform with user accounts, analytics, and CDN optimization",
      highlights: [
        "Full stack application built with React.js and Node.js deployed on Render",
        "Supported 105+ uploads with concurrent streaming to 12+ users",
        "Implemented JWT authentication, playlists, comments, likes, and real-time analytics dashboard",
        "Integrated Cloudinary CDN for media optimization, reducing bandwidth costs by 40%",
        "Achieved sub-3s video load times with intelligent caching strategies"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "JWT", "Render"],
      github: "https://github.com/sourabh-yalagod/Full-stack-React-video-project",
      live: "https://vidsphere-frontend.onrender.com/"
    }
  ],
  
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLS Gogte College of Commerce and Science, Belagavi",
    period: "2022–2025",
    cgpa: "8.5"
  }
};