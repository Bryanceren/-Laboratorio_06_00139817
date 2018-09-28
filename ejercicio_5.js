function ocurrencias(arr, type) {
    typeArr = [];
    arr.forEach(element => {
        if(typeof element === type) {
            typeArr.push(element);
        }
    });
    return typeArr;
}