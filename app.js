function agregarTarea (){
  if (input.value) {
    //Crear tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
	  
    //texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //Crear y agregar contenedor de iconos 
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos)
