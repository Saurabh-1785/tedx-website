'use client'

import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function About() {
  const { ref, isInView } = useInView()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-02-14T00:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' }
  ]

  return (
    <section id="about" className="pt-8 pb-20 md:py-16 bg-[#080808] text-white relative">
      {/* Top gradient to blend with Hero section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - About TEDx */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ABOUT <span className="text-tedx-red">TEDx</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
              </p>
              <p>
                Our event is called TEDxNIT Hamirpur, where x = independently organized TED event. At our TEDxNIT Hamirpur event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group.
              </p>
              <p>
                The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
              </p>
            </div>

            {/* Arrow Button to About Page - Timer Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="group inline-block"
              >
                <div
                  className="relative bg-[#0a0a0a] border border-tedx-red/40 rounded-xl px-6 py-3 transition-all duration-300 group-hover:border-tedx-red/80 group-hover:scale-105 flex items-center gap-3"
                  style={{ boxShadow: '0 0 15px rgba(235, 0, 40, 0.3), inset 0 0 10px rgba(235, 0, 40, 0.1)' }}
                >
                  <span className="text-white font-semibold text-base tracking-wide">Know More</span>
                  <svg
                    className="w-6 h-6 text-tedx-red transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(235, 0, 40, 0.5))' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Theme and Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            {/* INCHOATION - Styled Text */}
            <div className="mb-4">
              <h3
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.08em] cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: '0 0 40px rgba(235, 0, 40, 0.3), 0 0 80px rgba(235, 0, 40, 0.1)',
                }}
              >
                <span className="text-white/90">INCHOATION</span>
              </h3>
            </div>
            <p className="text-tedx-red text-xl md:text-2xl font-semibold mb-12" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              अंत: अस्ति आरंभ:
            </p>

            {/* Countdown Timer - New Design */}
            <div className="w-full max-w-2xl">
              <p className="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
                Remaining Days...
              </p>

              <div className="flex items-center justify-center gap-2 md:gap-4">
                {timeUnits.map((unit, index) => (
                  <div key={unit.label} className="flex items-center">
                    {/* Time Card */}
                    <div className="flex flex-col items-center">
                      <div
                        className="relative bg-[#0a0a0a] border border-tedx-red/40 rounded-xl px-4 py-5 md:px-6 md:py-6 min-w-[70px] md:min-w-[100px]"
                        style={{ boxShadow: '0 0 15px rgba(235, 0, 40, 0.3), inset 0 0 10px rgba(235, 0, 40, 0.1)' }}
                      >
                        <div
                          className="text-3xl md:text-5xl font-bold text-white"
                          style={{ fontFamily: "'Orbitron', 'Courier New', monospace", textShadow: '0 0 10px rgba(235, 0, 40, 0.5)' }}
                        >
                          {String(unit.value).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="mt-3 text-white/60 text-xs md:text-sm tracking-wider uppercase">
                        {unit.label}
                      </span>
                    </div>

                    {/* Colon Separator (except after last item) */}
                    {index < timeUnits.length - 1 && (
                      <div className="text-tedx-red/60 text-2xl md:text-4xl font-bold mx-1 md:mx-2 mb-6">
                        :</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
