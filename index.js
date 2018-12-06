const {operate} = require('./calculator');

// /*
// El objeto process es un objeto global que provee información y maneja el proceso actual en Node.js. Como global, siempre esta disponible en node.js sin necesidad de usar require. 
// */



const execute = () => {
  const args =  process.argv;
  // process.argv.forEach(function (val, index) {
  //   // console.log(index + ': ' + val);
  //   if(val.length > 2  && /^--/.test(val)){
      
  //     console.log(operate(val.slice(2), +args[index + 1], +args[index+2]));
  //     return;
  //   }
  // });

  const arreglo = [
    'aaaa', 'bbbb', 'ccc', 'ddd', 'asdad'
  ];

  // arreglo.forEach(str => console.log(str));
  const arreglo2 = arreglo.map( str => str.toUpperCase());
  // arreglo2.forEach(str => console.log(str));
  // const length = arreglo.length;
  for(let i = 0 ; i< arreglo.length ; i++){
    // console.log(arreglo[i]);
  }

  for(str of arreglo){
    // console.log(str);
  } 

  const objetito = {
    nombre : 'pepito',
    edad: 500
  };
  for(key in objetito){
    console.log(objetito[key]);
  }

}

module.exports = { execute };
execute();
process.exit(0);