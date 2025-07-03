//un componente, es un bloque de codigo reutilizable
//que retorna jsx 
//1. El archivo del componente se debe llamar igual que la funcion que vamos a exportar
// y debe comenzar con la primera letra en Mayus
//2. No podemos devolver elementos multiples, si no estan envueltos en una etique padre
export default function Button(props){
  console.log(props)
  return(
    <>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    <button>{props.buttonName}</button>
    </>
  )
}