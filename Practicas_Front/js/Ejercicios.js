//He colocado cada ejercicio dentro de una función para tener un poco más de organización.
// Establecer variables
function m_var() 
    {
        var nombre = "Juan";
        var apellidos = "Pérez Gómez";
        var edad = 25;
        var ciudad = "Madrid";
    
        return `variables_ nombre: ${nombre} apellidos: ${apellidos} edad: ${edad} ciudad: ${ciudad}`;
    }

// Sumando los valores de un arreglo
function suma_arr() 
    {
        var numeros = [1, 12, 5];
        var suma = 0;

    for (let i = 0; i < numeros.length; i++) 
        {
            const num_temp = numeros[i];
            suma += num_temp;
        }

    return "La suma es igual a: "+suma;
    }
// crea un objeto con propiedad nombre,apellido,edad
function user()
    {
        var user = 
        {
            nombre: "María",
            apellidos: "González López",
            edad: 30
        };
  
        var nombreCompleto = user.nombre + " " + user.apellidos;
        
        return "nombre de usuario:\t"+nombreCompleto;
    }
// Obtener correos de usuarios
function Obtener_correo()
    {
        var personas = 
        [
            { nombre: "Eduardo", email: "eduardo@microsoft.com", edad: 25 },
            { nombre: "Jose", email: "jose@hotmail.com", edad: 30 },
            { nombre: "Steven", email: "steven@gmx.com", edad: 28 },
            { nombre: "Paola", email: "paola@outlook.com", edad: 32 },
            { nombre: "Matt", email: "matt@gmail.com", edad: 27 }
        ];
    
  
        var correos = [];
        for (var i = 0; i < personas.length; i++) 
        {
            correos.push(personas[i].email);
        }
        return "correos obtenidos:\n"+correos;
    }
// mostrar el resultado de los ejercicios:
function resultado_ejercicios()
{
      console.log(m_var());
      console.log(suma_arr());
      console.log(user());
      console.log(Obtener_correo());
}
resultado_ejercicios();