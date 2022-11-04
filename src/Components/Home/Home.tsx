import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from '../Navbar/Navbar'

const Home = () => {
    const [toggle, setToggle] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    return (
        <Navbar toggle={setToggle} openModal={handleOpen} />
    );
};

export default Home;