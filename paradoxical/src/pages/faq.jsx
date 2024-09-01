import React from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { useContext, useEffect, useState } from "react";
import MyContext from "../MyContext";
import Gap from "./components/gap";
import Footer from "./components/footer";
import { FaQuestionCircle } from "react-icons/fa";
import AccordionItem from "./components/accordion";
function FAQ() {
  const click = useContext(MyContext);
  useEffect(() => {
    if (click.sharedState) {
      click.setSharedState(!click.sharedState);
    }
  }, []);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <>
      <div className="bg-slate-900 min-h-screen overflow-hidden">
        <Header></Header>
        <Menu></Menu>
        <Gap></Gap>
        <h2
          className="text-2xl md:text-5xl flex justify-center gap-2 md:gap-3 text-slate-50 font-bold mt-8 md:mt-6 mb-4 underline decoration-solid hover:decoration-sky-500 focus:decoration-sky-500 underline-offset-8"
          tabindex="0"
        >
          <FaQuestionCircle className="text-3xl md:text-6xl mt-1 md:mt-0" />{" "}
          Frequently Asked Questions
        </h2>
        <div className="w-11/12 md:w-4/5 text-slate-300 mx-auto mt-10 mb-10 border-4 border-slate-500 rounded-2xl overflow-hidden">
          <AccordionItem
            title="1. What exactly is a paradox?"
            isOpen={openSection === 1}
            onClick={() => toggleSection(1)}
          >
            A paradox is a statement or situation that contradicts itself or defies common intuition. While it might seem impossible or illogical, paradoxes can sometimes reveal deeper truths about language, mathematics, or reality itself.
          </AccordionItem>
          <AccordionItem
            title="2. Are paradoxes always unsolvable?"
            isOpen={openSection === 2}
            onClick={() => toggleSection(2)}
          >
            Not always. Some paradoxes are meant to be thought-provoking rather than solvable, challenging our understanding of concepts. However, others can be resolved through deeper analysis, such as by changing the assumptions or definitions used.
          </AccordionItem>
          <AccordionItem
            title="3. What’s the difference between a paradox and an oxymoron?"
            isOpen={openSection === 3}
            onClick={() => toggleSection(3)}
          >
            An oxymoron is a figure of speech that combines contradictory terms (e.g., "jumbo shrimp"), while a paradox involves a more complex contradiction that often reveals a hidden truth or presents a situation that challenges logic.
          </AccordionItem>
          <AccordionItem
            title="4. Can paradoxes exist in real life, or are they just theoretical?"
            isOpen={openSection === 4}
            onClick={() => toggleSection(4)}
          >
            While many paradoxes are theoretical, some can manifest in real-life scenarios, especially in areas like physics or decision-making. For example, Zeno’s paradoxes explore concepts like motion and division, which are central to physics.
          </AccordionItem>
          <AccordionItem
            title="5. Are paradoxes important in science and mathematics?"
            isOpen={openSection === 5}
            onClick={() => toggleSection(5)}
          >
            Yes! Paradoxes have played crucial roles in advancing science and mathematics. For example, the famous “Russell’s Paradox” led to developments in set theory, and the “Quantum Paradox” has influenced quantum mechanics.
          </AccordionItem>
          <AccordionItem
            title="6. Why do some paradoxes seem unsolvable?"
            isOpen={openSection === 6}
            onClick={() => toggleSection(6)}
          >
            Many paradoxes arise because they exploit gaps in logic, language, or perception. They force us to reconsider our assumptions and can remain unsolvable within our current frameworks, making them intriguing puzzles that drive deeper inquiry.
          </AccordionItem>
          <AccordionItem
            title="7. Are there different types of paradoxes?"
            isOpen={openSection === 7}
            onClick={() => toggleSection(7)}
          >
            Yes, paradoxes can be broadly categorized into three types: logical paradoxes (e.g., the liar paradox), veridical paradoxes (statements that seem false but are true), and falsidical paradoxes (statements that seem true but are actually false).
          </AccordionItem>
          <AccordionItem
            title="8. What is a self-referential paradox?"
            isOpen={openSection === 8}
            onClick={() => toggleSection(8)}
          >
            A self-referential paradox occurs when a statement refers to itself in a way that creates a contradiction. A famous example is the “liar paradox,” where someone says, “I am lying.” If that statement is true, then they must be lying, but if they are lying, then the statement must be true.
          </AccordionItem>
          <AccordionItem
            title="9. Can paradoxes be useful in everyday life?"
            isOpen={openSection === 9}
            onClick={() => toggleSection(9)}
          >
            Paradoxes can help us think critically and question assumptions in daily situations. They encourage creative problem-solving by showing that some problems might not have straightforward answers or that different perspectives can lead to surprising conclusions.
          </AccordionItem>
          <AccordionItem
            title="10. What's an example of a paradox you might not have heard of?"
            isOpen={openSection === 10}
            onClick={() => toggleSection(10)}
          >
             The "Unexpected Hanging Paradox" is a fascinating example. A judge tells a prisoner he will be hanged on a weekday, but the hanging will be a surprise. The prisoner reasons that if the hanging is on Friday, it won’t be a surprise, so it can’t be Friday. By similar logic, he rules out all other days, concluding it won’t happen. But then, when the hanging occurs on a Wednesday, it’s a complete surprise!
          </AccordionItem>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default FAQ;
