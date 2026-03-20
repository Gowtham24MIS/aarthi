import Header from "./components/Header"
import Home from "./components/Home";
import HomePage from "./components/HomePage"
import HomePagebrowser from "./components/HomePagebowser";
import HomePageMotion from "./components/HomePageMotion";
import HomePageResponsive from "./components/HomePageResponsive";
function App() {
  return (
    <>
      <Header />
      <main className="pb-[20px]">
        <Home />
      </main>
    </>
  );
}

export default App;