const fs = require("fs")
const process = require("process")
let consulta = process.argv[2]
let resultado = "ingrese una consulta"

const usuariosParseados = JSON.parse(fs.readFileSync("./users.json", "utf-8")).users

const mujeres = usuariosParseados.filter((mujer) => {
    return  mujer.gender == "female"
})
const mujeresMayores40 = mujeres.filter((usuario) => {
    return usuario.age >= 40

})
const hombres = usuariosParseados.filter((hombre) => {
    return  hombre.gender == "male"
})

const hombresMayores40 = hombres.filter((usuario) => {
    return usuario.age >= 40

})


if (consulta === "listar") {
    console.log("Total de Personal");
for (let i = 0; i < usuariosParseados.length; i++ ){
    console.log(`(${i + 1}) ${usuariosParseados[i].firstName} - ${usuariosParseados[i].lastName}`);
}
}if (consulta === "mujeres") {

console.log("Mujeres");
for (let i = 0; i < mujeres.length; i++ ){
    
    console.log(`(${i + 1}) ${mujeres[i].firstName} - ${mujeres[i].lastName}`);
}
}if (consulta === "hombres") {
    
console.log("Hombres");
for (let i = 0; i < hombres.length; i++ ){
    
    console.log(`(${i + 1}) ${hombres[i].firstName} - ${hombres[i].lastName}`);
}
}if (consulta === "hombresMayores") {
    
console.log("Hombres mayores de 40 años");
for (let i = 0; i < hombresMayores40.length; i++ ){
    
    console.log(`(${i + 1}) ${hombresMayores40[i].firstName} - ${hombresMayores40[i].lastName}`);
}
}if (consulta === "mujeresMayores") {
    
    console.log("Mujeres mayores de 40 años");
for (let i = 0; i < mujeresMayores40.length; i++ ){
    
    console.log(`(${i + 1}) ${mujeresMayores40[i].firstName} - ${mujeresMayores40[i].lastName}`);
}
    } if (consulta == null) {
        console.log("Ingresa una consulta ej. listar, hombres, mujeres, hombresMayores, mujeresMayores");
    }








