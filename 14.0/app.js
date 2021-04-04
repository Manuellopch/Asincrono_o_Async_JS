/*//Call back en forEach
const ciudades = ['Londres', 'Guatemala', 'Sao pablo'];
//inline callback
ciudades.forEach(function(ciudad){
     console.log(ciudad);
});
//Con funciones definidas
function callback(ciudad){
     console.log(ciudad);
}
ciudades.forEach(callback);
//Llamar una Rest API con un callBack
const ciudades = ['Inglaterra', 'Guatemala', 'Brasil', 'Portugal', 'Estados Unidos'];
function mostrarPaises(){
     setTimeout(function(){
          let html = '';
          ciudades.forEach(function(pais){
               html += `<ul>
               <li> ${pais} </li>
               </ul>`;
          });
          document.getElementById('app').innerHTML = html;
},1000);
};
//Mostrar Mis paises
mostrarPaises(); */
//Llamar una Rest API con un callBack agregar uno nuevo
const ciudades = ['Inglaterra', 'Guatemala', 'Brasil', 'Portugal', 'Estados Unidos'];
function nuevoPais(pais, callBack){
     setTimeout(function(){
          ciudades.push(pais);
          callBack();
     },2500);
};
function mostrarPaises(){
     setTimeout(function(){
          let html = '';
          ciudades.forEach(function(pais){
               html += `<ul>
               <li> ${pais} </li>
               </ul>`;
          });
          document.getElementById('app').innerHTML = html;
},1500);
};
//Mostrar Mis paises
nuevoPais('Alemania', mostrarPaises);
mostrarPaises();