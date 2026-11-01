import Decorations from "./Decorations";
import useConfetti from "../hooks/useConfetti";

const TITLE = "Tongari\nBerry";

export default function Hero() {
  const burst = useConfetti();

  return (
    <header className="hero" id="top">
      <Decorations count={14} solid />

      <div className="small">PUESTO DE HELADO DE FRESA ★ DESDE 2026</div>

      <h1 id="title">
        {TITLE.split("\n").map((w, wi) => (
          <span key={wi} style={{ display: "block" }}>
            {[...w].map((c, ci) => (
              <span key={ci}>{c}</span>
            ))}
          </span>
        ))}
      </h1>

      <svg
        className="hc"
        viewBox="0 0 80 120"
        aria-label="Cono de helado"
        onClick={(e) => burst(e.clientX, e.clientY, 18)}
      >
        <use href="#cone" />
      </svg>

      <p>
        Un bocado a la vez, un poquito de suerte. Si aparece una estrella en el fondo de tu cono,
        te llevas otro gratis.
      </p>
      <div className="btns">
        <a className="pill" href="#menu">Menú de hoy ★</a>
        <a className="pill gold" href="#lucky">Cómo funciona la suerte ☆</a>
      </div>
      <div className="scroll">DESLIZA</div>
    </header>
  );
}