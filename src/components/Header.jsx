import MyImg from "../assets/aa.png"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = ["Home", "Gallery", "About Us", "Contact Us"]

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#ce4646] text-white shadow-md">

            {/* ── Main bar ── */}
            <div className="flex justify-between items-center px-4 sm:px-8 md:px-10 py-3">

                {/* Logo + name */}
                <div className="flex items-center gap-3">
                    <img src={MyImg} alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-3xl" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Ambattur Aarthi</h2>
                </div>

                {/* Desktop nav — hidden on mobile */}
                <div className="hidden md:flex gap-6 lg:gap-10 text-lg lg:text-xl">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            className="hover:bg-white rounded-xl px-2 py-1 hover:text-[#ce4646] transition duration-300 ease-in-out"
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* Hamburger button — shown only on mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        className="block w-6 h-[2px] bg-white rounded"
                        animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="block w-6 h-[2px] bg-white rounded"
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="block w-6 h-[2px] bg-white rounded"
                        animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </button>
            </div>

            {/* ── Mobile dropdown menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-[#b83a3a]"
                    >
                        <div className="flex flex-col items-center gap-1 py-4">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    onClick={() => setMenuOpen(false)}
                                    className="w-4/5 text-left text-lg px-4 py-2 rounded-xl hover:bg-white hover:text-[#ce4646] transition duration-300"
                                >
                                    {link}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header
