
window.addEventListener("load",() => {
  //Definiendo las varibles
  const formulario = document.querySelector('form');
  const buscador = document.querySelector('#buscador');
  const Api = new API('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hcmlhY2xhdWRpYXBlcmV6ZXNAZ21haWwuY29tIn0.yRPkOYGrVibj6USiXggmXC4-wgJ2T4m6ZhREsKVV8-U');

  const mascara = document.querySelector('.mask')

  

  formulario.addEventListener("keypress", function(){ 
    return soloNumeros(event);
  }, false);

  formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    //le pasamos el valor a consultar a nuestra api
    mascara.classList.remove('hide');
    Api.consultar(buscador.value)
      .then(res =>{
        console.log(res);
        mascara.classList.add('hide');
        mostrarResultado(res);
      });
  });
});

function mostrarResultado({nombres, apellidoPaterno, apellidoMaterno, dni }){
  Swal.fire({
    title: '',
    icon: 'info',
    html:
      `<b>Nombre:</b>${nombres} <br/>
      <b>Apellido Paterno:</b>${apellidoPaterno} <br/>
      <b>Apellido Materno:</b>${apellidoMaterno} <br/>
      <b>DNI:</b>${dni} <br/>
      `,
    showCloseButton: true
  });
}
//Solo permite introducir números.
function soloNumeros(e){
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    //Usando la definición del DOM level 2, "return" NO funciona.
    e.preventDefault();
  }
}