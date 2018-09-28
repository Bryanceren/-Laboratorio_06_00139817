function sumapro(arreglo){
    let sum=0;
    for(let number of arreglo){
        sum+=number;
    }
    console.log("La suma total es "+sum);
    console.log("El promedio es "+(sum/arreglo.length));

    return 0;
}
sumapro([10,8,8]);