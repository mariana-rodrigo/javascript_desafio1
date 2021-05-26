$(document).ready(function(){
    $("form").on ('submit', function enviarFormulario(evento){
        evento.preventDefault();
        const nombre = $(".nombre").val();
        const apellido = $(".apellido").val();
        const mail = $(".mail").val();
        const comoNosConociste = $(":selected").val();
        let queTeInteresa = "";
        const mensaje =$("textarea").val();
        $("button").append('<h3>Gracias por contactarnos, pronto te responderemos!</h3>');
        $("h3").show();
        
        if($(".checkbox1:checked").val()==="on"){
            queTeInteresa += "Encargar una torta, ";
        } 
        
        if($(".checkbox2:checked").val()==="on"){
            queTeInteresa += "Mesa dulce para adulto, ";
        } 
        
        if($(".checkbox3:checked").val()==="on"){
            queTeInteresa += "Mesa dulce para chicos";
        }

        console.log("La información ingresada es Nombre: "+nombre+ "Apellido: "+ apellido +" Dirección de mail: "+ mail +
         " Llegó a través de "+ comoNosConociste+ " Le interesa "+ queTeInteresa+ " mensaje: "+ mensaje);
    })
})
