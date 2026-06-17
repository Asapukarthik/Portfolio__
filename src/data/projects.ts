import blogAppImg from '../assets/Blog_Application.png'
import userMgmtImg from '../assets/User_Management_System.png'

export const projects = [
  {
    title: 'AI-Powered Resume Analyzer',
    subtitle: 'Full Stack + AI Integration',
    description: [
      "Built a production-grade Full Stack web application that parses uploaded resumes, extracts skills using NLP, and generates ATS compatibility scores with actionable improvement suggestions."
    ],
    techStack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'NLP', 'AI Models'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/',
    liveDemo: 'https://ai-powered-resume-analyzer-taupe.vercel.app/',
    glow: 'rgba(168, 85, 247, 0.25)',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-500/20',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Blog Platform REST API',
    subtitle: 'Node.js / Express.js / MongoDB / JWT',
    description: [
      "Built a secure and modular blog backend with RESTful APIs, featuring JWT authentication, role-based access control, and an MVC architecture for scalable and maintainable development."
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'MVC'],
    image: blogAppImg,
    github: "https://github.com/Asapukarthik/Blog---Application-",
    liveDemo: 'https://blog-application-lgle.onrender.com/',
    glow: 'rgba(59, 130, 246, 0.25)',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'IntelliRoom AI – Smart Hostel Energy Saver',
    subtitle: 'MERN + IoT + ML',
    description: [
      "Developed an IoT-based smart energy monitoring system using ESP32, integrating machine learning for energy wastage detection, gesture control and a React dashboard for real-time data visualization and management."
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'IoT', 'ESP32', 'Flask API', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
    github: "https://github.com/Asapukarthik/smart-energy-ml-iot",
    glow: 'rgba(6, 182, 212, 0.25)',
    color: 'from-cyan-400 to-blue-500',
    textColor: 'text-cyan-300',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/10'
  },
  {
    title: "User Management System",
    subtitle: "MERN Stack",
    description: [
      "A production-ready User Management System built on the MERN stack with advanced security features, Role-Based Access Control (RBAC), and a premium SaaS-style user interface."
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'MVC'],
    image: userMgmtImg,
    github: 'https://github.com/Asapukarthik/User-Management-System',
    liveDemo: "https://user-management-system-eight-ivory.vercel.app/",
    glow: 'rgba(59, 130, 246, 0.25)',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: "ThinkBoard - Smart Note Taking & Task Management App",
    subtitle: "Mern Stack ",
    description: [
      "A full-stack note-taking and task management application with file attachments, status tracking, and a beautiful media library—all with real-time Cloudinary integration and multiple theme support."
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'MVC'],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    github: 'https://github.com/Asapukarthik/ThinkBoard',
    glow: 'rgba(59, 130, 246, 0.25)',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/10'
  }
]
