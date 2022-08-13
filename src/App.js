import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Service from "./components/Service/Service";

const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Service/>
        </>
    )
}

export default App;
