var todolist=[];
function create(id,Nombre, Apellido, Fechadenacimiento,numerotelefonico,correo){
    var person = {
                idPerson:id,
                firstName:Nombre,
                lastName:Apellido,
                birthdate:Fechadenacimiento, 
                phone:numerotelefonico,
                mail:correo
            };
    todolist.push(person);
    return 0;
} 
function search(id){
    for(let element of todolist){
        if(element.idPerson==id){
            console.log("La persona que buscabas es: "+element);
        }
    }
    return 0;
} 
function modify(id,Nombre, Apellido, Fechadenacimiento,numerotelefonico,correo){
    for(let element of todolist){
        if(element.idPerson==id){
            element.firstName=Nombre;
            element.lastName=Apellido;
            element.birthdate=Fechadenacimiento;
            element.phone=numerotelefonico;
            element.mail=correo;
        }
    }
    return 0;
}

function deletex(id){
    for(let element of todolist){
        if(element.idPerson==id){
            delete element;
        }
    }
    return 0;
} 
function show(){
    console.log(todolist);
    return 0;
}

function menu(){
    let opc;
    opc=10;
    while(opc!=6){
        var opcion = prompt("1-ingresar persona\n2-Buscar una persona\n3-Modificar una persona\n4-Eliminar una persona\n5-Mostrar todas las personas\n6-Salir del programa\ningrese una opcion");  
        switch(opcion) {
            case 1:
                create
                break;
            case 2:
            search
                break;
                case 3:
                modify
                break;
                case 4:
                deletex
                break;
                case 5:
                show
                break;
              
            default:
                break;
        }   
    }
}