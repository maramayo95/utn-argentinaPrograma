

$(document).ready(function(){
	
	$('#colorRojo').click(()=> {
		$('#color').addClass('rojo').removeClass('amarillo').removeClass('verde')

	})
	$('#colorVerde').click(()=> {
		$('#color').removeClass('rojo').removeClass('amarillo').addClass('verde')
	})
	$('#colorAmarillo').click(()=> {
		$('#color').removeClass('verde').removeClass('rojo').addClass('amarillo')

	})


});
