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


function HomePage(){
    return(
        <>
        <div className="font-hammer overflow-hidden">
             {/* This is the First h-screen of the web */}
            <div className="text-center text-white text-3xl md:text-5xl lg:text-7xl leading-relaxed font-hammer h-[calc(100vh-72px)] relative top-[180px]">

                <h1 className="hover:pointer">Welcome To <br />A<span className="text-red-300">@</span>rthi Sweets & Bakery</h1>
             
                
                <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

                {/* Background curve */}
                <img 
                    src={Semi1} 
                    alt="." 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none"
                />

                {/* Content */}
                <div className="flex flex-col items-center justify-center text-center z-10 px-4 mb-32 pb-32">

                    {/* Button */}
                    <button className="text-2xl bg-red-500 px-8 py-3 rounded-3xl hover:bg-red-700 transition duration-300 mb-6">
                    Explore it
                    </button>

                    {/* Text */}
                    <h3 className="text-2xl text-red-700 italic max-w-xl mb-6 mt-20">
                    "Indulge in freshly baked sweets and cakes where every bite whispers tradition and love"
                    </h3>

                </div>

                {/* Left Image */}
                <img 
                    src={Ldy} 
                    alt="Shop" 
                    className="absolute bottom-0 left-0 w-[350px] md:w-[450px] mb-32 pb-40"
                />

                </div>
                </div>
                {/* -----End of first h-screen*/}
            
                {/* This  is the Second h-screen of this web */}
                <div className="h-[calc(100vh-72px)] overflow-hidden" id="section-1">
                    
                        {/* <img src={Semi2} alt="semi2" className="w-full relative bottom-[200px]  " /> */}

                    

                    
                        
                    <h1><img src={shop} alt="shop" className="w-[800px] h-[800px] absolute top-[900px] left-[50px] " /></h1>

                    <div className="relative top-[400px] left-[400px] font-hammer">
        
                        <h2 className="text-6xl  text-white text-center">Godness <span className="text-[#631212] ">baked</span>  Daily.</h2>
                        <center><div className="w-[800px] h-[2px] relative top-[30px] bg-white "></div></center>
                        <h3 className="text-2xl relative left-[450px] top-[100px] text-white  text-left">Every cake we bake is made from fresh, natural ingredients, bringing the<br /> taste  of home into every bite. You can truly taste the love and care <br />in each slice. Our bakers pour their passion into every layer, ensuring<br /> perfection from oven to table. Indulge in this homemade magic for<br /> birthdays, celebrations, or simply sweetening your day.</h3>
                        
                        <div className="flex justify-center gap-4 relative top-[150px] text-xl  text-[#631212] ">
                            <h4><i>Trust in every bite</i> </h4>
                            <h1>|</h1>
                            <h4><i>Baked with love daily</i></h4>
                            <h1>|</h1>
                            <h4><i>Freshness you can taste</i> </h4>
                        
                        </div>
                    
                    </div>
                </div>
                {/* End of the Second screen */}
                {/* This is the Third Screen of this web */}
                <div className="h-[calc(100vh-72px)]">
                    <div className="flex">
                        <div className="relative top-[500px] left-[200px] font-hammer">
                            <h2 className="text-6xl text-white ">Have a <span className="text-[#631212]">Customized</span> bakes</h2>
                            <h3 className="text-2xl text-white relative top-20">
                                Make your celebrations unforgettable with our customized cakes,<br/> tailored to your vision.
                                Choose flavors, designs, and messages<br/> from elegant fondant florals to fun photo toppers—for birthdays,<br/> weddings, or anniversaries.
                                Baked fresh with premium ingredients,<br/> ready in 24 hours.
                                Order today and turn your ideas into delicious reality!
                            </h3>
                            <div className="w-[800px] h-[2px] relative bottom-[130px] right-5 bg-white "></div>
                            <h4 className="relative top-[150px] text-xl text-[#631212] ">“Quality and freshness are at the heart of everything we bake.<br/>  We’re committed to providing products you can trust and savor without worry.”</h4>
                        </div>

                        <div>
                            <img src={bake} alt="bake" className="w-[500px] scale-x-[-1] relative top-[450px] left-[300px] " />
                        </div>
                    </div>
                </div>
                {/* End of the Third Screen */}
                {/* This is the fourth h-screen of this web */}
                <div className="h-screen">

                    <div className="font-hammer">
                        <h2 className="text-6xl text-white text-center absolute z-50 top-[2800px] left-[50px] ">G<span className="">all</span>ery</h2>
                        {/* <center><div className="w-[200px] h-[2px] absolute z-50 top-[2260px] left-[45px] bg-white "></div></center> */}

                        <div className="relative top-[300px] h-screen"><HeroCarousel /></div>
                    </div>
                </div>
                {/* End of the Third Screen */}
                {/* This is the fifth screen of this web */}

                
                    <div className="relative top-[500px] font-hammer text-white text-center h-[calc(100vh-72px)]">
                        <h2 className="text-6xl text-center">About Us</h2>
                        <center><div className="w-[500px] h-[2px] relative top-[20px]  bg-[#631212] "></div></center>
                        <h2 className="relative top-[60px] text-6xl ">A<span className="text-red-300">@</span>rthi Sweets & Bakery</h2>
                        <h4 className="text-[#631212] relative top-20 flex justify-center text-2xl ">Since 1999</h4>
                        <img src={about} alt="about" className="w-full  top-[] "/>
                        
                        <img src={baker} alt="baker" className="w-[500px] absolute top-[200px] left-[50px] rounded-2xl scale-x-[-1] " />
                        <h4 className="absolute bottom-20 py-7 text-[#631212] left-[600px] text-left text-xl">At Aarthi Sweets and Bakery in Ambattur, we blend Chennai's rich sweet-making heritage<br/> with fresh bakery artistry since our founding over two decades ago.<br/><br/>

Our Ambattur outlets specialize in authentic Tamil Nadu sweets like ghee-laden laddu and <br/>mysore pak, alongside fluffy cakes, savory puffs, and daily-baked breads using premium, local ingredients.<br/><br/>

Serving the local community with passion, hygiene, and unbeatable freshness—whether for festivals,<br/> birthdays, or tea-time treats—we're your neighborhood go-to for joy in every bite. </h4>
                    </div>

                

                <div className="min-h-[calc(100vh-72px)]">
                    <div className="text-center text-white  font-hammer h-screen">
                            <h2 className="text-red-950 relative top-[570px] text-6xl">Our Branches</h2> 
                            <center><div className="w-[400px] h-[2px] relative top-[590px]   bg-white "></div></center>
                    </div>

                    <div className="flex justify-around relative bottom-[100px] font-hammer ">
                        <div>
                            <h2 className="text-center text-2xl text-white">Ambattur O.T</h2>
                            <center><div className="w-[400px] h-[2px] relative top-[25px]   bg-[#631212] "></div></center>
                            <h3 className="relative text-xl text-center top-[50px] text-white">No. 14, Kalli Kuppam Road, Varadarajapuram, <br/>Prithivipakkam, Ambattur, Chennai - 600053.</h3>
                        </div>

                        <div>
                            <h2 className="text-center text-2xl text-white">Venkatapuram Branch</h2>
                            <center><div className="w-[400px] h-[2px] relative top-[25px]   bg-[#631212] "></div></center>
                            <h3 className="relative text-xl text-center top-[50px] text-white ">Old MTH Road, Indira Nagar, Venkatapuram <br/>(near LIC Training Center), Ambattur, <br/>Chennai - 600053</h3>
                        </div>

                        <div>
                            <h2 className="text-center text-2xl text-white">Ambattur O.T</h2>
                            <center><div className="w-[400px] h-[2px] relative top-[25px]   bg-[#631212] "></div></center>
                            <h3 className="relative text-xl text-center top-[50px] text-white ">No. 87, Near Bus Stop, CTH Road, <br/>Tirumullaivayal, Chennai - 600062.</h3>
                        </div>
                    </div>

                    <div className="bg-red-300 font-hammer h-[300px] relative ">
                        <h1 className="text-center text-4xl text-red-900 relative top-[20px] ">We Are Also Availabe On</h1>
                         <center><div className="w-[500px] h-[2px] relative top-[40px] bg-white "></div></center>
                        <div className="flex justify-around">
                        <div className="">
                            <img src={zomato} alt="zomato" className="w-[150px] relative top-[80px] rounded-3xl" />
                        </div>

                        <div className="">
                            <img src={swiggy} alt="swiggy" className="w-[150px] relative top-[80px] rounded-3xl" />
                        </div>

                        <div className="">
                            <img src={blinkit} alt="blinkit" className="w-[150px] relative top-[80px] rounded-3xl " />
                        </div>

                        <div className="">
                            <img src={instamart} alt="instamart" className="w-[150px] relative top-[80px] rounded-3xl" />
                        </div>

                        <div className="">
                            <img src={zepto} alt="zepto" className="w-[150px] relative top-[80px] rounded-3xl" />
                        </div>
                        </div>
                    </div>
                </div>
            {/* Contact us form */}
                    
                <div className="h-[calc(100vh-72px)] ">
                    <div className="relative  ">
                        <Contact/>
                    </div>

                    <div className="flex justify-between gap-6 mx-10 mt-5">
                        <div className="flex justify-around gap-6">
                            <img src={logo} alt="logo" className="w-[150px] rounded-3xl" />
                            <h2 className="text-center text-white text-2xl relative top-[25px] font-hammer">A@rthi Sweets <br/> & <br/> bakery</h2>
                        </div>

                        <div className="relative top-[40px] text-red-950 text-xl ">
                            <h3 className="relative bottom-[40px] text-white">Quick Links</h3>
                           
                           <div className="leading-relaxed">
                            <h4 className="hover:text-red-300"><a href="#">Aarthi Mini Halls</a></h4>
                            <h4 className="hover:text-red-300"><a href="#">Aarthi Super Market</a></h4>
                            <h4 className="hover:text-red-300"><a href="#">Digital Marketing</a></h4>
                            </div>
                           
                        </div>

                        <div className="relative top-[40px] text-red-950 text-xl ">
                            <h3 className="relative bottom-[40px] text-white">ASB contracts</h3>
                           
                            <div className="leading-relaxed">
                            <h4 className="hover:text-red-300"><a href="#">Aarthi Cake Magic</a></h4>
                            <h4 className="hover:text-red-300"><a href="#">Sky viewroof top restaurant</a></h4>
                            <h4 className="hover:text-red-300"><a href="#">Entertaining field</a></h4>
                            </div>
                           
                        </div>



                        <div className="text-red-950] top-[40px] ">
                            <h3 className="text-xl relative text-white">Contact Us</h3>
                            <h4 className="relative top-[30px]">mail: ambattur.aarthi@gmail.com</h4>


                        </div>
                    </div>
                    <div>
                        <center><div className="w-full h-[2px] relative top-[50px] bg-white "></div></center>
                        <h4 className="relative top-[60px] text-center text-white text-xl">&copy; {new Date().getFullYear()} Aarthi Sweets & Bakery</h4>
 
                    </div>
                </div>
                 
        {/* end */}
        </div>
        </>
    );
}

export default HomePage;    