import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";
function About() {
  const click = useContext(MyContext);
  useEffect(() => {
    if (click.sharedState){
      click.setSharedState(!click.sharedState);
    }
  }, []);
  const [HamClick, setHamClick] = useState(false);
  return (
    <>
      <Header setHC={setHamClick} click={HamClick}></Header>
      <Menu click={HamClick}></Menu>
      <div className="bg-red-800">About</div>
    </>
  );
}
export default About;
