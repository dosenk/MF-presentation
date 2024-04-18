import { RevealSlides } from "react-reveal-slides";

import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom";

import "highlight.js/styles/github.css";

import Conclusions from "./sections/Conclusions";
import Difficulties from "./sections/Difficulties";
import Mf from "./sections/Mf";
import MicroFrontends from "./sections/MicroFrontends";
import Structure from "./sections/Structure";
import UsingTools from "./sections/UsingTools";
import Goals from "./sections/goals";

export default function App() {
  // useEffect(() => {
  //   hljs.highlightAll();
  // }, []);

  return (
    <RevealSlides
      controls={true}
      plugins={[RevealZoom, RevealNotes, RevealHighlight]}
      onStateChange={(state) => console.log(state)}
    >
      <MicroFrontends id={0} />

      <Goals id={1} />

      <UsingTools id={2} />

      <Mf id={3} />

      <Structure id={4} />

      <Difficulties id={5} />

      <Conclusions id={6} />
    </RevealSlides>
  );
}
