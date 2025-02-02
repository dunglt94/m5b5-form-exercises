import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Contact from "./components/Contact";
import Library from "./components/Library";
import Mail from "./components/Mail";

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">Contact</Link>
                </li>
                <li>
                    <Link to={"/library"}>Library</Link>
                </li>
                <li>
                    <Link to={"/mail"}>Mail</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/library" element={<Library />} />
                 <Route path="/mail" element={<Mail />} />
            </Routes>
        </div>
    );
}

export default App;
