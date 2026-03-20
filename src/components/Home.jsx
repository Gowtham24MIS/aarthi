import { useState, useEffect } from "react";
import Desktop from "./HomePageMotion";
import Mobile from "./HomePageResponsive";

function Home() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen(); // run once after mount

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ⛔ Prevent wrong render before checking screen
  if (isMobile === null) return null;

  return isMobile ? <Mobile /> : <Desktop />;
}

export default Home;