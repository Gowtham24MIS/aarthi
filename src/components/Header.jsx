import MyImg from "../assets/aa.png"
function Header(){
    return(
        <div>
                <div className="fixed top-0 left-0 w-full z-50 
                bg-[#ce4646] px-10 py-3 
                flex justify-between items-center 
                text-white rounded-none">
                    <div className="flex gap-4 text-2xl text-b">
                    <img src={MyImg} alt="logo" className="w-12 h-12 rounded-3xl " />
                    <h2 className="mt-2">Ambattur Aarthi</h2>
                    </div>

                    <div className="flex gap-10 mx-10 mt-2 text-xl">
                        <button className="hover:bg-white rounded-xl hover:rounded-xl p-1 hover:text-[#ce4646] transition duration-300 ease-in-out"><h3>Home</h3></button>
                        <button className="hover:bg-white rounded-xl hover:rounded-xl p-1 hover:text-[#ce4646] transition duration-300 ease-in-out"><h3>Gallery</h3></button>                        
                        <button className="hover:bg-white rounded-xl hover:rounded-xl p-1 hover:text-[#ce4646] transition duration-300 ease-in-out"><h3>About Us</h3></button>
                        <button className="hover:bg-white rounded-xl hover:rounded-xl p-1 hover:text-[#ce4646] transition duration-300 ease-in-out"><h3>Contact Us</h3></button>
                    </div>
                </div>
        </div>
    );
}
export default Header;