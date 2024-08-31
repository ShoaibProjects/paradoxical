import React from "react";
import Header from "./components/header"
import Menu from "./components/menu";
import Card from "./components/card";
import Card2 from "./components/card2";
import Gap from "./components/gap";
import HR from "./components/hr";
import Footer from "./components/footer";
import { useContext, useEffect } from 'react'
import MyContext from '../MyContext'

function Paradoxes() {
  const click = useContext(MyContext);
  useEffect(() => {
    if (click.sharedState){
      click.setSharedState(!click.sharedState);
    }
  }, []);
  return (
    <>
      <div className="bg-slate-900 min-h-screen max-h-max overflow-hidden">
        <Header></Header>
        <Menu></Menu>
        <Gap></Gap>
        <h1 className="text-2xl md:text-5xl text-center text-slate-50 font-bold mt-8 md:mt-6 mb-4 underline decoration-solid hover:decoration-sky-500 focus:decoration-sky-500 underline-offset-8" tabindex="0">Some Common Paradoxes</h1>
        <Card src={'https://i.ytimg.com/vi/tE6FOBnrRQY/maxresdefault.jpg'} heading={'The Liar Paradox'} subheading={'"This sentence is false."'} para={`The Liar Paradox is a statement that contradicts itself. The classic example is: "This sentence is false."

If the sentence is true, then it must be false as it says. But if it's false, then it must actually be true. This creates a loop where the sentence can't be true or false without causing a contradiction, making it a paradox.`}></Card>
        <HR></HR>
        <Card2 src={'https://static.wixstatic.com/media/8c8e98_32d2a8e6dffb4247a00e12e9f7057746~mv2.jpg/v1/fill/w_440,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c8e98_32d2a8e6dffb4247a00e12e9f7057746~mv2.jpg'} heading={'The Grandfather Paradox'} subheading={'A temporal paradox'} para={`The Grandfather Paradox is a puzzle about time travel. Imagine you go back in time and stop your grandfather from meeting your grandmother. If that happened, you wouldn't be born. But if you weren't born, how could you go back in time to stop them? This creates a confusing loop where things don't add up, and that's the paradox.`}></Card2>
        <HR></HR>
        <Card src={`https://qph.cf2.quoracdn.net/main-qimg-36dd4e5f6584a8e7ff2da8e13b374cb6-pjlq`} heading={`Ship of Theseus`} subheading={`Theseus's Paradox`} para={`The Ship of Theseus is a question about whether something stays the same if all its parts are replaced. Imagine a ship where every single part is swapped out over time. Is it still the same ship, or is it a new one? And if you rebuilt the ship with all the old parts, which one is the real Ship of Theseus? It makes us think about what makes something truly the same, even when it changes.`}></Card>
        <HR></HR>
        <Card2 src={`https://miro.medium.com/v2/resize:fit:504/1*147xhFS2JKJVsdO_vW0AtA.png`} heading={`Achilles and the tortoise`} subheading={`One of the Zeno's Paradox`} para={`The Achilles and the Tortoise paradox is a puzzle about a race. Achilles, who runs fast, gives a slow-moving tortoise a head start. Zeno, the philosopher, says that Achilles can never catch the tortoise because every time Achilles reaches where the tortoise was, the tortoise has moved a little farther ahead. Even though Achilles is faster, there will always be a small gap between them. This creates a confusing situation where Achilles, even though much faster, can never actually pass the tortoise.`}></Card2>
        <HR></HR>
        <Card src={`https://qph.cf2.quoracdn.net/main-qimg-0d594098c37367bb5793369d81ce2abe.webp`} heading={`Russell's paradox`} subheading={`A Mathematical Problem`} para={`Russell's Paradox highlights a problem in set theory. It asks: What if there’s a set that contains all sets that don't include themselves as members? If this set includes itself, it contradicts the rule that it should only contain sets that don't include themselves. But if it doesn't include itself, then it should be included according to the rule. This contradiction shows that not all sets can be logically defined this way, revealing a flaw in naive set theory.`}></Card>
        <HR></HR>
        <Card2 src={`https://i.ytimg.com/vi/EPOXhFJsqlM/maxresdefault.jpg`} heading={`The Paradox of the Unexpected Hanging`} subheading={`Similar to Unexpected Examination Paradox`} para={`The Paradox of the Unexpected Hanging is about a prisoner who is told they will be hanged one day next week, but the day will be a surprise. The prisoner tries to figure out which day it will be and concludes that it can't happen because they would eventually expect it. However, the hanging still happens on a day they didn't expect, creating a paradox where their reasoning seemed right, but the surprise still worked.`}></Card2>
        <HR></HR>
        <Card src={`https://fourweekmba.com/wp-content/uploads/2023/10/barber-paradox.png`} heading={`Barber paradox`} subheading={`Colloquial version of Russell's paradox`} para={`The Barber Paradox is a logical problem involving a barber who shaves everyone in town who does not shave themselves. The paradox occurs when you ask whether the barber shaves himself. If he shaves himself, he shouldn't be shaving himself according to the rule. But if he doesn’t shave himself, then he should be shaving himself. This creates a logical contradiction, demonstrating a flaw in the definition and use of self-referential sets in set theory.`}></Card>
        <HR></HR>
        <Card2 src={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Tannin_heap.jpeg/1280px-Tannin_heap.jpeg`} heading={`Sorites paradox`} subheading={`Also known as Heap Paradox`} para={`The Sorites Paradox is a logical problem that involves a series of small changes that lead to a contradiction. For example, if you start with a heap of sand and remove one grain at a time, each removal doesn’t seem to change the fact that it’s still a heap. However, if you continue this process, eventually you’ll end up with a single grain, which clearly isn’t a heap. This creates a paradox about when a heap becomes no longer a heap, highlighting problems with defining categories that change gradually.`}></Card2>
        <HR></HR>
        <Card src={`https://www.aashaymody.com/content/images/2023/05/Screen-Shot-2023-05-04-at-9.56.53-PM.png`} heading={`Paradox of tolerance`} subheading={`A philosophical argument`} para={`The paradox of tolerance states that if a society's practice of tolerance is inclusive of the intolerant, intolerance will ultimately dominate, eliminating the tolerant and the practice of tolerance with them. Karl Popper describes the paradox as arising from the fact that, in order to maintain a tolerant society, the society must retain the right to be intolerant of intolerance.`}></Card>
        <HR></HR>
        <Card2 src={`https://einsteinrelativelyeasy.com/images/specialrelativity/twinparadox2_1.jpg`} heading={`Twin paradox`} subheading={`A thought experiment in special relativity`} para={`The Twin Paradox is a concept from Einstein's theory of relativity. It involves two identical twins: one stays on Earth while the other travels in space at near the speed of light. When the traveling twin returns, they find that the twin who stayed on Earth has aged more. This happens because time moves slower for the traveling twin due to their high speed, illustrating the effects of time dilation in special relativity.`}></Card2>
        <HR></HR>
        <Card src={`https://www.unrevealedfiles.com/wp-content/uploads/2021/07/open-and-closed-causal-loops.jpg`} heading={`Bootstrap paradox`} subheading={`Information loop or information paradox`} para={`The Bootstrap Paradox is a time travel paradox where an object or piece of information is sent back in time and becomes the cause of itself in the future. For example, imagine someone receives a book from the future, learns its contents, and then goes back in time to give the book to their past self. The paradox is: Who originally wrote the book, and where did it come from? This creates a loop with no clear origin, challenging our understanding of causality and time.`}></Card>
        <HR></HR>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Paradoxes;