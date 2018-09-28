function adivina(num) {
    arr = [];
    for(let i=0; i<20; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    console.log(arr);
    if(arr.includes(num)) {
        console.log("Usted ha ganado!");
        return;
    }
    console.log("Usted ha perdido!");
}