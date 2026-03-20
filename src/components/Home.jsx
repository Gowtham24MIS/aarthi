import { useState, useEffect } from "react";
import Desktop from "./HomePageMotion";
import Mobile from "./HomePageResponsive";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <Mobile /> : <Desktop />;
}

export default Home;