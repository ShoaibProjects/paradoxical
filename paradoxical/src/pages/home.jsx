import React from "react";
import Header from "./components/header"
import Menu from "./components/menu";
function Home() {
    return (
       <>
        <Header></Header>
        <Menu></Menu>
        <div className="bg-red-800">Home</div>
       </>
    );
  }
export default Home;