import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { homeOne, homeTwo, homeThree } from "../components/Info/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Info {...homeOne} />
      <Info {...homeTwo} />
      <Info {...homeThree} />
      <Footer />
    </>
  );
};

export default Home;
