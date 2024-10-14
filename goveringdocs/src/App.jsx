import Home from "./Components/Section/Home";
import Navbar from "./Components/Section/Navbar";
import ProblemAndSolution from "./Components/Section/ProblemAndSolution";
import Review from "./Components/Section/Review";

function App() {
    return (
        <main className="w-full min-h-svh font-nunito-sans bg-[url('/Img/Hero.svg')] bg-no-repeat bg-top bg-cover">
            <Navbar />
            <Home />
            <ProblemAndSolution />
            <Review />
            {/* <Footer /> */}
        </main>
    );
}

export default App;
