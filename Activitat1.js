function color(){
    let colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

    let totsMenorsQueMarró = colors.every(function(color) {
        return color < 'marró';
    });
    document.write("Tots els colors són menors que 'marró' :"+ totsMenorsQueMarró+"<br>");

    // Torna els colors que són menors que 'marró'
    let colorsMenorsQueMarró = colors.filter(function(color) {
        return color < 'marró';
    });
    document.write("Colors menors que 'marró': "+ colorsMenorsQueMarró+"<br>");

    // Torna els darrers 2 colors (independentment de quants hi hagin abans)
    let darrersDosColors = colors.slice(-2);
    document.write("Darrers dos colors: "+ darrersDosColors+"<br>");

    // Afegeix el color 'turquesa'
    colors.push('turquesa');
    document.write("Array amb 'turquesa' afegit: "+ colors+"<br>");

    // Elimina el color 'verd'
    let indexVerd = colors.indexOf('verd');
    if (indexVerd !== -1) {
        colors.splice(indexVerd, 1);
        document.write("Array amb 'verd' eliminat: "+ colors+"<br>");
    }
}


function demoArray(){
    let array = [1,2,3,4,5,6];

    document.write(array.at(0)+"<br>");     //para return el valor en posicio
    document.write(array.concat([7,8,9])+"<br>");   //para añadir valor a final y return array con valor insertat
    array.constructor();        //para return el arry en principio que tiene marcado
    document.write(array+"<br>");
    array.copyWithin(2, 0, 3);  //para copia el posicio 0 a la 2 en posicio 3
    document.write(array+"<br>");

    let iterator = array.entries();
    //para return valor con clau,valor
    for (let entry of iterator) {
        document.write(entry + "<br>");
    };
    let conprova = array.every(function(array) {       //para conprova si total valor de array si es mayor que 0
        return array > 0;
    });
    document.write(conprova+"<br>");
    array.fill(5,2,4)       //canbia totas valor de array en static primer que numero seguna que posicio star tercera que posicio end,4 ya no
    document.write(array+"<br>");       //si solo poner un valor canbias totas por mismo valor
    let conprova1 = array.filter(function(array) {       //para conprova valor de array si es mayor que 3 y return new array
        return array > 3;
    });
    document.write(conprova1+"<br>");
    let conprova2 = array.find(function(array) {       //para conprova valor de array si es mayor que 3 y return la primera volor que mayor 3
        return array > 3;
    });
    document.write(conprova2+"<br>");
    let conprova3 = array.findIndex(function(array) {       //para conprova valor de array si es mayor que 3 y return la primera posicio que mayor 3
        return array > 3;
    });
    document.write(conprova3+"<br>");
    let array1 = [1, 2, [3, 4, [5, 6]]];
    let conprova4 = array1.flat(2);                             // Utilitzem flat() per aplanar el subarray amb profunditat 2
    document.write(conprova4+"<br>");
    let conprova5 = array.flatMap(element => [element, element]);   // Utilitzem flatMap() per duplicar cada element i aplanar el resultat
    document.write(conprova5+"<br>");
    array.forEach(function(element) {                            // Utilitzem forEach() per mostrar cada element de l'array
        document.write(element + " ");
    });
    let cadena = 'Hola';
    document.write("<br>"+Array.from(cadena)+"<br>");                 //s'utilitza per convertir una cadena de caràcters
    document.write(array.includes(1)+"<br>");        //compro si tendro de array si hay el '1';return por true o false
    document.write(array.indexOf(2)+"<br>");         //para encontrar el primera índice del número 2 y devuelve el posicio,-1 si el elemento no se encuentra en el array
    let esArray = Array.isArray(array);             //comprova si este variable es una array o no,return true o false;
    let conprova6 = array.join('! ');
    document.write(conprova6+"<br>");                 //per convertir l'array en una cadena de text amb '!' com a separador
    let iterador = array.keys();                    // Obtener un iterador de las claves
    for (let key of iterador) {                     // Iterar sobre las claves e imprimir en la consola
        document.write(key);
      }
    document.write("<br>"+array.lastIndexOf(2)+"<br>"); //para encontrar el último índice del número 2 y devuelve el posicio,-1 si el elemento no se encuentra en el array
    document.write(array.length+"<br>");   //return el numero de elements que tiene en array
    let arrayMapa = array.map(function(number) {            //per duplicar cada nombre de l'array
        return number * 2;          
    });
    document.write(arrayMapa+"<br>");
    document.write(array.pop()+"<br>");                //return el ultim element de array
    array.push(7,8);
    document.write(array);              //añadir elementos por ultimo
    let suma = array.reduce(function (acumulador, valorActual) {          //per reduir els elements a un valor únic   
        return acumulador + valorActual;                        // Fem servir reduce() per sumar tots els valors de l'array
    }, 0);                                                 // El segon argument (0 en aquest cas) és el valor inicial de l'acumulador
    document.write("<br>"+suma+"<br>");
    // y el function reduceRight() es lomismo pero desde derecha a la izquerda
    let conprova7=array.reverse() ;          //utiliza para invertir el orden de los elementos de un array
    document.write(array+" i con el function reverse "+conprova7+"<br>");
    let element = array.shift();            //elimina el primer elemento de un array y devuelve ese elemento
    document.write(array+" function shift "+element+"<br>");
    let slicedArray = array.slice(1, 4);    //retorna una copia superficial de part d'un array en un nou array objecte, sense modificar l'array original.
    document.write(array+" function slice "+slicedArray+"<br>");
    let mayor = array.some(function(numero) {   //conprova si dendro de este array si hay una elment compres el condicio y return true 
        return numero > 7;                      //si hay una element mayor que 7 return true si no return false
      });
    document.write(mayor+"<br>");
    // Fem servir sort() per ordenar els números de manera ascendent
    let array2 = [5,2,6,1,9];
    document.write(array2);
    array2.sort();
    document.write(" function sort "+array2+"<br>");
    array.splice(2, 2, '6', '5');   //utiliza para modificar el contenido de un array eliminando o reemplazando elementos existentes 
    document.write(array+"<br>");                      //y/o agregando nuevos elementos en su lugar. 
    // Fem servir toString() per convertir l'array en una cadena de text
    let cadenaArrayy = array.toString();
    document.write(cadenaArrayy+"toString<br>"); 
    // Añadimos elementos al principio del array usando unshift()
    array.unshift('9');
    document.write(array+"unshift<br>"); 
    let prova = array.valueOf();        //retorna el valor primitiu de l'objecte Array.
    document.write(prova+"valueOf<br>"); 
}