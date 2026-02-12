'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function SponsorsPage() {
    const [isLoading, setIsLoading] = useState(true)

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

            {/* Sponsors Section */}
            <section className="py-20 md:py-32 relative">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-64 h-64 bg-tedx-red/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tedx-red/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tedx-red/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                            Our <span className="text-tedx-red">Sponsors</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Proudly supported by amazing partners who believe in spreading ideas worth sharing.
                        </p>
                    </motion.div>

                    {/* Sponsors Row 1 - 3 cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-12 max-w-5xl mx-auto"
                    >
                        {/* Sponsor Card - Cafitea */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-tedx-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-tedx-red/50 transition-all duration-500 aspect-[4/3] flex items-center justify-center shadow-lg overflow-hidden">
                                <img
                                    src="/sponsers/cafitea.webp"
                                    alt="Caffitea"
                                    className="max-h-28 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 scale-110"
                                />
                            </div>
                            <h3 className="text-center mt-5 text-lg font-semibold text-white group-hover:text-tedx-red transition-colors duration-300">Caffitea</h3>
                        </motion.div>

                        {/* Sponsor Card - Mango */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-tedx-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-tedx-red/50 transition-all duration-500 aspect-[4/3] flex items-center justify-center shadow-lg overflow-hidden">
                                <img
                                    src="/sponsers/mango.webp"
                                    alt="Mango Herbs"
                                    className="max-h-28 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 scale-110"
                                />
                            </div>
                            <h3 className="text-center mt-5 text-lg font-semibold text-white group-hover:text-tedx-red transition-colors duration-300">Mango Herbs</h3>
                        </motion.div>

                        {/* Sponsor Card - Rhino */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative flex flex-col sm:col-span-2 sm:mx-auto md:col-span-1 sm:w-[calc(50%-1rem)] md:w-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-tedx-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-tedx-red/50 transition-all duration-500 aspect-[4/3] flex items-center justify-center shadow-lg overflow-hidden">
                                <img
                                    src="/sponsers/rhino.webp"
                                    alt="The Red Rhino"
                                    className="max-h-28 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-center mt-5 text-lg font-semibold text-white group-hover:text-tedx-red transition-colors duration-300">The Red Rhino</h3>
                        </motion.div>
                    </motion.div>

                    {/* Sponsors Row 2 - 2 cards centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-20 max-w-[calc(66.666%+1rem)] mx-auto"
                    >
                        {/* Sponsor Card - Pahadi Craft */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-tedx-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-tedx-red/50 transition-all duration-500 aspect-[4/3] flex items-center justify-center shadow-lg overflow-hidden">
                                <img
                                    src="/sponsers/PAHADI CRAFT.webp"
                                    alt="Pahadi Craft"
                                    className="max-h-28 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 scale-125"
                                />
                            </div>
                            <h3 className="text-center mt-5 text-lg font-semibold text-white group-hover:text-tedx-red transition-colors duration-300">Pahadi Craft</h3>
                        </motion.div>

                        {/* Sponsor Card - Naturaltein */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-tedx-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-tedx-red/50 transition-all duration-500 aspect-[4/3] flex items-center justify-center shadow-lg overflow-hidden">
                                <img
                                    src="/sponsers/naturaltein.webp"
                                    alt="Naturaltein"
                                    className="max-h-28 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 scale-110"
                                />
                            </div>
                            <h3 className="text-center mt-5 text-lg font-semibold text-white group-hover:text-tedx-red transition-colors duration-300">Naturaltein</h3>
                        </motion.div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gradient-to-r from-zinc-900/80 via-zinc-800/80 to-zinc-900/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-zinc-700/50 text-center"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Interested in Sponsoring?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                            Partner with TEDxNIT Hamirpur and be part of something extraordinary. Reach out to us for sponsorship opportunities.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-tedx-red-dark hover:bg-tedx-red text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-tedx-red/30"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
