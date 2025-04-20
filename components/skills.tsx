"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layout, Terminal, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-blue-500" />,
    skills: ["HTML & CSS", "Tailwind CSS", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-blue-500" />,
    skills: ["Node.js", "Express", "gRPC", "Prisma ORM", "OpenAPI"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-blue-500" />,
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="h-6 w-6 text-blue-500" />,
    skills: ["Docker", "Kubernetes", "AWS", "Git"],
  },
  {
    title: "Other",
    icon: <GitBranch className="h-6 w-6 text-blue-500" />,
    skills: ["WebSocket", "Pub/Sub", "Kafka", "Prometheus", "Grafana", "Turborepo"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 via-white to-blue-50 opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"
          ></motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
