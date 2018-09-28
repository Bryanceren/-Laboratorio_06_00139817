var todolist=[];
function createobject(Nombre, Apellido, Fechadenacimiento,numerotelefonico,correo){
    var person = {firstName:Nombre,
                lastName:Apellido,
                birthdate:Fechadenacimiento, 
                phone:numerotelefonico,
                mail:correo
            };
    todolist.push(person);
    return 0;
} 
createobject('JON', 'black', '04/11/2000','70-65-8941','jhonywalker@gmail.com');
createobject('JON', 'black', '04/11/2000','70-65-8941','jhonywalker@gmail.com');
createobject('JON', 'black', '04/11/2000','70-65-8941','jhonywalker@gmail.com');
console.log(todolist);