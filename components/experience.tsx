"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Research Intern",
    company: "@L3Cube Labs",
    period: "June 2025 - Present",
    responsibilities: [
      "Exploring fine-tuning of transformer-based models (like BERT and IndicBERT).",
      "Developing and evaluating datasets and models for tasks such as Named Entity Recognition (NER), sentiment analysis, and question answering.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Hugging Face",
    ]

  },
  {
    title: "Project Intern- SecAudit Suite",
    company: "@NICE",
    period: "Feb 2025 – Jul 2025",
    responsibilities: [
      "Engineered a comprehensive security suite to automate penetration testing for Web Applications and REST APIs,providing a high-ROI alternative to commercial tools costing up to $50,000 annually",
      " Integrated a GoLang specific SAST module, increasing the accuracy of identifying code vulnerabilities as defined by OWASP Standards.",
      "Reduced testing environment setup time by 50% by developing and implementing Infrastructure as a Code (IaaC) scripts for automated and consistent deployment.",
    ],
    skills: ["Node.js","Semgrep","SecAudit"],
  },
  {
    title: "Project Intern",
    company: "@National Chemical Laboratory (CSIR)",
    period: "Feb 2025 – Jul 2025",
    responsibilities: [
      "Designed and delivered an interactive Unity-based training game for students (ages 12-16), simplifying complex periodic table concepts through gamification and improving their comprehension and engagement.",
    ],
    skills: ["TailwindCSS","React"],
  },
  // {
  //   title:  "Frontend Developer Intern",
  //   company: "Holiday Travels",
  //   period: "Nov 2024 - Jan 2025",
  //   responsibilities: [
  //     "Worked on frontend development.",
  //     "Enhanced UI/UX and improving user interaction",
  //     "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js"
  //   ],
  //   skills: ["React", "TypeScript", "GSAP","TailwindCSS"],
  // },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2024 – Jun 2024",
  //   responsibilities: [
  //     "Developed a CMS dashboard for eDeskshaam, enhancing UI/UX and improving user interaction",
  //     "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2023 – Dec 2023",
  //   responsibilities: [
  //     "Created four interactive educational games (Identify Fruits, Animals, Vehicles, Body Parts)",
  //     "Developed user-friendly homepage for educational games and collaborated with UX designers",
  //     "Worked closely with back-end developers to ensure seamless integration and cohesive user experience",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              {/* <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}