'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/Footer'
import ChromaGrid, { SpeakerItem } from '@/components/ChromaGrid'
import LoadingScreen from '@/components/LoadingScreen'

/* ============================================
   CURRENT SPEAKERS
   ============================================ */
const currentSpeakers: SpeakerItem[] = [
    {
        id: 1,
        name: 'Mohd. Kashif',
        designation: 'Educator',
        image: '/speakers/kashif.webp',
    },
    {
        id: 2,
        name: 'Akshay Chopra',
        designation: 'Entrepreneur (ex-Pilot)',
        image: '/speakers/akshay.webp',
    },
    {
        id: 3,
        name: 'Vineet Khatri',
        designation: 'Educator',
        image: '/speakers/vineet.webp',
    },
    {
        id: 4,
        name: 'Deepak Wadhwa',
        designation: 'Financial Advisor',
        image: '/speakers/deepak.webp',
    },
    {
        id: 5,
        name: 'Dr. Tarun Sharma',
        designation: 'Research Professor, IIT Roorkee',
        image: '/speakers/tarun.webp',
    },
    {
        id: 6,
        name: 'Anirudh Kulkarni',
        designation: 'Manager (R & D), BPCL',
        image: '/speakers/anirudh.webp',
    },
    {
        id: 7,
        name: 'Rajneesh Puri',
        designation: 'Founder @AAKRITI DEVELOPMENT SOCIETY',
        image: '/speakers/rajneesh.webp',
    },
]

const previousSpeakers: SpeakerItem[] = [
    {
        id: 101,
        name: 'Manu Arora',
        designation: 'Founder, Acerternity UI',
        image: '/prev_speakers/1.webp',
        linkedin: 'https://www.linkedin.com/in/manuarora28/',
        instagram: 'https://www.instagram.com/mannupaaji/',
        twitter: 'https://x.com/mannupaaji?lang=en',
    },
    {
        id: 102,
        name: 'Yash Garg',
        designation: 'Founder, College Setu & Ed-tech Entrepreneur',
        image: '/prev_speakers/3.webp',
        linkedin: 'https://www.linkedin.com/in/yashgargdl/',
        instagram: 'https://www.instagram.com/yashgargdl/',
        twitter: 'https://x.com/yashgargdl',
    },
    {
        id: 103,
        name: 'Col. Ashokan K.',
        designation: 'Indian Army Veteran & Security Expert',
        image: '/prev_speakers/2.webp',
        instagram: 'https://www.instagram.com/colonel_ashokan_k/',
    },
    {
        id: 104,
        name: 'Yatin Pandit',
        designation: 'Historian & Researcher',
        image: '/prev_speakers/4.webp',
        instagram: 'https://www.instagram.com/dev_sons_kriti/',
    },
    {
        id: 105,
        name: 'Jagdeep Singh',
        designation: 'Civil Servant & Advocate',
        image: '/prev_speakers/5.webp',
        linkedin: 'https://www.linkedin.com/in/jagdeepsinghkas/',
        instagram: 'https://www.instagram.com/jagdeep_kas19/',
        twitter: 'https://x.com/jagdeep_kas19',
    },
]

export default function SpeakersPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [showPreviousSpeakers, setShowPreviousSpeakers] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <main className="min-h-screen bg-[#080808]">
            {/* Hero Spacer for fixed header */}
            <div className="h-24" />

            {/* Page Header */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-tedx-red mb-6 tracking-tight">
                            {showPreviousSpeakers ? 'PREVIOUS SPEAKERS' : 'SPEAKERS'}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            {showPreviousSpeakers
                                ? 'Meet the inspiring voices who graced our previous TEDxNIT Hamirpur events'
                                : 'Meet the visionary minds who will share ideas worth spreading at TEDxNIT Hamirpur'
                            }
                        </p>
                    </motion.div>

                    {/* Speaker Cards with Animation */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={showPreviousSpeakers ? 'previous' : 'current'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {showPreviousSpeakers ? (
                                <ChromaGrid
                                    items={previousSpeakers}
                                    radius={400}
                                    damping={0.4}
                                    fadeOut={0.5}
                                />
                            ) : (
                                <ChromaGrid
                                    items={currentSpeakers}
                                    radius={400}
                                    damping={0.4}
                                    fadeOut={0.5}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Toggle Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center mt-16"
                    >
                        <button
                            onClick={() => {
                                setShowPreviousSpeakers(!showPreviousSpeakers)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-tedx-red text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-tedx-red/30"
                        >
                            <span className="relative z-10">
                                {showPreviousSpeakers ? '← Current Speakers' : 'Our Previous Speakers →'}
                            </span>
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
