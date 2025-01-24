"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "When will Raftar be released?",
    answer:
      "We're currently in the development phase. Stay tuned to our Discord and social media channels for the latest updates on our release timeline.",
  },
  {
    question: "What platforms will Raftar be available on?",
    answer:
      "We're initially targeting PC release, with plans to expand to consoles and mobile platforms in the future.",
  },
  {
    question: "Will Raftar feature real Pakistani locations?",
    answer: "Yes! We're recreating iconic Pakistani streets and landmarks to provide an authentic racing experience.",
  },
  {
    question: "How can I get involved in the development process?",
    answer:
      "Join our Discord community to participate in discussions, provide feedback, and potentially join beta testing phases.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 glow-text"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="w-full max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <AccordionItem value={`item-${index}`} className="glassmorphism rounded-lg overflow-hidden">
                  <AccordionTrigger className="text-white hover:text-[#1e3354] transition-colors px-6 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 py-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

