import "./Superhero.css";
import { useState } from "react";

export default function Superhero({
  nom,
  description,
  films = ["Aucun film pour ce superhero"],
  capture,
  details,
  ...props
}) {
  // State
  const [contenu, setContenu] = useState("");
  /**
   * React hook Régles :
   * - Toujours appeler Les React Hooks (useState) seulement dans les componsant fonctionnelles
   * - Tout le temps appeler React Hooks avant tout le code
   */

  return (
    //  Un component React ne s'éxécute qu'une seul fois : au début -> Et en suit à chaque modification "modification fonctionnelle .."
    <div className="superhero">
      <img src={capture} alt={`${nom} image`} />
      <h2>{nom}</h2>
      <p>{description}</p>
      <div className="read-more" onClick={() => setContenu(details)}>
        En savoir plus
      </div>
      <div className="details">{contenu}</div>
      <div>Films: </div>
      <ul>
        {films.map((film) => (
          <li key={film}>{film}</li>
        ))}
      </ul>
    </div>
  );
}
