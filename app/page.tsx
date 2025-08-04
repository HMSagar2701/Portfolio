"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  Code,
  Cloud,
  Server,
  Database,
  Shield,
  Monitor,
  GitBranch,
  Zap,
  Trophy,
  ExternalLink,
  ChevronDown,
} from "lucide-react"
import ProjectSection from "@/components/ProjectSection"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "certifications", "achievements", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        // Fix: Ensure all section IDs are present and in correct order
        // No error here, but keep for clarity
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Sticky Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sagar
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "certifications", label: "Certifications" },
                { id: "achievements", label: "Achievements" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-cyan-400 ${activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center max-w-2xl w-full pt-10">
          {/* Profile Photo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
            <img
              src="/Profile1.jpeg"
              alt="Sagar - Software Developer"
              className="w-full h-full rounded-full object-cover border-4 border-cyan-500 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border border-cyan-400/20"></div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2">
            Sagar
          </h1>

          {/* Role */}
          <div className="text-lg md:text-xl text-cyan-400 mt-4 font-medium">
            Software Developer
          </div>

          {/* Summary */}
          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            Innovative Developer & DevOps Engineer focused on development, automation and cloud-native solutions.
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 border border-cyan-500/30 bg-black/30 rounded-full px-4 py-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Bangalore, India
            </div>
            <div className="flex items-center gap-2 border border-cyan-500/30 bg-black/30 rounded-full px-4 py-2 text-sm text-gray-300">
              <Calendar className="w-4 h-4 text-cyan-400" />
              3+ Years Experience
            </div>
          </div>

          {/* Scroll Button */}
          <button
            onClick={() => scrollToSection("about")}
            className="mt-10 p-3 rounded-full border border-cyan-400 hover:bg-cyan-400/10 transition"
            aria-label="Scroll to About Section"
          >
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </button>
        </div>
      </motion.section>



      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-lg p-10">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              I’m a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> and
              <span className="text-blue-400 font-semibold"> DevOps Engineer</span> with over <span className="font-medium text-white">3 years of hands-on experience</span> in building robust, scalable, and secure web applications and cloud infrastructure.
            </p>
            <br />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              My core expertise spans modern technologies like <span className="text-white font-medium">TypeScript, JavaScript, React, Next.js, Node.js, MongoDB</span>, and cloud platforms like <span className="text-white font-medium">Azure</span>. I specialize in implementing <span className="text-white font-medium">CI/CD pipelines</span>, managing cloud resources using <span className="text-white font-medium">infrastructure as code</span>, and ensuring smooth deployments at scale.
            </p>
            <br />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              I thrive in <span className="text-white font-medium">collaborative, agile environments</span> where innovation, speed, and stability intersect. Whether it’s optimizing frontend performance or automating infrastructure delivery, I’m driven by engineering excellence and delivering impact.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        id="skills"
        className="py-24 px-6 bg-black/20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "DevOps & CI/CD",
                icon: <Server className="w-6 h-6" />,
                skills: [
                  "Docker", "Kubernetes", "Helm", "Ansible",
                  "Terraform", "CloudFormation", "ARM Templates",
                  "Jenkins", "GitLab CI/CD", "Azure DevOps", "GitHub Actions",
                ],
              },
              {
                title: "Cloud Services",
                icon: <Cloud className="w-6 h-6" />,
                skills: [
                  // Azure
                  "Azure VMs", "Azure AKS", "Azure Blob Storage", "Azure Functions", "Azure VNET",
                  // AWS
                  "AWS EC2", "AWS EKS", "AWS Lambda", "AWS S3", "AWS RDS", "AWS IAM", "AWS CloudWatch",
                ],
              },
              {
                title: "Languages & Scripting",
                icon: <Code className="w-6 h-6" />,
                skills: [
                   "Golang", "JavaScript", "TypeScript", "Java", "Python", "Solidity", "Shell",
                ],
              },
              {
                title: "Frontend & Backend",
                icon: <Code className="w-6 h-6" />,
                skills: [
                  "React", "Next.js", "Node.js", "Express.js",
                  "MongoDB", "REST APIs", "Tailwind CSS", "HTML5",
                ],
              },
              {
                title: "Monitoring & Logging",
                icon: <Monitor className="w-6 h-6" />,
                skills: [
                  "Prometheus", "Grafana", "Elasticsearch",
                  "Logstash", "Kibana", "ELK Stack",
                ],
              },
              {
                title: "Security & VCS",
                icon: <Shield className="w-6 h-6" />,
                skills: [
                  "Git", "GitHub", "GitLab",
                  "HashiCorp Vault", "CyberArk", "SonarQube", "Fortify",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full text-sm text-cyan-200 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      <motion.section
        id="projects"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <ProjectSection />
      </motion.section>
      {/* Experience */}
      <motion.section
        id="experience"
        className="py-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 md:p-10 shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="w-12 h-12 min-w-[3rem] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-sm">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">DevOps Engineer</h3>
                <p className="text-cyan-400 text-lg font-medium mb-1">WIPRO TECHNOLOGIES</p>
                <p className="text-gray-400 text-sm mb-2">Azure Migration Project | Nov 2022 – Present</p>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              {[
                "Migrated 10+ on-premises applications to Azure, reducing operational costs by 30% and accelerating deployments by 40%.",
                "Automated 100+ manual deployment and configuration tasks using Python, Ansible, Shell scripts, and GitLab CI/CD, cutting deployment time by 40%.",
                "Provisioned scalable, fault-tolerant Azure infrastructure (VMs, databases, file storage) using Terraform across availability zones.",
                "Integrated HashiCorp Vault with Azure Key Vault to securely manage secrets across multi-region environments.",
                "Designed disaster recovery plans with automated backups and Azure Site Recovery, enabling system recovery in under 1 hour.",
                "Enhanced AKS reliability with auto-scaling and health probes, reducing downtime during peak traffic by 25%.",
                "Built Grafana dashboards with Prometheus to monitor VM performance and Kubernetes health, improving observability by 60%.",
                "Streamlined multi-environment deployments using Helm on AKS, enabling consistent and reliable application rollouts.",
              ].map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section> 


      {/* Certifications */}
      <motion.section
        id="certifications"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AWS Certified Cloud Practitioner", provider: "Amazon Web Services" },
              { name: "AWS Solution Architect", provider: "Amazon Web Services" },
              { name: "Azure Fundamentals (AZ-900)", provider: "Microsoft" },
              { name: "Azure Administrator (AZ-104)", provider: "Microsoft" },
              { name: "Java Full Stack Development", provider: "StackRoute" },
              { name: "DevOps Beginner to Advanced", provider: "Koenig Solutions" },
              { name: "Gemini Code Assist", provider: "Google" },
              { name: "GenAI Fundamentals & Google Cloud GenAI - L2", provider: "Google Cloud" },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                </div>
                <p className="text-gray-400">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        id="achievements"
        className="py-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements
          </h2>

          {/* Project Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {[
              {
                title: "Azure Disaster Recovery Setup",
                description:
                  "Implemented automated disaster recovery with Azure Site Recovery, achieving system recovery in under 1 hour.",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: "Helm-based AKS Rollouts",
                description:
                  "Designed seamless multi-environment application deployments with consistent Helm configurations.",
                icon: <Server className="w-8 h-8" />,
              },
              {
                title: "Automated CI/CD Pipeline",
                description:
                  "Built a fully automated deployment pipeline, reducing deployment time by 40% across regions.",
                icon: <GitBranch className="w-8 h-8" />,
              },
              {
                title: "Infrastructure as Code",
                description:
                  "Developed scalable Azure infrastructure using Terraform, incorporating fault-tolerant availability zones.",
                icon: <Cloud className="w-8 h-8" />,
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-cyan-400">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Rewards & Recognition */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Rewards & Recognition
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Trophy className="w-8 h-8 text-yellow-400" />,
                  title: "Extra Mile Award",
                  description:
                    "Wipro's recognition for consistently going beyond project expectations.",
                },
                {
                  icon: <Award className="w-8 h-8 text-cyan-400" />,
                  title: "Client Recognition",
                  description:
                    "Awarded for delivering key milestones with excellence and high client satisfaction.",
                },
              ].map((award, index) => (
                <div key={index} className="flex items-start gap-4">
                  {award.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                    <p className="text-gray-300 text-sm md:text-base">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>


      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                label: "Email",
                value: "sagarhm2701@gmail.com",
                href: "mailto:sagarhm2701@gmail.com",
                display: <span className="text-[13px]">sagarhm2701@gmail.com</span>,
              },
              {
                icon: <Phone className="w-8 h-8" />,
                label: "Phone",
                value: "+91 9663597705",
                href: "tel:+919663597705",
                display: "Call: +91 96635 97705",
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                label: "LinkedIn",
                value: "https://www.linkedin.com/in/h-m-sagar/",
                href: "https://www.linkedin.com/in/h-m-sagar/",
                display: "Connect on LinkedIn",
              },
              {
                icon: <Github className="w-8 h-8" />,
                label: "GitHub",
                value: "https://github.com/HMSagar2701",
                href: "https://github.com/HMSagar2701",
                display: "View GitHub Profile",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label={`Visit ${contact.label}`}
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{contact.label}</h3>
                <p className="text-gray-300 text-sm break-words">{contact.display}</p>
                <ExternalLink className="w-4 h-4 text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>


        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-8 px-6 border-t border-cyan-500/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Sagar. Designed and developed by Sagar.
          </p>
        </div>
      </motion.footer>
    </motion.div>
  )
}
