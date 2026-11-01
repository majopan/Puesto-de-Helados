import { useCallback } from "react";

const NS = "http://www.w3.org/2000/svg";
const VB = { berry: "0 0 100 110", cone: "0 0 80 120", star: "0 0 100 100" };

export default function useConfetti() {
  return useCallback((x, y, n = 12) => {
    for (let i = 0; i < n; i++) {
      const id = i % 2 ? "berry" : "star";
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", VB[id]);
      svg.setAttribute("class", "cf");
      svg.innerHTML = `<use href="#${id}"/>`;
      svg.style.left = x + "px";
      svg.style.top = y + "px";
      svg.style.setProperty("--st", "#fff");
      document.body.appendChild(svg);

      const a = Math.random() * 6.28;
      const r = 60 + Math.random() * 130;
      svg
        .animate(
          [
            { transform: "translate(0,0) rotate(0)", opacity: 1 },
            {
              transform: `translate(${Math.cos(a) * r}px,${Math.sin(a) * r + 90}px) rotate(${
                Math.random() * 600
              }deg)`,
              opacity: 0,
            },
          ],
          { duration: 900 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.4,1)" }
        )
        .onfinish = () => svg.remove();
    }
  }, []);
}