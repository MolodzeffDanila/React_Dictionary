import './styles/App.css';
import InputTab from './components/InputTab'
import Favourites from "./components/Favourites";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InputTab/>} />
                <Route path="/favourites" element={<Favourites/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
