import { useEffect, useRef } from "react";

const ITEMS = [
  {
    r: "-4deg",
    badge: true,
    name: "Tongari Fresa",
    tag: "FRESA",
    desc: "Helado suave de fresa pura con una espiral bien puntiaguda.",
    price: "$9.900",
    sw: undefined,
  },
  {
    r: "3deg",
    name: "Tongari Choco",
    tag: "CHOCOLATE",
    desc: "Espiral de cacao intenso, hecha para mantenerse firme hasta el último bocado.",
    price: "$9.900",
    sw: "#4a2a1f",
  },
  {
    r: "-3deg",
    name: "Mezcla Twist",
    tag: "TWIST",
    desc: "Dos sabores enrollados juntos. Cada bocado sabe diferente.",
    price: "$10.900",
    sw: "#fbe3e6",
  },
];

export default function Menu() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".card") ?? [];
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.25 }
    );
    cards.forEach((c, i) => {
      c.style.transitionDelay = i * 0.15 + "s";
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section id="menu" style={{ paddingTop: 60 }}>
      <div className="wrapw">
        <span className="chip">EL CONO DE HOY</span>
        <h2>El Tongari de hoy.</h2>
        <p className="lead">
          Helado suave en espiral con punta, servido a la temperatura perfecta. El cono se hornea
          fresco cada mañana.
        </p>
        <div className="cards" ref={ref}>
          {ITEMS.map((it, i) => (
            <div key={i} className="card" style={{ "--r": it.r }}>
              {it.badge && (
                <div className="badge">
                  SUERTE
                  <br />★
                </div>
              )}
              <svg viewBox="0 0 80 120" style={it.sw ? { "--sw": it.sw } : undefined}>
                <use href="#cone" />
              </svg>
              <h3>{it.name}</h3>
              <small>{it.tag}</small>
              <p>{it.desc}</p>
              <span className="price">{it.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}