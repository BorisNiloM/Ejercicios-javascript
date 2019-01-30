function smallestCommons(arr) {
    let aux = [];
    let largo = 0;
    let factores = [];
    ////////// los multiplos de un numero siempre son numeros primos
    function multi(num) { //busca los multiplicadores de num, y envia el multiplicar y las veces que se repite, en el formato {base,exp}, para mas adelante hacer un base^exp
        let base = 2;
        let exp = 0;
        let algo = true;
        let mul = [];
        do {
            if (num % base === 0) {
                num /= base;
                exp += 1;
                algo = true
            } else {
                algo = false;
                if (exp !== 0) {
                    mul.push({ base, exp });
                }
                base += 1;
                exp = 0;
            }
        } while (num !== 1)

        if (algo) {
            mul.push({ base, exp });
        }
        return mul
    }
    ////////
    function primos(num) { // decide si num es numero primo
        let cont = 0;
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                cont += 1;
            }
        }
        return cont === 1 ? true : false
    }

    /////// se crea un arreglo aux con los multiplicadores de los numeros, en formato {base,exp}
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        aux.push(...multi(i));
    };

    ///// aca se revisa el arreglo aux, y se filtran los numeros que tengan las mismas bases, se elige el de mayor exponente
    for (let i = 2; i <= Math.max(...arr); i++) {
        if (primos(i)) {
            largo = aux.filter(elem => elem.base === i).length; // para algunos numeros primos el largo de este arreglo puede ser cero
            if (largo) {
                // se filtra el arreglo para bases iguales, se ordena para el de mayor exponente que queda ultimo en el arreglo y se selecciona
                factores.push(aux.filter(elem => elem.base === i).sort((a, b) => a.exp - b.exp)[largo - 1]);
            }
        }
    }

    /////// una vez se tiene filtrado las bases con los mayores exponentes , se multiplican entre si
    return factores.map(elem => Math.pow(elem.base, elem.exp)).reduce((total, elem) => total *= elem);
}
console.log(smallestCommons([23, 18]))