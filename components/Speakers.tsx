'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from './hooks/useInView'
import { useState, useRef } from 'react'
import Link from 'next/link'
import CardSwap, { Card } from './CardSwap'

const speakers = [
  {
    id: 1,
    name: 'Mohd. Kashif',
    profession: 'Educator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Akshay Chopra',
    profession: 'Entrepreneur (ex-Pilot)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Vineet Khatri',
    profession: 'Educator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Deepak Wadhwa',
    profession: 'Financial Advisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Dr. Tarun Sharma',
    profession: 'Research Professor',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Anirudh Kulkarni',
    profession: 'Manager (R & D), BPCL',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 7,
    name: 'Rajneesh Puri',
    profession: 'Founder @AAKRITI DEVELOPMENT SOCIETY',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
]

// Floating Particle effect for ambiance
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0
              ? 'rgba(235, 0, 40, 0.6)'
              : 'rgba(255, 255, 255, 0.3)',
            boxShadow: p.id % 3 === 0
              ? '0 0 6px rgba(235, 0, 40, 0.4)'
              : '0 0 4px rgba(255, 255, 255, 0.2)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Speaker Card Component with enhanced effects
function SpeakerCard({ speaker }: { speaker: typeof speakers[0] }) {
  return (
    <div className="w-full h-full p-4 flex flex-col group/card relative overflow-hidden">
      {/* Shimmer overlay on card */}
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(235, 0, 40, 0.06) 45%, rgba(255, 255, 255, 0.04) 50%, rgba(235, 0, 40, 0.06) 55%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2.5s ease-in-out infinite',
        }}
      />

      {/* Image */}
      <div className="relative flex-1 rounded-lg overflow-hidden mb-4">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        {/* Red accent glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-tedx-red/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="text-center relative z-10">
        <h3 className="text-xl font-bold text-white mb-1 transition-all duration-300 group-hover/card:text-tedx-red/90 drop-shadow-lg">
          {speaker.name}
        </h3>
        <p className="text-tedx-red/80 text-sm font-medium uppercase tracking-wider transition-all duration-300 group-hover/card:text-white/80">
          {speaker.profession}
        </p>
      </div>
    </div>
  )
}

// Mobile Swipe Card Component
function MobileSwipeCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (diff > threshold) {
      // Swipe left - next card
      setCurrentIndex((prev) => (prev + 1) % speakers.length)
    } else if (diff < -threshold) {
      // Swipe right - previous card
      setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Card Container */}
      <div
        className="relative w-[300px] h-[380px] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Ambient glow behind card */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(235, 0, 40, 0.4), transparent 70%)',
          }}
        />
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full rounded-xl border border-tedx-red/30 bg-[#0a0a0a] overflow-hidden"
          style={{ boxShadow: '0 0 25px rgba(235, 0, 40, 0.25), 0 8px 32px rgba(0, 0, 0, 0.6)' }}
        >
          <SpeakerCard speaker={speakers[currentIndex]} />
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-6">
        {speakers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
              ? 'bg-tedx-red w-8 shadow-[0_0_10px_rgba(235,0,40,0.5)]'
              : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Speakers() {
  const { ref, isInView } = useInView()

  return (
    <section id="speakers" className="relative pt-10 pb-24 md:pt-16 md:pb-40 bg-[#080808] text-white overflow-hidden">
      {/* Floating particles background effect */}
      <FloatingParticles />

      {/* Ambient red glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.06), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center min-h-[650px]">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="pr-8"
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                className="text-white inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                MEET
              </motion.span>
              <br />
              <motion.span
                className="text-white inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                OUR
              </motion.span>
              <br />
              <motion.span
                className="text-tedx-red inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ textShadow: '0 0 30px rgba(235, 0, 40, 0.4)' }}
              >
                SPEAKERS
              </motion.span>
            </h2>
            <motion.p
              className="text-white/60 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Inspiring minds who will share their groundbreaking ideas and transformative stories at TEDxNIT Hamirpur.
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-tedx-red/60 mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                transformOrigin: 'left',
                boxShadow: '0 0 10px rgba(235, 0, 40, 0.4)',
              }}
            />

            {/* Arrow Button to Speakers Page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/speakers"
                className="group inline-block"
              >
                <div
                  className="relative bg-[#0a0a0a] border border-tedx-red/40 rounded-xl px-6 py-3 transition-all duration-300 group-hover:border-tedx-red/80 group-hover:scale-105 flex items-center gap-3 overflow-hidden"
                  style={{ boxShadow: '0 0 15px rgba(235, 0, 40, 0.3), inset 0 0 10px rgba(235, 0, 40, 0.1)' }}
                >
                  {/* Button shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(235, 0, 40, 0.08), transparent)',
                      animation: 'shimmer 2s ease-in-out infinite',
                    }}
                  />
                  <span className="text-white font-semibold text-base tracking-wide relative z-10">Know More</span>
                  <svg
                    className="w-6 h-6 text-tedx-red transition-transform duration-300 group-hover:translate-x-1 relative z-10"
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

          {/* Right Side - CardSwap with speaker cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[700px] flex items-center justify-center"
          >
            {/* Glow backdrop behind cards */}
            <div
              className="absolute right-[15%] top-1/2 -translate-y-1/2 w-80 h-96 pointer-events-none rounded-2xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(235, 0, 40, 0.12), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%]">
              <CardSwap
                width={320}
                height={400}
                cardDistance={45}
                verticalDistance={40}
                delay={4000}
                pauseOnHover={true}
                skewAmount={4}
                easing="elastic"
              >
                {speakers.map((speaker) => (
                  <Card key={speaker.id}>
                    <SpeakerCard speaker={speaker} />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">MEET OUR</span>
              <br />
              <span
                className="text-tedx-red"
                style={{ textShadow: '0 0 20px rgba(235, 0, 40, 0.3)' }}
              >
                SPEAKERS
              </span>
            </h2>
            <div className="w-16 h-1 bg-tedx-red/60 mx-auto mb-6" style={{ boxShadow: '0 0 8px rgba(235, 0, 40, 0.4)' }} />

            {/* Arrow Button to Speakers Page - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/speakers"
                className="group inline-block"
              >
                <div
                  className="relative bg-[#0a0a0a] border border-tedx-red/40 rounded-xl px-5 py-2.5 transition-all duration-300 group-hover:border-tedx-red/80 group-hover:scale-105 flex items-center gap-2"
                  style={{ boxShadow: '0 0 15px rgba(235, 0, 40, 0.3), inset 0 0 10px rgba(235, 0, 40, 0.1)' }}
                >
                  <span className="text-white font-semibold text-sm tracking-wide">Know More</span>
                  <svg
                    className="w-5 h-5 text-tedx-red transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Mobile Swipe Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MobileSwipeCards />
          </motion.div>
        </div>
      </div>

      {/* Shimmer keyframe (injected via style tag) */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Bottom gradient for seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  )
}
