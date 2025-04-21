"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold text-white">
              Om<span className="text-blue-400"> Sureja</span>
            </Link>
            <p className="mt-2 text-gray-300 max-w-md">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/OrcasXCode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-white" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/omsureja"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:omsureja@gmail.com"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-white" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Om Sureja. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
