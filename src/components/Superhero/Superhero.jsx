export default function Superhero({
  nom,
  description,
  films = ["Aucun film pour ce superhero"],
  ...props
}) {
  return (
    console.log(props),
    (
      <div className="superhero">
        <h2>{nom}</h2>
        <p>{description}</p>
        <b>Films: </b>
        <ul>
          {films.map((film) => {
            <li>{film}</li>;
          })}
        </ul>
      </div>
    )
  );
}
