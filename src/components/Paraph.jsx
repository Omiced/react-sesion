const propiedades = {
  name: "josue",
  lastName: "cano",
  age: 31,
  favoriteColor: "purple",
  pets: "Kira"
}
console.log(propiedades); //el resultado es 31

//destructuring
const {age,name, favoriteColor,pets} = propiedades;
console.log(name);
console.log(favoriteColor);
console.log(age);
console.log(pets)



const Paraph = ({text,number}) => (
  <p>{text} {number}</p>
)
export default Paraph;
