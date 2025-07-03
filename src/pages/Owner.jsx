import Button from "../components/Button";
import Paraph from "../components/Paraph";
//componente construido con arrow function
//1. en componentes escritos con arrow function
//el export va abajo del componente
const Owner = () => (
  <div>
    <Button title="Elemento 1" subtitle="Subtitle del elemento 1" buttonName="Button 1"/>
    <Button title="Elemento 2" subtitle="Subtitle del elemento 2"  buttonName="Button 2"/>
    <Button title="Elemento 3" subtitle="Subtitle del elemento 3"  buttonName="Button 3" />
    <Paraph text="Hola este texto viene de un prop" number="5"/>
  </div>
)
export default Owner;