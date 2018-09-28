function listar(arreglo){
    let numbers=0,strings=0,booleans=0;
    for(let element of arreglo){
        if(typeof element==typeof 'a'){
            strings+=1;
        }
        if(typeof element==typeof 1){
            numbers+=1;
        }
        if(typeof element==typeof true){
            booleans+=1;
        }
    }
    console.log("el arreglo tiene "+numbers+ " numeros "+strings+" strings "+ booleans+" booleans ");
    return 0;
}
listar([1,2,3,4,'string1','string2','string3',true]);