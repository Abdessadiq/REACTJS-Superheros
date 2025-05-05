export default function Superhero(props) {
  return (
    <div className="superhero">
      <h2>{props.nom}</h2>
      <p>{props.description}</p>
      <b>Films: </b>
      <ul>
        <li> Avangers</li>
      </ul>
    </div>
  );
}
