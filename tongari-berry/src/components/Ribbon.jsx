import { useEffect, useRef } from "react";

const TEXT_A =
  "TONGARI BERRY   ★ UN BOCADO, UN POCO DE SUERTE   ★ ENCUENTRA LA ESTRELLA, LLEVATE OTRO CONO   ";
const TEXT_B =
  "★ ESTRELLA DE LA SUERTE ADENTRO   ★ HELADO DE FRESA   ★ HORNEADO FRESCO CADA MANANA   ";

export default function Ribbon() {
  const aRef = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    if (aRef.current) aRef.current.innerHTML = TEXT_A.repeat(8);
    if (bRef.current) bRef.current.innerHTML = TEXT_B.repeat(8);
  }, []);

  return (
    <div className="rib">
      <div className="b"><span className="mq" ref={bRef} /></div>
      <div className="a"><span className="mq" ref={aRef} /></div>
    </div>
  );
}