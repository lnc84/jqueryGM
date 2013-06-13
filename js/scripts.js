/* setTimeOut y On */
$(document).ready(function() {				
		$("#btnFade").on("click",function() {
		setTimeout(function() {
		$('#dvData').fadeOut();}, 2000);
	});

/* Trigger */
	$("button:first").click(function () {
	//alert("primero");
		update($("span:first"));
	});
	$("button:last").click(function () {
	$("button:first").trigger('click');
	//alert("primero y segundo");
		update($("span:last"));
	});
	//Funcion para sumar 1
	function update(j) {
		var n = parseInt(j.text(), 10);
		j.text(n + 1);
	}

//Toogle
	$("#toogle").click(function() {	
		$('.too').toggle(1000);
	});	
	
//addClass			
	$("#add").mouseleave(function(){
		$("#addId").removeClass("active");		
	});
	
	$("#add").mouseover(function(){
		$("#addId").addClass("active");		
	});
	
	
	
	
/* Especificaciones */
	var esp = false;
	$('#showInfoTableBtn').click(function () {
		
		if(esp == true){
			esp=false;
			value = '-900px';
			$("#showInfoTableBtn").removeClass("open");
		} else{
			value = '-300px';
			esp=true;
			$("#showInfoTableBtn").addClass("open");
		}
		
		$('#infoTableWrapper').animate({		
			right: value
		}, 1000, function() {
		
		});
	});
		
});



	
	
