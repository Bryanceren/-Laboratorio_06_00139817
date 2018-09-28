function suma(arr) {
    console.log(arr);
    if(arr.length % 2 == 0) {
        for(let i=0; i<arr.length/2; i++) {
            console.log(arr[i] + " + " + arr[arr.length - (1+i)] + " = " + (arr[i] + arr[arr.length - (1+i)]));
        }
        return;
    }
    for(let i=0; i<Math.floor(arr.length/2); i++) {
        console.log(arr[i] + " + " + arr[arr.length - (1+i)] + " = " + (arr[i] + arr[arr.length - (1+i)]));
    }
    console.log(arr[Math.floor(arr.length/2)] + " + " + arr[Math.floor(arr.length/2)] + " = " + (arr[Math.floor(arr.length/2)] * 2));
}