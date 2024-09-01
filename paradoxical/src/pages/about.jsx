import React from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";
import Gap from "./components/gap";
import Footer from "./components/footer";
import Card from "./components/card";
import Card2 from "./components/card2";
import { CgBrowser } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  const click = useContext(MyContext);
  useEffect(() => {
    if (click.sharedState) {
      click.setSharedState(!click.sharedState);
    }
  }, []);
  return (
    <>
      <div className="bg-slate-900 min-h-screen overflow-hidden">
        <Header></Header>
        <Menu></Menu>
        <Gap></Gap>
        <Card src={`${process.env.PUBLIC_URL}/images/logo.png`} heading={`What is Paradoxical?`} subheading={`A Web App Project`} hicon={<CgBrowser />} para={`This is a WebApp created by me as a web development project. This is a site which focuses on and talks about fascinating and thought provoking concepts of paradoxes and explanations behind them. I created this site to excel in my web development journey.`}></Card>
        <Card2 src={`${process.env.PUBLIC_URL}/images/me2.jpg`} heading={`Who am i?`} subheading={`A FullStack SDE`} hicon={<BsPersonWorkspace />} para={<span>Hi, i am <strong>Shoaib</strong>. The creator of this site. I am a fullstack developer and software development engineer with experience and expertise in web and app development and on various tools and languages like React, NodeJS, TailwindCSS, Bootstrap, HTML, CSS, JavaScript, Java, PHP, MySQL, Git/GitHub, Android Studio, Kotlin, Python, C and C++ as well as on AI/ML and Prompt engineering.</span>}></Card2>
        <Card src={`https://miro.medium.com/v2/resize:fit:1400/1*SVakq4ra_rdsYkPQ6nvAHA.jpeg`} heading={`TechStack Used`} subheading={`React + NodeJs + Tailwind`} hicon={<FaTools />} para={<span>This project is created using a combination of <FaReact className="inline mb-1" /> React, <FaNodeJs className="inline mb-1" /> NodeJs, <RiTailwindCssFill className="inline mb-1" /> Tailwind. All of these three are key tools in modern web development. React builds dynamic user interfaces with reusable components, Node.js enables server-side JavaScript for full-stack development, and Tailwind CSS offers utility-first classes for quick, custom styling. Together, they streamline creating responsive and scalable web applications.</span>}></Card>
      </div>
      <Footer></Footer>
    </>
  );
}
export default About;
