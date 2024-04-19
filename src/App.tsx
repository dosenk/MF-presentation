import { RevealSlides } from "react-reveal-slides";

import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom";

import "highlight.js/styles/github.css";

import hljs from "highlight.js";
import { useEffect } from "react";
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

export default function App() {
  useEffect(() => {
    // hljs.highlightAll();
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
  }, []);

  return (
    <RevealSlides
      controls={true}
      plugins={[RevealZoom, RevealNotes, RevealHighlight]}
      onStateChange={(state) => console.log(state)}
    >
      <MicroFrontends id={0} />

      <Goals id={1} />

      <Mf id={2} />

      <UsingTools id={3} />

      <Structure id={4} />

      <Difficulties id={5} />

      <CurrentStructure id={6} />

      <Conclusions id={7} />
    </RevealSlides>
  );
}
