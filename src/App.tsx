import "highlight.js/styles/github.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";

import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import Conclusions from "./sections/Conclusions";
import CurrentStructure from "./sections/CurrentStructure";
import Difficulties from "./sections/Difficulties";
import Mf from "./sections/Mf";
import MicroFrontends from "./sections/MicroFrontends";
import Structure from "./sections/Structure";
import UsingTools from "./sections/UsingTools";
import Goals from "./sections/goals";

import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import Reveal from "reveal.js";

export default function App() {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
  }, []);

  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <MicroFrontends id={0} />

        <Goals id={1} />

        <UsingTools id={2} />

        <Mf id={3} />

        <Structure id={4} />

        <Difficulties id={5} />

        <CurrentStructure id={6} />

        <Conclusions id={7} />
      </div>
    </div>
  );
}
