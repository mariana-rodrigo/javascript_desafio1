let anioDeNacimiento = Number (prompt('Ingresá tu año de nacimiento'));
let posteriorALaLlegada = anioDeNacimiento - 1969;
let anteriorALaLlegada = 1969 - anioDeNacimiento;
if (anioDeNacimiento > 1969){
    alert ('Cuano naciste habían pasado ' + posteriorALaLlegada + " años de la llegada del Hombre a la Luna. Nuevamente, interesante pero irrelevante.")
}
else if (anioDeNacimiento === 1969){
    alert ('Naciste el mismo año que el hombre llegó a la Luna')
    let mesDeNacimiento = (prompt('Ingresá el mes que naciste'));
    if (mesDeNacimiento === 'julio'){
        alert ('Naciste el mismo mes que el hombre llegó a la Luna. Si no lo sabías, ahora lo sabés!');
    }
    else{
        alert ('Pero no naciste en el mismo mes de la llegada del hombre a la Luna');
    }
}
else{
    alert ('Naciste '+anteriorALaLlegada+' años antes de la llegada del hombre a la Luna');
}
