function promedioeincerteza(mediciones){
    let promedio,suma2=0;
    let sum=0;
    for(let number of mediciones){
        sum+=number;
    }
    promedio=sum/mediciones.length;

    for(let number2 of mediciones){
        suma2+=Math.pow((number2-promedio),2);
    }
    console.log(promedio+"±"+Math.sqrt((1/(promedio-1))*suma2));
    return 0;
}
promedioeincerteza([14.4,14.5,14.4,14.3,14.6,14.5]);