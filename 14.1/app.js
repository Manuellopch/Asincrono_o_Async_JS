//Promise
// resolve es cuando el promise se cumple
/*const esperando = new Promise(function(resolve, reject){
     setTimeout(function(){
          resolve('se ejecuto');
     }, 5000)
});

esperando.then(function(mensaje){
     console.log(mensaje);
});*/
// reject es cuando el promise no se cumple
const esperando = new Promise(function(resolve, reject){
          const descuento = false;
          if(descuento){
               resolve('Descuento Aplicado');
          }else{
               reject('No se puede aplicar el descuento');
          }
});
//usamos catch para que se ejecute el segundo mensaje
esperando.then(function(resultado){
     console.log(resultado);
}).catch(function(error){
     console.log(error);
});