import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";
import loki from "./assets/loki.jpg";
export default function App() {
  return (
    <main>
      <h1>Marvel </h1>
      <Superheros>
        <Superhero
          nom="Iron Man"
          description="Iron Man est un film américano-canadien réalisé par Jon Favreau, sorti
        en 2008. Il raconte les origines et les débuts du personnage éponyme
        issu du comics publié par Marvel."
          details="Il s'agit de la première production de
        l'univers cinématographique Marvel, et du premier film de la phase une."
          films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
          capture="https://images.hdqwalls.com/wallpapers/iron-man-tony-stark-4k-pa.jpg"
        />
        {/* Superhero Numéro 2 */}
        <Superhero
          nom="Loki"
          description=" Loki, également connu sous le nom de Loptr, Hveðrungr ou encore Loge
            (dans la tétralogie de Wagner)"
          details="est un des dieux principaux du
            panthéon de la mythologie nordique. Appartenant aux groupes des
            Aesir, Loki est le dieu de la malice, de la discorde et des
            illusions."
          capture={loki}
        />

        {/* Supéro hero Numéro 3 */}
        <Superhero
          nom="Captain America"
          description=" Steven « Steve » Rogers, alias Captain America est un super-héros
            évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
          details="Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le
            personnage de fiction apparaît pour la première fois dans le comic
            book Captain America Comics #1, paru en décembre 1940[n 3] mais avec
            la date de mars 1941 inscrite sur la couverture[3]."
          capture="./captin-american.jpg"
        />
      </Superheros>
    </main>
  );
}
