"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { faqs, features, howItWorks, testimonial } from "../data.js"
import HeroSection from "@/components/hero.jsx"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
}

export default function Page() {
  return (
    // header
    <>
      <HeroSection />
      <div className="bg-gray-50 text-gray-900">
        {/* FEATURES */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Powerful Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 hover:shadow-xl border-primary/20 hover:border-primary transition rounded-2xl">
                  <CardContent className="text-center flex flex-col items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                      {f.icon}
                    </div>

                    <h3 className="font-semibold text-xl">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-4 max-w-7xl mx-auto bg-white rounded-3xl shadow-sm">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorks.map((h, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-4 p-4"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                  {h.icon}
                </div>

                <h3 className="font-semibold text-xl">{h.title}</h3>
                <p className="text-gray-600">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Our Users Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonial.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition rounded-2xl bg-white">
                  <CardContent className="flex flex-col items-center gap-4 text-center">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-16 h-16 rounded-full border-2 border-primary/30 object-cover"
                    />

                    <p className="italic text-gray-600">"{t.quote}"</p>

                    <p className="font-semibold">{t.author}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                    <p className="text-primary text-sm">{t.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 px-4">
                  {f.question}
                </AccordionTrigger>

                <AccordionContent className="text-gray-600 px-4 pb-4">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#6c47ff] text-white text-center rounded-none">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Accelerate Your Career?
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8 text-gray-100 max-w-xl mx-auto"
          >
            Join thousands of professionals advancing their careers with
            AI-powered tools and expert guidance.
          </motion.p>

          <Link href="/dashboard">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Button className="bg-white text-[#6c47ff] px-8 py-3 rounded-xl hover:bg-gray-100 shadow-md transition">
                Start Your Journey{" "}
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </section>
      </div>
    </>
  )
}
