import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import NotFoundPage from "./assets/Notfound.jsx";
import About from "./Components/hero.jsx";
function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
           <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
