import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pokemon from "./pages/Pokemon";
import PokemonDetails from "./pages/PokemonDetails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import InvalidUrl from "./pages/InvalidUrl";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                    <Route path="/pokemon/:id" element={<PokemonDetails />} />
                    <Route path="*" element={<InvalidUrl />} />
                    <Route path="/notfound" element={<NotFound />} />

                </Routes>
                <Footer />
            </Router>
            
        </div>
    );
}

export default App;
