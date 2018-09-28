function ocurrences(numerox,arreglo){
    let contador=0;
    for(let number of arreglo){
        if(number==numerox){contador+=1;}
    }
    return contador;
}
ocurrences(1,[1,2,4,1,1,6]);
console.log(ocurrences(1,[1,2,4,1,1,1])
)