import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer'

const Home = () => {
    const [toggle, setToggle] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    return (
        <>
        <Navbar toggle={setToggle} openModal={handleOpen} />
        <Footer />
        </>
    );
};

export default Home;