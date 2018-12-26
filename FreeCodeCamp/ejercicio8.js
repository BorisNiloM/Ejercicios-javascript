function chunkArrayInGroups(arr, size) {

    let la = Math.ceil(arr.length / size);
    let aux = [];
    for (let i = 0; i < la; i++) {
        aux[i] = arr.splice(0, size);
    }

    return aux;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));