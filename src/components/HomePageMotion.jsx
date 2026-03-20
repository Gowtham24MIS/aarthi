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

// Fades + slides up when scrolled into view
function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Fades + slides in from the left
function FadeLeft({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Fades + slides in from the right
function FadeRight({ children, delay = 0, className = "" }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Simple fade in
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

function HomePageMotion() {
    return (
        <>
            <div className="font-hammer overflow-hidden">

                {/* ── SECTION 1 – Hero ── */}
                <div className="text-center text-white text-7xl leading-relaxed font-hammer h-[calc(100vh-72px)] relative top-[100px]">

                    {/* Hero heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="hover:pointer"
                    >
                        Welcome To <br />
                        A<span className="text-red-300">@</span>rthi Sweets & Bakery
                    </motion.h1>

                    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
                        {/* Background curve */}
                        <motion.img
                            src={Semi1}
                            alt="."
                            className="absolute top-20 w-full max-w-none"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />

                        {/* CTA + tagline */}
                        <div className="flex flex-col items-center justify-center text-center z-10 px-4 mb-32 pb-32">
                            <motion.button
                                className="text-2xl bg-red-500 px-8 py-3 rounded-3xl hover:bg-red-700 transition duration-300 mb-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "backOut" }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore it
                            </motion.button>

                            <motion.h3
                                className="text-2xl text-red-700 italic max-w-xl mb-6 mt-20"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            >
                                "Indulge in freshly baked sweets and cakes where every bite whispers tradition and love"
                            </motion.h3>
                        </div>

                        {/* Left image floats in */}
                        <motion.img
                            src={Ldy}
                            alt="Shop"
                            className="absolute bottom-0 left-0 w-[350px] md:w-[450px] mb-32 pb-40"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        />
                    </div>
                </div>
                {/* ── End Section 1 ── */}


                {/* ── SECTION 2 – Goodness Baked Daily ── */}
                <div className="h-[calc(100vh-72px)] overflow-hidden" id="section-1">

                    
                        <motion.img src={shop} alt="shop" className="w-[800px] h-[800px] absolute top-[900px] left-[50px]"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        />
                    

                    <div className="relative top-[400px] left-[400px] font-hammer">
                        <FadeUp>
                            <h2 className="text-6xl text-white text-center">
                                Godness <span className="text-[#631212]">baked</span> Daily.
                            </h2>
                            <center>
                                <div className="w-[800px] h-[2px] relative top-[30px] bg-white"></div>
                            </center>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <h3 className="text-2xl relative left-[450px] top-[100px] text-white text-left">
                                Every cake we bake is made from fresh, natural ingredients, bringing the<br /> taste of home into every bite. You can truly taste the love and care <br />in each slice. Our bakers pour their passion into every layer, ensuring<br /> perfection from oven to table. Indulge in this homemade magic for<br /> birthdays, celebrations, or simply sweetening your day.
                            </h3>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <div className="flex justify-center gap-4 relative top-[150px] text-xl text-[#631212]">
                                <h4><i>Trust in every bite</i></h4>
                                <h1>|</h1>
                                <h4><i>Baked with love daily</i></h4>
                                <h1>|</h1>
                                <h4><i>Freshness you can taste</i></h4>
                            </div>
                        </FadeUp>
                    </div>
                </div>
                {/* ── End Section 2 ── */}


                {/* ── SECTION 3 – Customized Bakes ── */}
                <div className="h-[calc(100vh-72px)]">
                    <div className="flex">
                        <div className="relative top-[500px] left-[200px] font-hammer">
                            <FadeUp>
                                <h2 className="text-6xl text-white">
                                    Have a <span className="text-[#631212]">Customized</span> bakes
                                </h2>
                            </FadeUp>

                            <FadeUp delay={0.2}>
                                <h3 className="text-2xl text-white relative top-20">
                                    Make your celebrations unforgettable with our customized cakes,<br /> tailored to your vision.
                                    Choose flavors, designs, and messages<br /> from elegant fondant florals to fun photo toppers—for birthdays,<br /> weddings, or anniversaries.
                                    Baked fresh with premium ingredients,<br /> ready in 24 hours.
                                    Order today and turn your ideas into delicious reality!
                                </h3>
                                <div className="w-[800px] h-[2px] relative bottom-[130px] right-5 bg-white"></div>
                            </FadeUp>

                            <FadeUp delay={0.4}>
                                <h4 className="relative top-[150px] text-xl text-[#631212]">
                                    "Quality and freshness are at the heart of everything we bake.<br /> We're committed to providing products you can trust and savor without worry."
                                </h4>
                            </FadeUp>
                        </div>

                        <FadeRight delay={0.3}>
                            <img src={bake} alt="bake" className="w-[500px] scale-x-[-1] relative top-[450px] left-[300px]" />
                        </FadeRight>
                    </div>
                </div>
                {/* ── End Section 3 ── */}


                {/* ── SECTION 4 – Gallery ── */}
                <div className="h-screen">
                    <div className="font-hammer">
                        <FadeUp>
                            <h2 className="text-6xl text-white text-center absolute z-50 top-[2800px] left-[50px]">
                                G<span className="">all</span>ery
                            </h2>
                        </FadeUp>

                        <FadeIn delay={0.2}>
                            <div className="relative top-[300px] h-screen">
                                <HeroCarousel />
                            </div>
                        </FadeIn>
                    </div>
                </div>
                {/* ── End Section 4 ── */}


                {/* ── SECTION 5 – About Us ── */}
                <div className="relative top-[500px] font-hammer text-white text-center h-[calc(100vh-72px)]">
                    <FadeUp>
                        <h2 className="text-6xl text-center">About Us</h2>
                        <center>
                            <div className="w-[500px] h-[2px] relative top-[20px] bg-[#631212]"></div>
                        </center>
                        <h2 className="relative z-50 top-[60px] text-6xl">
                            A<span className="text-red-300">@</span>rthi Sweets & Bakery
                        </h2>
                        <h4 className="text-[#631212] relative top-20 flex justify-center text-2xl">Since 1999</h4>
                    </FadeUp>

                    <FadeIn delay={0.2}>
                        <img src={about} alt="about" className="w-full" />
                    </FadeIn>

                    <FadeLeft delay={0.1}>
                        <img src={baker} alt="baker" className="w-[500px] absolute top-[200px] left-[50px] rounded-2xl scale-x-[-1]" />
                    </FadeLeft>

                    <FadeRight delay={0.3}>
                        <h4 className="absolute bottom-20 py-7 text-[#631212] left-[600px] text-left text-xl">
                            At Aarthi Sweets and Bakery in Ambattur, we blend Chennai's rich sweet-making heritage<br /> with fresh bakery artistry since our founding over two decades ago.<br /><br />
                            Our Ambattur outlets specialize in authentic Tamil Nadu sweets like ghee-laden laddu and <br />mysore pak, alongside fluffy cakes, savory puffs, and daily-baked breads using premium, local ingredients.<br /><br />
                            Serving the local community with passion, hygiene, and unbeatable freshness—whether for festivals,<br /> birthdays, or tea-time treats—we're your neighborhood go-to for joy in every bite.
                        </h4>
                    </FadeRight>
                </div>
                {/* ── End Section 5 ── */}


                {/* ── SECTION 6 – Branches ── */}
                <div className="min-h-[calc(100vh-72px)]">
                    <div className="text-center text-white font-hammer h-screen">
                        <FadeUp>
                            <h2 className="text-red-950 relative top-[570px] text-6xl">Our Branches</h2>
                            <center>
                                <div className="w-[400px] h-[2px] relative top-[590px] bg-white"></div>
                            </center>
                        </FadeUp>
                    </div>

                    {/* Branch cards – staggered */}
                    <div className="flex justify-around relative bottom-[100px] font-hammer">
                        {[
                            {
                                title: "Ambattur O.T",
                                addr: "No. 14, Kalli Kuppam Road, Varadarajapuram,\nPrithivipakkam, Ambattur, Chennai - 600053."
                            },
                            {
                                title: "Venkatapuram Branch",
                                addr: "Old MTH Road, Indira Nagar, Venkatapuram\n(near LIC Training Center), Ambattur,\nChennai - 600053"
                            },
                            {
                                title: "Ambattur O.T",
                                addr: "No. 87, Near Bus Stop, CTH Road,\nTirumullaivayal, Chennai - 600062."
                            }
                        ].map((branch, i) => (
                            <FadeUp key={i} delay={i * 0.15}>
                                <h2 className="text-center text-2xl text-white">{branch.title}</h2>
                                <center>
                                    <div className="w-[400px] h-[2px] relative top-[25px] bg-[#631212]"></div>
                                </center>
                                <h3 className="relative text-xl text-center top-[50px] text-white whitespace-pre-line">{branch.addr}</h3>
                            </FadeUp>
                        ))}
                    </div>

                    {/* Delivery platforms */}
                    <div className="bg-red-300 font-hammer h-[300px] relative">
                        <FadeUp>
                            <h1 className="text-center text-4xl text-red-900 relative top-[20px]">We Are Also Available On</h1>
                            <center>
                                <div className="w-[500px] h-[2px] relative top-[40px] bg-white"></div>
                            </center>
                        </FadeUp>

                        <div className="flex justify-around">
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
                                        className="w-[150px] relative top-[80px] rounded-3xl"
                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
                {/* ── End Section 6 ── */}


                {/* ── SECTION 7 – Contact + Footer ── */}
                <div className="h-[calc(100vh-72px)]">
                    <FadeUp>
                        <div className="relative">
                            <Contact />
                        </div>
                    </FadeUp>

                    <div className="flex justify-between gap-6 mx-10 mt-5">
                        <FadeLeft delay={0.1}>
                            <div className="flex justify-around gap-6">
                                <img src={logo} alt="logo" className="w-[150px] rounded-3xl" />
                                <h2 className="text-center text-white text-2xl relative top-[25px] font-hammer">
                                    A@rthi Sweets <br /> & <br /> bakery
                                </h2>
                            </div>
                        </FadeLeft>

                        <FadeUp delay={0.15}>
                            <div className="relative top-[40px] text-red-950 text-xl">
                                <h3 className="relative bottom-[40px] text-white">Quick Links</h3>
                                <div className="leading-relaxed">
                                    <h4 className="hover:text-red-300"><a href="#">Aarthi Mini Halls</a></h4>
                                    <h4 className="hover:text-red-300"><a href="#">Aarthi Super Market</a></h4>
                                    <h4 className="hover:text-red-300"><a href="#">Digital Marketing</a></h4>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.25}>
                            <div className="relative top-[40px] text-red-950 text-xl">
                                <h3 className="relative bottom-[40px] text-white">ASB contracts</h3>
                                <div className="leading-relaxed">
                                    <h4 className="hover:text-red-300"><a href="#">Aarthi Cake Magic</a></h4>
                                    <h4 className="hover:text-red-300"><a href="#">Sky viewroof top restaurant</a></h4>
                                    <h4 className="hover:text-red-300"><a href="#">Entertaining field</a></h4>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeRight delay={0.2}>
                            <div className="text-red-950 top-[40px]">
                                <h3 className="text-xl relative text-white">Contact Us</h3>
                                <h4 className="relative top-[30px]">mail: ambattur.aarthi@gmail.com</h4>
                            </div>
                        </FadeRight>
                    </div>

                    <div>
                        <center>
                            <div className="w-full h-[2px] relative top-[50px] bg-white"></div>
                        </center>
                        <h4 className="relative top-[60px] text-center text-white text-xl">
                            &copy; {new Date().getFullYear()} Aarthi Sweets & Bakery
                        </h4>
                    </div>
                </div>
                {/* ── End Section 7 ── */}

            </div>
        </>
    )
}

export default HomePageMotion;
