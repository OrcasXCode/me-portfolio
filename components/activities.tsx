"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award } from "lucide-react"

const activities = [
  {
    title: "Technical Team Lead",
    organization: "Department of Youth Capitals",
    period: "Sept 2023 - May 2024",
    description:
      'Led technical development for high-impact university events. Created the "Capture the Flag" cybersecurity competition platform and event management tools. Developed solutions such as payment portals for streamlined event operations.',
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Public Speaking Co-Lead",
    organization: "CiscoXLPUiGen",
    period: "Sept 2023 - May 2024",
    description:
      "Hosted events such as Symposium 1.0 and Symposium 2.0, leading workshops on various topics. Organized sessions featuring esteemed chief guests.",
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
]

const achievements = [
  {
    title: "3rd Rank in Pitching Pixels 2.0",
    description: "Achieved 3rd place in Pitching Pixels 2.0, organized by IIIT Bangalore.",
    icon: <Award className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Runner-up in Code-A-Haunt Hackathon",
    description: "Participated and ranked runner-up in the Hackathon organized in university.",
    icon: <Award className="h-6 w-6 text-blue-500" />,
  },
]

export default function Activities() {
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
    <section id="activities" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-80"></div>
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
            Experience & Achievements
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Extra-Curricular Activities
            </h3>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-full">
                        {activity.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{activity.title}</CardTitle>
                        <p className="text-sm text-gray-500">
                          {activity.organization} | {activity.period}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{activity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Achievements
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-blue-600"></div>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-3 rounded-full">
                        {achievement.icon}
                      </div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Certifications
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Rocking System Design", issuer: "Udemy", date: "Oct 2024" },
              { name: "0-100 Advanced Full Stack Web Development", issuer: "100xDevs", date: "Aug 2024" },
              { name: "Complete Web Development Bootcamp (MERN)", issuer: "Code Help", date: "March 2024" },
              { name: "Data Structures and Algorithms Master Course", issuer: "Code Help", date: "Dec 2023" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm border border-gray-100">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-gray-500">
                      {cert.issuer} | {cert.date}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
