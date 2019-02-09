function steamrollArray(arr) {
    // I'm a steamroller, baby
    let aux=[];

    let aplanador = function(arg){
        if(!Array.isArray(arg)){
            aux.push(arg);
        }else{
            aplanador(...arg);
        }
    }

    arr.forEach(aplanador);

    return aux
}
console.log(steamrollArray([1, {}, [3, [[4]]]]));
