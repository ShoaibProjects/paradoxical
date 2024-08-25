import React, {useState} from "react";
import Header from "./components/header"
import Menu from "./components/menu";
function About() {
  const [HamClick, setHamClick] = useState(false)
    return (
      <>
        <Header setHC={setHamClick} click={HamClick}></Header>
        <Menu click={HamClick}></Menu>
        <div className="bg-red-800">About</div>
       </>
    );
  }
export default About;