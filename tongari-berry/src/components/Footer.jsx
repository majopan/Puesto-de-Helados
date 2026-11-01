import Decorations from "./Decorations";

export default function Footer() {
  return (
    <footer>
      <Decorations count={8} solid={false} />
      <h2 style={{ position: "relative" }}>Tongari Berry</h2>
      <nav>
        <a href="#menu">Menú</a>
        <a href="#lucky">Cómo funciona la suerte</a>
        <a href="#where">Dónde estamos</a>
        <a href="#top">Contacto</a>
      </nav>
      <small>© 2026 TONGARI BERRY · MARCA FICTICIA · NO ES UN SITIO OFICIAL</small>
    </footer>
  );
}