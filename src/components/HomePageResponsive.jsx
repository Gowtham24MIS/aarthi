import Semi1 from "../assets/semi1.png"
import Ldy from "../assets/Birthday cake-pana.png"
import shop from "../assets/cake shop-bro.png"
import bake from "../assets/pastry chef-pana.png"
import about from "../assets/bg-design.png"
import HeroCarousel from "./HeroCarousel"
import baker from "../assets/Baker-rafiki (1).png"
import Contact from "./Contact"
import zomato from "../assets/zomato.jpg"
import swiggy from "../assets/swiggy.jpg"
import zepto from "../assets/zepto.png"
import blinkit from "../assets/blinkit.png"
import instamart from "../assets/instamart.png"
import logo from "../assets/aa.png"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/* ─── Reusable animated wrappers ─── */

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function FadeLeft({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function FadeRight({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function HomePageResponsive() {
    return (
        <div className="font-hammer overflow-hidden">

            {/* ── SECTION 1 – Hero ── */}
            <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 md:pt-28 text-white text-center px-4 overflow-hidden">

                {/* Background curve */}
                <motion.img
                    src={Semi1}
                    alt=""
                    className="absolute top-52 -translate-x-1/2 w-[250%] sm:w-[180%] md:w-[120%] max-w-none pointer-events-none"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Heading */}
                <motion.h1
                    className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug font-hammer"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    Welcome To <br />
                    A<span className="text-red-300">@</span>rthi Sweets &amp; Bakery
                </motion.h1>

                {/* CTA + tagline */}
                <div className="relative z-10 flex flex-col items-center mt-8 md:mt-12 px-4">
                    <motion.button
                        className="text-base sm:text-xl md:text-2xl bg-red-500 px-6 py-2 md:px-8 md:py-3 rounded-3xl hover:bg-red-700 transition duration-300 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "backOut" }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore it
                    </motion.button>

                    <motion.h3
                        className="text-sm sm:text-lg md:text-2xl text-red-700 italic max-w-xs sm:max-w-md md:max-w-xl mt-4 md:mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    >
                        "Indulge in freshly baked sweets and cakes where every bite whispers tradition and love"
                    </motion.h3>
                </div>

                {/* Bottom-left decorative image */}
                <motion.img
                    src={Ldy}
                    alt="Birthday Cake"
                    className="block absolute bottom-0 left-15 w-52 md:w-56 lg:w-[350px] pointer-events-none"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
            </section>
            {/* ── End Section 1 ── */}


            {/* ── SECTION 2 – Goodness Baked Daily ── */}
            <section className="py-16 md:py-24 px-4 md:px-10" id="section-1">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

                    {/* Image */}
                    <FadeLeft className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={shop}
                            alt="Cake Shop"
                            className="w-56 sm:w-72 md:w-full max-w-xs md:max-w-md"
                        />
                    </FadeLeft>

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <FadeUp>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                                Goodness <span className="text-[#631212]">baked</span> Daily.
                            </h2>
                            <div className="w-full h-[2px] bg-white mt-4 mb-6"></div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                                Every cake we bake is made from fresh, natural ingredients, bringing the
                                taste of home into every bite. You can truly taste the love and care
                                in each slice. Our bakers pour their passion into every layer, ensuring
                                perfection from oven to table. Indulge in this homemade magic for
                                birthdays, celebrations, or simply sweetening your day.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-1 sm:gap-4 mt-6 text-sm sm:text-base md:text-lg text-[#631212] italic">
                                <span>Trust in every bite</span>
                                <span className="hidden sm:block">|</span>
                                <span>Baked with love daily</span>
                                <span className="hidden sm:block">|</span>
                                <span>Freshness you can taste</span>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
            {/* ── End Section 2 ── */}


            {/* ── SECTION 3 – Customized Bakes ── */}
            <section className="py-16 md:py-24 px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <FadeUp>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                                Have a <span className="text-[#631212]">Customized</span> bake
                            </h2>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="w-full h-[2px] bg-white my-4"></div>
                            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed mt-4">
                                Make your celebrations unforgettable with our customized cakes,
                                tailored to your vision. Choose flavors, designs, and messages
                                from elegant fondant florals to fun photo toppers—for birthdays,
                                weddings, or anniversaries. Baked fresh with premium ingredients,
                                ready in 24 hours. Order today and turn your ideas into delicious reality!
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#631212] italic">
                                "Quality and freshness are at the heart of everything we bake.
                                We're committed to providing products you can trust and savor without worry."
                            </p>
                        </FadeUp>
                    </div>

                    {/* Image */}
                    <FadeRight delay={0.3} className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={bake}
                            alt="Pastry Chef"
                            className="w-48 sm:w-64 md:w-full max-w-xs md:max-w-sm scale-x-[-1]"
                        />
                    </FadeRight>
                </div>
            </section>
            {/* ── End Section 3 ── */}


            {/* ── SECTION 4 – Gallery ── */}
            <section className="py-16 md:py-20 px-4">
                <FadeUp>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center mb-8">
                        Gallery
                    </h2>
                </FadeUp>
                <FadeIn delay={0.2}>
                    <HeroCarousel />
                </FadeIn>
            </section>
            {/* ── End Section 4 ── */}


            {/* ── SECTION 5 – About Us ── */}
            <section className="py-16 md:py-24 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">

                    {/* Heading block */}
                    <FadeUp className="text-center text-white mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">About Us</h2>
                        <div className="w-32 sm:w-64 h-[2px] bg-[#631212] mx-auto mt-3 mb-6"></div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                            A<span className="text-red-300">@</span>rthi Sweets &amp; Bakery
                        </h2>
                        <p className="text-[#631212] text-lg sm:text-2xl mt-4">Since 1999</p>
                    </FadeUp>

                    {/* Background image */}
                    <FadeIn delay={0.1}>
                        <img src={about} alt="About Background" className="w-full rounded-xl" />
                    </FadeIn>

                    {/* Baker + description */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-10">
                        <FadeLeft delay={0.1} className="w-full md:w-2/5 flex justify-center">
                            <img
                                src={baker}
                                alt="Baker"
                                className="w-48 sm:w-64 md:w-full max-w-xs rounded-2xl scale-x-[-1]"
                            />
                        </FadeLeft>

                        <FadeRight delay={0.3} className="w-full md:w-3/5">
                            <p className="text-[#631212] text-sm sm:text-base md:text-lg text-center md:text-left leading-relaxed">
                                At Aarthi Sweets and Bakery in Ambattur, we blend Chennai's rich sweet-making heritage
                                with fresh bakery artistry since our founding over two decades ago.
                                <br /><br />
                                Our Ambattur outlets specialize in authentic Tamil Nadu sweets like ghee-laden laddu and
                                mysore pak, alongside fluffy cakes, savory puffs, and daily-baked breads using premium, local ingredients.
                                <br /><br />
                                Serving the local community with passion, hygiene, and unbeatable freshness—whether for festivals,
                                birthdays, or tea-time treats—we're your neighborhood go-to for joy in every bite.
                            </p>
                        </FadeRight>
                    </div>
                </div>
            </section>
            {/* ── End Section 5 ── */}


            {/* ── SECTION 6 – Our Branches ── */}
            <section className="py-16 md:py-24 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">

                    <FadeUp className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">Our Branches</h2>
                        <div className="w-32 sm:w-64 h-[2px] bg-white mx-auto mt-3"></div>
                    </FadeUp>

                    {/* Branch cards — 1 col mobile, 2 col tablet, 3 col desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Ambattur O.T",
                                addr: "No. 14, Kalli Kuppam Road, Varadarajapuram, Prithivipakkam, Ambattur, Chennai - 600053."
                            },
                            {
                                title: "Venkatapuram Branch",
                                addr: "Old MTH Road, Indira Nagar, Venkatapuram (near LIC Training Center), Ambattur, Chennai - 600053"
                            },
                            {
                                title: "Tirumullaivayal",
                                addr: "No. 87, Near Bus Stop, CTH Road, Tirumullaivayal, Chennai - 600062."
                            }
                        ].map((branch, i) => (
                            <FadeUp key={i} delay={i * 0.15}>
                                <div className="text-center p-4 border border-[#631212] rounded-xl">
                                    <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold">{branch.title}</h2>
                                    <div className="w-full h-[2px] bg-[#631212] mt-2 mb-4"></div>
                                    <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">{branch.addr}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery platforms */}
            <div className="bg-red-300 font-hammer py-10 px-4">
                <FadeUp>
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-900 mb-2">
                        We Are Also Available On
                    </h1>
                    <div className="w-32 sm:w-64 h-[2px] bg-white mx-auto mb-8"></div>
                </FadeUp>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
                    {[
                        { src: zomato, alt: "zomato" },
                        { src: swiggy, alt: "swiggy" },
                        { src: blinkit, alt: "blinkit" },
                        { src: instamart, alt: "instamart" },
                        { src: zepto, alt: "zepto" },
                    ].map((item, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <motion.img
                                src={item.src}
                                alt={item.alt}
                                className="w-14 sm:w-20 md:w-24 lg:w-28 rounded-2xl"
                                whileHover={{ scale: 1.12, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </FadeUp>
                    ))}
                </div>
            </div>
            {/* ── End Section 6 ── */}


            {/* ── SECTION 7 – Contact + Footer ── */}
            <section className="py-12 px-4 md:px-10">

                {/* Contact form */}
                <FadeUp>
                    <Contact />
                </FadeUp>

                {/* Footer grid — 1 col mobile → 2 col tablet → 4 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">

                    {/* Logo + name */}
                    <FadeLeft delay={0.1}>
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="logo" className="w-14 sm:w-16 md:w-20 rounded-2xl" />
                            <h2 className="text-white text-base sm:text-lg font-hammer leading-snug">
                                A@rthi Sweets <br /> &amp; <br /> Bakery
                            </h2>
                        </div>
                    </FadeLeft>

                    {/* Quick Links */}
                    <FadeUp delay={0.15}>
                        <div>
                            <h3 className="text-white text-base sm:text-lg font-semibold mb-3">Quick Links</h3>
                            <div className="space-y-1 text-sm sm:text-base text-red-950">
                                <p className="hover:text-red-300 cursor-pointer"><a href="#">Aarthi Mini Halls</a></p>
                                <p className="hover:text-red-300 cursor-pointer"><a href="#">Aarthi Super Market</a></p>
                                <p className="hover:text-red-300 cursor-pointer"><a href="#">Digital Marketing</a></p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* ASB Contracts */}
                    <FadeUp delay={0.25}>
                        <div>
                            <h3 className="text-white text-base sm:text-lg font-semibold mb-3">ASB Contracts</h3>
                            <div className="space-y-1 text-sm sm:text-base text-red-950">
                                <p className="hover:text-red-300 cursor-pointer"><a href="#">Aarthi Cake Magic</a></p>
                                <p className="hover:text-red-300 cursor-pointer"><a href="#">Sky View Rooftop Restaurant</a></p>
                                <p className="hover:text-red-300 cursor-pointer"><a href="#">Entertaining Field</a></p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Contact */}
                    <FadeRight delay={0.2}>
                        <div>
                            <h3 className="text-white text-base sm:text-lg font-semibold mb-3">Contact Us</h3>
                            <p className="text-sm sm:text-base text-white break-all">
                                ambattur.aarthi@gmail.com
                            </p>
                        </div>
                    </FadeRight>
                </div>

                {/* Copyright */}
                <div className="mt-10 max-w-7xl mx-auto">
                    <div className="w-full h-[1px] bg-white mb-4"></div>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg">
                        &copy; {new Date().getFullYear()} Aarthi Sweets &amp; Bakery
                    </p>
                </div>
            </section>
            {/* ── End Section 7 ── */}

        </div>
    )
}

export default HomePageResponsive;
