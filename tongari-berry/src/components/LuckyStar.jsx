import { useState } from "react";
import useConfetti from "../hooks/useConfetti";

const FLAVORS = [
  { sw: "#e8899f" },
  { sw: "#4a2a1f" },
  { sw: "#fbe3e6" },
];

export default function LuckyStar() {
  const burst = useConfetti();
  const [lucky, setLucky] = useState(() => Math.floor(Math.random() * 3));
  const [opened, setOpened] = useState([false, false, false]);
  const [done, setDone] = useState(false);
  const [msg, setMsg] = useState("");

  const reset = () => {
    setLucky(Math.floor(Math.random() * 3));
    setOpened([false, false, false]);
    setDone(false);
    setMsg("");
  };

  const pick = (i, e) => {
    if (done || opened[i]) return;
    const next = [...opened];
    next[i] = true;
    setOpened(next);

    if (i === lucky) {
      setDone(true);
      setMsg("★ ¡Qué suerte! Otro cono va por la casa. ★");
      burst(e.clientX, e.clientY, 34);
    } else {
      setMsg("Solo fresa esta vez… ¡prueba otro!");
    }
  };

  return (
    <section id="lucky" style={{ paddingTop: 60 }}>
      <div className="wrapw">
        <span className="chip">ESTRELLA DE LA SUERTE</span>
        <h2>¿Sale estrella? Otro cono.</h2>
        <p className="lead">
          Algunos conos esconden una estrella en el fondo. Termina el tuyo, encuentra la estrella y
          el siguiente va por la casa.
        </p>

        <div className="steps">
          <div className="step"><b>PASO 01</b><h3>Elige</h3><p>Escoge cualquier cono. Todos pueden guardar una sorpresa.</p></div>
          <div className="step"><b>PASO 02</b><h3>Disfruta</h3><p>Con calma. Los bocados lentos revelan la estrella.</p></div>
          <div className="step"><b>PASO 03</b><h3>Muestra</h3><p>Enseña la estrella en la ventanilla y llévate un cono gratis.</p></div>
        </div>

        <div className="try">
          <h3>Pruébalo aquí también.</h3>
          <p style={{ color: "var(--soft)", margin: "4px 0 0" }}>
            Toca un cono y descubre si la estrella está dentro.
          </p>
          <div className="row">
            {FLAVORS.map((f, i) => (
              <button
                key={i}
                className={"cn" + (opened[i] ? " tw" : "")}
                aria-label={"Cono " + (i + 1)}
                onClick={(e) => pick(i, e)}
              >
                {opened[i] && i === lucky && (
                  <svg className="rv" viewBox="0 0 100 100" style={{ position: "absolute", left: "50%", top: -14, width: 46, translate: "-50% 0" }}>
                    <use href="#star" />
                  </svg>
                )}
                {opened[i] && i !== lucky && (
                  <svg className="rv" viewBox="0 0 100 110" style={{ position: "absolute", left: "50%", top: -14, width: 40, translate: "-50% 0" }}>
                    <use href="#berry" />
                  </svg>
                )}
                <svg viewBox="0 0 80 120" style={{ "--sw": f.sw }}>
                  <use href="#cone" />
                </svg>
              </button>
            ))}
          </div>
          <div id="res" style={{ minHeight: 34, fontWeight: 700, color: "var(--red)", fontSize: 20 }}>
            {msg}
          </div>
          <button className="link" onClick={reset}>Intentar de nuevo</button>
        </div>
      </div>
    </section>
  );
}