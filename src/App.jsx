import DessertHero from "./components/dessert/DessertHero";
import FlavorCards from "./components/dessert/FlavorCards";
import CTASection from "./components/dessert/CTASection";
import "./App.css";

function App() {
  return ( 

      <div className=" bg-[#030101] min-h-screen flex justify-center">
        {/* IMAGE */}
        {/* <img
          src="/images/icecream.png"
          alt=""
          className="
            w-full max-w-[1280px] min-h-[1900px] bg-[url('/images/icecream.png')] 
            bg-cover bg-bottom bg-no-repeat flex flex-col items-center text-white"
        /> */}

        

        {/* CONTENT NORMAL */}
        <div className="w-full max-w-[1280px] min-h-[1900px] bg-[url('/images/icecream.png')] 
            bg-cover bg-bottom bg-no-repeat flex flex-col items-center text-white">
          <DessertHero />
          <FlavorCards />
          <CTASection />
        </div>

      </div>

    
  );
}

export default App;