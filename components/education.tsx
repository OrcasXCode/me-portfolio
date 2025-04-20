"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Sept 2022 – Expected June 2026",
    location: "Punjab, India",
    grade: "CGPA: 7.23",
  },
  {
    institution: "Shree P.V Modi High School",
    degree: "12th with Science",
    period: "April 2019 - March 2022",
    location: "Rajkot, Gujarat",
    grade: "Percentage: 72.46%",
  },
  {
    institution: "Saint Paul's School (ICSE)",
    degree: "10th with Science",
    period: "April 2016 - March 2017",
    location: "Rajkot, Gujarat",
    grade: "Percentage: 79%",
  },
]

export default function Education() {
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
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 via-white to-purple-50 opacity-80"></div>
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
            Education
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
          className="max-w-3xl mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-1">{edu.degree}</p>
                  <p className="text-gray-700 mb-1">{edu.location}</p>
                  <p className="text-gray-700">{edu.grade}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
