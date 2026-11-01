const SCHEDULE = [
  { d: "SÁB", place: "Casco Antiguo · Calle del Portal", note: "Junto a la torre del reloj", h: "11:00 – 18:00" },
  { d: "DOM", place: "Colina Estrella · Plaza de las Cometas", note: "Al lado de la fuente", h: "10:00 – 17:00" },
  { d: "MIÉ", place: "Avenida del Sol · Zona Norte", note: "Cerca de la salida de la estación", h: "15:00 – 19:00" },
  { d: "VIE", place: "Cerro del Templo · Entrada del santuario", note: "Bajo los faroles rojos", h: "12:00 – 18:00" },
];

export default function Where() {
  return (
    <section id="where">
      <div className="wrapw">
        <span className="chip">DÓNDE NOS ESTACIONAMOS</span>
        <h2>El puesto esta semana.</h2>
        <p className="lead">Busca la carpa roja. Los días de lluvia, descansamos.</p>
        <div className="sch">
          {SCHEDULE.map((s, i) => (
            <div key={i}>
              <b>{s.d}</b>
              <span>
                <strong>{s.place}</strong>
                <small>{s.note}</small>
              </span>
              <em>{s.h}</em>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center" }}>
          <a className="pill gold" href="#top">Ver las paradas de la semana ☆</a>
        </p>
      </div>
    </section>
  );
}