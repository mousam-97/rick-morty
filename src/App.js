import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CharacterDetails from "./screens/CharacterDetails/CharacterDetails";
import Homescreen from "./screens/Homescreen/Homescreen";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/" element={<Homescreen />} />
      </Routes>
    </div>
  );
}

export default App;
