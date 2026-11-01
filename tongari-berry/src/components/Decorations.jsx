import { useEffect, useRef } from "react";
import useConfetti from "../hooks/useConfetti";

const NS = "http://www.w3.org/2000/svg";
const VB = { berry: "0 0 100 110", cone: "0 0 80 120", star: "0 0 100 100" };

function makeSvg(id, w, cls) {
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("viewBox", VB[id]);
  s.style.width = w + "px";
  s.innerHTML = `<use href="#${id}"/>`;
  if (cls) s.setAttribute("class", cls);
  return s;
}

export default function Decorations({ count = 14, solid = true }) {
  const box = useRef(null);
  const items = useRef([]);
  const burst = useConfetti();

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    el.innerHTML = "";
    items.current = [];

    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (let i = 0; i < count; i++) {
      const t = ["berry", "cone", "star", "berry"][i % 4];
      const w = t === "star" ? 34 + Math.random() * 20 : 50 + Math.random() * 60;
      const s = makeSvg(t, w, "fl" + (solid && i % 2 ? " solid" : ""));
      s.style.left = Math.random() * 92 + "%";
      s.style.top = Math.random() * 88 + "%";
      s.style.rotate = Math.random() * 50 - 25 + "deg";
      s.style.setProperty("--d", 4 + Math.random() * 4 + "s");
      if (t === "star") s.style.setProperty("--sf", "#f58a3a");
      if (t === "cone" && i % 2) s.style.setProperty("--sw", "rgba(255,255,255,.25)");
      s.dataset.k = (0.015 + Math.random() * 0.045).toFixed(3);

      s.addEventListener("pointerdown", (e) => {
        s.classList.remove("pop");
        void s.getBoundingClientRect();
        s.classList.add("pop");
        burst(e.clientX, e.clientY, 6);
      });

      el.appendChild(s);
      items.current.push(s);
    }

    if (rm) return;

    const onMove = (e) => {
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      items.current.forEach((s) =>
        s.style.setProperty("transform", `translate(${x * s.dataset.k}px,${y * s.dataset.k}px)`)
      );
    };
    const onScroll = () => {
      items.current.forEach((s, i) => (s.style.rotate = (i % 2 ? 1 : -1) * window.scrollY * 0.12 + "deg"));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [count, solid, burst]);

  return <div className="deco" ref={box} />;
}