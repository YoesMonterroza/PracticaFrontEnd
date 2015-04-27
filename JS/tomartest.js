


contNavegacion=0;
function navegar(navegacion){

	switch(navegacion){
		case "siguiente":
		if(contNavegacion<=44){
			contNavegacion++;
			$('#div_Pregunta'+contNavegacion).css("display","block"); 
			$('#div_Pregunta'+ (contNavegacion-1)).css("display","none");
		}
		break;

		case "anterior":
		if(contNavegacion>=0){
			contNavegacion--;
			$('#div_Pregunta'+contNavegacion).css("display","block"); 
			$('#div_Pregunta'+ (contNavegacion+1)).css("display","none");
		}
		break;

	}


}