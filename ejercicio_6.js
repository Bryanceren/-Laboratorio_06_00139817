function encripta(cad) {
    arr = cad.split('')
    encriptada = [];
    arr.forEach(element => {
        switch (element) {
            case 'm':
                encriptada.push("0");
                break;

            case 'M':
                encriptada.push("0");
                break;

            case 'u':
                encriptada.push("1");
                break;
                
            case 'U':
                encriptada.push("1");
                break;

            case 'r':
                encriptada.push("2");
                break;

            case 'R':
                encriptada.push("2");
                break;
                
            case 'c':
                encriptada.push("3");
                break;

            case 'C':
                encriptada.push("3");
                break;

            case 'i':
                encriptada.push("4");
                break;

            case 'I':
                encriptada.push("4");
                break;
                
            case 'e':
                encriptada.push("5");
                break;

            case 'E':
                encriptada.push("5");
                break;

            case 'l':
                encriptada.push("6");
                break;
                
            case 'L':
                encriptada.push("6");
                break;

            case 'a':
                encriptada.push("7");
                break;

            case 'A':
                encriptada.push("7");
                break;
                
            case 'g':
                encriptada.push("8");
                break;

            case 'G':
                encriptada.push("8");
                break;

            case 'o':
                encriptada.push("9");
                break;

            case 'O':
                encriptada.push("9");
                break;
        
            default:
                encriptada.push(element);
                break;
        }
    });
        
    return encriptada.join('').toString();
}