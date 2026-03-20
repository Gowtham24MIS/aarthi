import Semi1 from "../assets/semi1.png"
import Ldy from "../assets/Birthday cake-pana.png"
import shop from "../assets/cake shop-bro.png"
import bake from "../assets/pastry chef-pana.png"
import about from "../assets/bg-design.png"
import HeroCarousel from "./HeroCarousel"
import baker from "../assets/Baker-rafiki (1).png"
import Contact from "./contact"
import zomato from "../assets/zomato.jpg"
import swiggy from "../assets/swiggy.jpg"
import zepto from "../assets/zepto.png"
import blinkit from "../assets/blinkit.png"
import instamart from "../assets/instamart.png"
import logo from "../assets/aa.png"

function HomePagebrowser() {
    return (
        <>
            <div className="font-hammer">

                {/* ── Section 1: Hero ── */}
                <section className="
                    min-h-[calc(100vh-72px)]
                    flex flex-col items-center justify-center
                    text-center text-white
                    px-4 py-16
                    overflow-hidden
                    relative
                ">
                    <h1 className="text-5xl md:text-7xl leading-relaxed font-hammer mb-8">
                        Welcome To <br />
                        A<span className="text-red-300">@</span>rthi Sweets &amp; Bakery
                    </h1>

                    <img
                        src={Ldy}
                        alt="Birthday Cake"
                        className="w-64 h-64 md:w-[450px] md:h-[450px] object-contain"
                    />

                    <p className="text-lg md:text-2xl text-red-300 italic mt-6 max-w-2xl">
                        &ldquo;Indulge in freshly baked sweets and cakes <br />
                        where every bite whispers tradition and love&rdquo;
                    </p>

                    <button className="mt-8 text-xl md:text-2xl bg-red-500 hover:bg-red-700 transition-colors duration-300 px-10 py-3 rounded-3xl">
                        Explore it
                    </button>

                    <img
                        src={Semi1}
                        alt="decoration"
                        className="w-full mt-10 block"
                    />
                </section>

                {/* ── Section 2: Goodness Baked Daily ── */}
                <section
                    id="section-1"
                    className="
                        min-h-[calc(100vh-72px)]
                        flex flex-col md:flex-row items-center justify-center
                        gap-8 px-6 py-16 overflow-hidden
                    "
                >
                    <img
                        src={shop}
                        alt="Cake Shop"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain flex-shrink-0"
                    />

                    <div className="font-hammer text-center md:text-left max-w-xl">
                        <h2 className="text-4xl md:text-6xl text-white">
                            Godness <span className="text-[#631212]">baked</span> Daily.
                        </h2>
                        <div className="w-full h-[2px] bg-white my-6"></div>
                        <p className="text-lg md:text-2xl text-white leading-relaxed">
                            Every cake we bake is made from fresh, natural ingredients, bringing the
                            taste of home into every bite. You can truly taste the love and care
                            in each slice. Our bakers pour their passion into every layer, ensuring
                            perfection from oven to table. Indulge in this homemade magic for
                            birthdays, celebrations, or simply sweetening your day.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 text-lg md:text-xl text-[#631212]">
                            <span><i>Trust in every bite</i></span>
                            <span>|</span>
                            <span><i>Baked with love daily</i></span>
                            <span>|</span>
                            <span><i>Freshness you can taste</i></span>
                        </div>
                    </div>
                </section>

                {/* ── Section 3: Customized Bakes ── */}
                <section className="
                    min-h-[calc(100vh-72px)]
                    flex flex-col md:flex-row items-center justify-center
                    gap-8 px-6 py-16
                ">
                    <div className="font-hammer max-w-xl">
                        <h2 className="text-4xl md:text-6xl text-white">
                            Have a <span className="text-[#631212]">Customized</span> bakes
                        </h2>
                        <div className="w-full h-[2px] bg-white my-6"></div>
                        <p className="text-lg md:text-2xl text-white leading-relaxed">
                            Make your celebrations unforgettable with our customized cakes,
                            tailored to your vision. Choose flavors, designs, and messages
                            from elegant fondant florals to fun photo toppers—for birthdays,
                            weddings, or anniversaries. Baked fresh with premium ingredients,
                            ready in 24 hours. Order today and turn your ideas into delicious reality!
                        </p>
                        <p className="mt-8 text-lg md:text-xl text-[#631212] italic">
                            &ldquo;Quality and freshness are at the heart of everything we bake.
                            We&rsquo;re committed to providing products you can trust and savor without worry.&rdquo;
                        </p>
                    </div>

                    <img
                        src={bake}
                        alt="Pastry Chef"
                        className="w-full max-w-xs md:max-w-sm object-contain scale-x-[-1] flex-shrink-0"
                    />
                </section>

                {/* ── Section 4: Gallery ── */}
                <section className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center py-16 px-4">
                    <div className="font-hammer w-full">
                        <h2 className="text-5xl md:text-6xl text-white text-center mb-4">
                            G<span>all</span>ery
                        </h2>
                        <div className="w-full">
                            <HeroCarousel />
                        </div>
                    </div>
                </section>

                {/* ── Section 5: About Us ── */}
                <section className="
                    min-h-[calc(100vh-72px)]
                    flex flex-col items-center justify-center
                    font-hammer text-white text-center
                    px-4 py-16 relative
                ">
                    <h2 className="text-5xl md:text-6xl text-center">About Us</h2>
                    <div className="w-80 h-[2px] bg-[#631212] mt-4 mb-8"></div>
                    <h2 className="text-4xl md:text-6xl mb-2">
                        A<span className="text-red-300">@</span>rthi Sweets &amp; Bakery
                    </h2>
                    <span className="text-[#631212] text-xl md:text-2xl mb-8">Since 1999</span>

                    <div className="
                        flex flex-col md:flex-row
                        items-center md:items-start
                        gap-8 w-full max-w-5xl
                        relative
                    ">
                        <img
                            src={baker}
                            alt="Baker"
                            className="w-64 md:w-[400px] rounded-2xl scale-x-[-1] flex-shrink-0 object-contain"
                        />

                        <div className="flex-1 relative">
                            <img
                                src={about}
                                alt="Background design"
                                className="w-full object-cover rounded-xl"
                            />
                            <p className="
                                text-[#631212] text-left text-lg md:text-xl
                                mt-6 leading-relaxed
                            ">
                                At Aarthi Sweets and Bakery in Ambattur, we blend Chennai&rsquo;s rich sweet-making heritage
                                with fresh bakery artistry since our founding over two decades ago.<br /><br />

                                Our Ambattur outlets specialize in authentic Tamil Nadu sweets like ghee-laden laddu and
                                mysore pak, alongside fluffy cakes, savory puffs, and daily-baked breads using premium, local ingredients.<br /><br />

                                Serving the local community with passion, hygiene, and unbeatable freshness—whether for festivals,
                                birthdays, or tea-time treats—we&rsquo;re your neighborhood go-to for joy in every bite.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Section 6: Branches + Delivery Platforms ── */}
                <section className="min-h-[calc(100vh-72px)] flex flex-col justify-between py-16 px-4">

                    <div className="font-hammer text-center mb-12">
                        <h2 className="text-5xl md:text-6xl text-red-950">Our Branches</h2>
                        <div className="w-80 h-[2px] bg-white mx-auto mt-4"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-around gap-10 font-hammer mb-16 px-4">
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
                        ].map(({ title, addr }) => (
                            <div key={title} className="flex-1 text-center max-w-xs mx-auto">
                                <h2 className="text-xl md:text-2xl text-white">{title}</h2>
                                <div className="w-full h-[2px] bg-[#631212] my-4"></div>
                                <p className="text-lg md:text-xl text-white leading-relaxed">{addr}</p>
                            </div>
                        ))}
                    </div>

                    {/* Delivery platforms */}
                    <div className="bg-red-300 font-hammer py-10 px-4">
                        <h1 className="text-center text-3xl md:text-4xl text-red-900 mb-4">
                            We Are Also Available On
                        </h1>
                        <div className="w-80 h-[2px] bg-white mx-auto mb-8"></div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { src: zomato, alt: "zomato" },
                                { src: swiggy, alt: "swiggy" },
                                { src: blinkit, alt: "blinkit" },
                                { src: instamart, alt: "instamart" },
                                { src: zepto, alt: "zepto" }
                            ].map(({ src, alt }) => (
                                <img
                                    key={alt}
                                    src={src}
                                    alt={alt}
                                    className="w-24 md:w-[150px] rounded-3xl object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 7: Contact + Footer ── */}
                <section className="min-h-[calc(100vh-72px)] flex flex-col justify-between py-16 px-4">

                    <div className="mb-16">
                        <Contact />
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-white pt-10">
                        <div className="
                            flex flex-col md:flex-row
                            flex-wrap justify-between
                            gap-10 mb-10 px-4
                        ">
                            {/* Logo + Name */}
                            <div className="flex items-center gap-4">
                                <img src={logo} alt="logo" className="w-24 md:w-[150px] rounded-3xl" />
                                <h2 className="text-white text-xl md:text-2xl font-hammer leading-snug">
                                    A@rthi Sweets <br /> &amp; <br /> Bakery
                                </h2>
                            </div>

                            {/* Quick Links */}
                            <div className="text-xl">
                                <h3 className="text-white mb-4 text-lg font-semibold">Quick Links</h3>
                                <div className="leading-relaxed space-y-1">
                                    <div className="text-red-950 hover:text-red-300"><a href="#">Aarthi Mini Halls</a></div>
                                    <div className="text-red-950 hover:text-red-300"><a href="#">Aarthi Super Market</a></div>
                                    <div className="text-red-950 hover:text-red-300"><a href="#">Digital Marketing</a></div>
                                </div>
                            </div>

                            {/* ASB Contracts */}
                            <div className="text-xl">
                                <h3 className="text-white mb-4 text-lg font-semibold">ASB Contracts</h3>
                                <div className="leading-relaxed space-y-1">
                                    <div className="text-red-950 hover:text-red-300"><a href="#">Aarthi Cake Magic</a></div>
                                    <div className="text-red-950 hover:text-red-300"><a href="#">Sky View Rooftop Restaurant</a></div>
                                    <div className="text-red-950 hover:text-red-300"><a href="#">Entertaining Field</a></div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                                <p className="text-white text-lg">mail: ambattur.aarthi@gmail.com</p>
                            </div>
                        </div>

                        <div className="w-full h-[2px] bg-white mb-4"></div>
                        <p className="text-center text-white text-lg md:text-xl pb-4">
                            &copy; {new Date().getFullYear()} Aarthi Sweets &amp; Bakery
                        </p>
                    </footer>
                </section>

            </div>
        </>
    );
}

export default HomePagebrowser;
