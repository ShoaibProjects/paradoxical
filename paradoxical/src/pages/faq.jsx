import React from "react";
import Header from "./components/header"
import Menu from "./components/menu";
import { useContext, useEffect } from 'react'
import MyContext from '../MyContext'
function FAQ() {
  const click = useContext(MyContext);
  useEffect(() => {
    if (click.sharedState){
      click.setSharedState(!click.sharedState);
    }
  }, []);
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="bg-red-800">faq</div>
    </>
  );
}
export default FAQ;