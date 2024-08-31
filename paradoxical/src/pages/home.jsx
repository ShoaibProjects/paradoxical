import React from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import CtaBtn from "./components/cta-btn";
import Gap from "./components/gap";
import Footer from "./components/footer";
import {useContext, useEffect} from 'react'
import MyContext from '../MyContext'
function Home() {
  const click = useContext(MyContext);
  useEffect(() => {
    if (click.sharedState){
      click.setSharedState(!click.sharedState);
    }
  }, []);
  return (

    <>
      <div className="bg-slate-900 min-h-screen overflow-hidden">
        <Header></Header>
        <Menu></Menu>
        <Gap></Gap>
        <div className="md:flex md:px-48">
          <img
            className="w-3/5 mx-auto md:mx-0 md:w-2/5 md:order-2 md:py-12 mt-6 md:mt-0 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Impossible_cube_illusion_angle.svg/800px-Impossible_cube_illusion_angle.svg.png"
            alt=""
          />
          <div className="flex flex-col items-center justify-center md:px-12">
            <h1 className="text-slate-200 text-3xl md:text-5xl mb-1 md:mb-2 font-semibold md:me-auto">
              Welcome to Paradoxical
            </h1>
            <h2 className="text-gray-500 text-xl md:text-3xl mb-2 md:mb-5 md:me-auto">
              Explore the world of paradoxes!
            </h2>
            <p className="font-light text-gray-300 text-lg px-4 md:px-0">
              <span className="font-semibold text-gray-200">Paradoxical</span>{" "}
              is the go to place to understand and learn about the facinating
              and thought provoking world of puzziling paradoxes and mysteries.
              Here we talked about various such concepts and the explantion
              behind them.
            </p>
            <CtaBtn text={"Explore Them"}></CtaBtn>
          </div>
        </div>

        <div className="md:flex md:px-48 mt-10 mb-10 md:mb-24 items-center">
          <img
            className="rounded-lg w-4/5 md:w-1/3 mx-auto md:mx-0 mb-2 md:mb-0 md:h-fit"
            src="https://t4.ftcdn.net/jpg/05/13/73/71/360_F_513737120_T85jdYvbTOkbsJs7DrkSs9wClYMEiu1U.jpg"
            alt=""
          />
          <div className="md:w-2/3 flex flex-col items-center justify-center md:px-12">
            <h1 className="text-slate-200 text-2xl md:text-4xl mb-1 md:mb-2 font-semibold md:me-auto">
              What is a Paradox?
            </h1>
            <h2 className="text-gray-500 text-lg md:text-2xl mb-2 md:mb-5 md:me-auto">
              A self-contradictory or puzzling situation.
            </h2>
            <p className="font-light text-gray-300 text-lg px-4 md:px-0">
              A <span className="font-semibold text-gray-200">Paradox</span> is
              a statement or situation that defies logical reasoning or common
              sense by presenting a contradiction or an unexpected outcome. It
              often reveals deeper complexities or flaws in our understanding of
              concepts, challenging established beliefs and prompting deeper
              analysis. Paradoxes can highlight the limits of our reasoning and
              the intricacies of certain ideas or systems.
            </p>
          </div>
        </div>
        <div className="md:flex md:px-48 mt-10 mb-10 md:mb-24 items-center">
          <img
            className="rounded-lg w-4/5 md:w-1/3 md:h-fit mx-auto md:mx-0 mb-2 md:mb-0 md:order-2"
            src="https://i.ytimg.com/vi/BjLzIfDpGhs/maxresdefault.jpg"
            alt=""
          />
          <div className="md:w-2/3 flex flex-col items-center justify-center md:px-12">
            <h1 className="text-slate-200 text-2xl md:text-4xl mb-1 md:mb-2 font-semibold md:me-auto">
              Types of Paradoxes
            </h1>
            <h2 className="text-gray-500 text-lg md:text-2xl mb-2 md:mb-5 md:me-auto">
              Quine's classification
            </h2>
            <p className="font-light text-gray-300 text-lg px-4 md:px-0">
              Quine's classification of paradoxes organizes them into three
              categories. <span className="font-semibold text-gray-200">Veridical paradoxes</span> are those that seem incorrect but
              turn out to be true upon closer inspection. <span className="font-semibold text-gray-200">Falsidical paradoxes </span>
               appear true but are actually false, usually because of a mistake
              in reasoning. <span className="font-semibold text-gray-200">Antinomies</span> reveal actual contradictions in logic or
              systems, indicating flaws in the structure of reasoning itself.
              This classification helps distinguish different types of paradoxes
              based on how they challenge or confuse our logical understanding.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Home;
