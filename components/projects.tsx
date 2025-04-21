"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Crypto Trade",
    description:
      "A robust platform for cryptocurrency trading with real-time updates. Built with a scalable architecture using queue-based systems, WebSocket, Redis, Pub/Sub, and PostgreSQL for high performance and data integrity.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "Pub/Sub", "Queue"],
    image: "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166929.jpg?t=st=1745174629~exp=1745178229~hmac=a4b3f8979a2fa6692ec420b36cd7da6bb6efcb4383605d9363ba2f51b496b13e&w=1380",
    period: "Sept 2024 - Nov 2024",
    github: "https://github.com/OrcasXCode/exchng_V2.0",
    demo: "#",
  },
  {
    title: "Wallet Wave",
    description:
      "A comprehensive payment platform supporting user and merchant logins, with email/phone authentication for users and Google login for merchants. Users can perform bank transactions securely.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "https://img.freepik.com/free-vector/people-using-mobile-bank-remittance-money_74855-6617.jpg?t=st=1745174693~exp=1745178293~hmac=f4fad4ad49b9f78156b04ed9d8f5023f8d90d022366cb90d8fe660ec2e7b092f&w=1060",
    period: "Jan 2024 - Feb 2024",
    github: "https://github.com/OrcasXCode/paytm_V2.1",
    demo: "#",
  },
  {
    title: "Bazaar",
    description:
      "An e-commerce platform where users can buy and sell products. Built with MERN stack featuring user authentication, a product catalog, and a shopping cart system.",
    tech: ["Node.js", "Express", "MongoDB", "React.js", "Tailwind CSS"],
    image: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?t=st=1745174720~exp=1745178320~hmac=28bff65fcd0c8ea8d7670ec5bab5b2a3e0ed0ee281c1270f13992bb491c6721e&w=1380",
    period: "Feb 2023 - Apr 2023",
    github: "https://github.com/OrcasXCode/EcommerceStore",
    demo: "#",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-50 via-white to-purple-50 opacity-80"></div>
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
            My Projects
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100">
                <div className="overflow-hidden h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 z-10"></div>
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {project.title}
                    </span>
                    <span className="text-sm font-normal text-gray-500">{project.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
