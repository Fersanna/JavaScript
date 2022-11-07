function compra2(){

	let descuento;
	let cantidad;
	let precio;
	let total;
	

	
		
	descuento=document.getElementById("categorias").value;
	cantidad=document.getElementById("cantidad").value;
	precio=document.getElementById("precio").value;
	total= (precio-(precio*descuento))*cantidad;
	
	
	document.getElementById("apagar").value="Total a Pagar: $ " + total;	
    
    
	
    
    // alert(frase);
}  